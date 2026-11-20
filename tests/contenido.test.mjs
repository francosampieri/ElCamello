import assert from 'node:assert/strict';
import { test } from 'node:test';

test('la consulta compartida encuentra la propuesta de empresas por su ID', async () => {
  const { buscarPropuesta } = await import('../src/data/contenido.ts');
  assert.equal(buscarPropuesta('empresas')?.id, 'empresas');
});

test('un ID desconocido no devuelve otra propuesta', async () => {
  const { buscarPropuesta } = await import('../src/data/contenido.ts');
  assert.equal(buscarPropuesta('desconocida'), undefined);
});

test('la lectura de empresas conserva público confirmado y título provisional', async () => {
  const { buscarPropuesta } = await import('../src/data/contenido.ts');
  const { publico, titulo } = buscarPropuesta('empresas').unidades;
  assert.equal(publico.estado, 'confirmado');
  assert.match(publico.valor, /empresas/i);
  assert.equal(titulo.estado, 'provisional');
  assert.ok(titulo.valor.length > 0);
});

test('una selección pendiente se conserva aunque carezca de un valor utilizable', async () => {
  const { buscarPropuesta } = await import('../src/data/contenido.ts');
  const { medios } = buscarPropuesta('empresas').unidades;
  assert.equal(medios.estado, 'pendiente');
  assert.equal('valor' in medios, false);
});

test('el inventario deriva ubicación, valor y motivo desde la unidad provisional', async () => {
  const { buscarPropuesta, listarPendientes } = await import('../src/data/contenido.ts');
  const { titulo } = buscarPropuesta('empresas').unidades;
  const entrada = listarPendientes().find(({ ubicacion }) => ubicacion === 'propuestas.empresas.titulo');
  assert.deepEqual(entrada, { ...titulo, ubicacion: 'propuestas.empresas.titulo' });
  assert.ok(entrada.revisar);
});

test('confirmar una unidad la retira del inventario y conserva otro pendiente', async () => {
  const { confirmado, inventarioEditorial, pendiente, provisional } = await import('../src/data/editorial.ts');
  const unidades = { titulo: provisional('Ejemplo', 'Confirmar título'), medios: pendiente('Seleccionar fotos') };
  const registros = [{ id: 'ejemplo', unidades }];
  assert.equal(inventarioEditorial({ propuestas: registros }).length, 2);
  unidades.titulo = confirmado('Título acordado', 'Validación editorial');
  assert.deepEqual(inventarioEditorial({ propuestas: registros }).map(({ ubicacion }) => ubicacion), [
    'propuestas.ejemplo.medios',
  ]);
});

test('el catálogo de detalle ofrece los cuatro públicos y separa incluidos de opcionales', async () => {
  const { catalogo, buscarPropuesta } = await import('../src/data/contenido.ts');
  assert.deepEqual(catalogo.propuestas.map(({ id }) => id), [
    'empresas', 'cumpleanos-adultos', 'cumpleanos-infantiles', 'primaria-padres',
  ]);
  assert.ok(catalogo.consultaGeneral.unidades.titulo.valor);
  const { incluidos, opcionales } = buscarPropuesta('empresas').unidades;
  assert.ok(incluidos.valor.some((actividad) => /premios/i.test(actividad)));
  assert.ok(opcionales.valor.includes('Gastronomía'));
  assert.equal(incluidos.valor.includes('Gastronomía'), false);
  for (const id of ['cumpleanos-adultos', 'cumpleanos-infantiles']) {
    assert.equal('capacidad' in buscarPropuesta(id).unidades, true);
    assert.equal(buscarPropuesta(id).unidades.capacidad.estado, 'provisional');
  }
});

test('cambiar un nombre de ejemplo conserva la identidad y ambos consumidores leen la edición', async () => {
  const { buscarPropuesta, catalogo } = await import('../src/data/contenido.ts');
  const original = buscarPropuesta('empresas');
  const fuente = [{ ...original, unidades: {
    ...original.unidades,
    titulo: { estado: 'provisional', valor: 'Encuentro en Cacheuta', revisar: 'Confirmar título' },
  } }];
  const preview = buscarPropuesta('empresas', fuente);
  const detalle = buscarPropuesta('empresas', fuente);
  assert.equal(preview.id, original.id);
  assert.equal(preview.unidades.titulo.valor, 'Encuentro en Cacheuta');
  assert.deepEqual(detalle.unidades.titulo, preview.unidades.titulo);
  assert.notEqual(buscarPropuesta('empresas', catalogo.propuestas).unidades.titulo.valor, preview.unidades.titulo.valor);
});

test('el catálogo admite que toda la selección audiovisual siga pendiente', async () => {
  const { catalogo, validarCatalogo, listarPendientes } = await import('../src/data/contenido.ts');
  assert.deepEqual(catalogo.medios, []);
  assert.deepEqual(validarCatalogo(), []);
  assert.ok(listarPendientes().some(({ ubicacion }) => ubicacion === 'instalaciones.habitaciones.medios'));
});

test('la validación ubica tanto IDs duplicados como vínculos a registros y medios inexistentes', async () => {
  const { catalogo, validarCatalogo } = await import('../src/data/contenido.ts');
  const [empresas] = catalogo.propuestas;
  const propuesta = { ...empresas, unidades: {
    ...empresas.unidades, medios: { estado: 'confirmado', valor: ['foto-faltante'] },
  }, referencias: { actividades: ['actividad-faltante'] } };
  const instalacion = catalogo.instalaciones[0];
  const problemas = validarCatalogo({ ...catalogo,
    propuestas: [propuesta], instalaciones: [instalacion, instalacion],
  });
  assert.deepEqual(problemas, [
    { tipo: 'id-duplicado', ubicacion: 'instalaciones.sector-acuatico' },
    { tipo: 'referencia-inexistente', ubicacion: 'propuestas.empresas.medios', destino: 'medios.foto-faltante' },
    { tipo: 'referencia-inexistente', ubicacion: 'propuestas.empresas.referencias.actividades', destino: 'actividades.actividad-faltante' },
  ]);
});

test('una selección real puede referenciar un medio y una FAQ puede referenciar su propuesta', async () => {
  const { catalogo, validarCatalogo } = await import('../src/data/contenido.ts');
  const [empresas] = catalogo.propuestas;
  const propuesta = { ...empresas, unidades: {
    ...empresas.unidades, medios: { estado: 'provisional', valor: ['foto-real'], revisar: 'Elegir recorte' },
  } };
  const [faq] = catalogo.faqs;
  assert.deepEqual(validarCatalogo({ ...catalogo, propuestas: [propuesta],
    faqs: [{ ...faq, referencias: { propuestas: ['empresas'] } }],
    medios: [{ id: 'foto-real', recurso: { tipo: 'imagen', referencia: 'fixture-de-prueba' }, unidades: {} }],
  }), []);
});

test('el contacto pendiente no da un destino accionable y se incluye en revisión', async () => {
  const { catalogo, listarPendientes } = await import('../src/data/contenido.ts');
  const { whatsapp } = catalogo.contacto.unidades;
  assert.equal(whatsapp.estado, 'pendiente');
  assert.equal('valor' in whatsapp, false);
  assert.ok(listarPendientes().find(({ ubicacion }) => ubicacion === 'contacto.canales.whatsapp'));
});

test('un importe representativo sigue disponible y rastreable como provisional', async () => {
  const { buscarPropuesta, listarPendientes } = await import('../src/data/contenido.ts');
  const { precio } = buscarPropuesta('empresas').unidades;
  assert.equal(precio.estado, 'provisional');
  assert.ok(precio.valor.importe > 0);
  assert.deepEqual(listarPendientes().find(({ ubicacion }) => ubicacion === 'propuestas.empresas.precio').valor, precio.valor);
});
