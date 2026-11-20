import assert from 'node:assert/strict';
import { test } from 'node:test';
import { confirmado, pendiente, provisional } from '../src/data/editorial.ts';
import { destinosHabilitados } from '../src/data/navegacion.ts';
import { resolverWhatsApp } from '../src/data/whatsapp.ts';

const dato = valor => confirmado(valor, 'Fixture de prueba');
const texto = 'Hola, ¿se puede el sábado + domingo & feriado?';
const fixture = {
  numero: dato('541100000000'),
  general: dato('Consulta general'),
  personalizado: dato('Quiero armar una propuesta'),
  propuestas: [{ id: 'empresas', unidades: { mensajeWhatsApp: dato(texto) } }],
};

test('WhatsApp preserva destino y mensaje exacto de cada ámbito', () => {
  for (const [ambito, esperado] of [
    [{ tipo: 'general' }, 'Consulta general'],
    [{ tipo: 'personalizado' }, 'Quiero armar una propuesta'],
    [{ tipo: 'propuesta', id: 'empresas' }, texto],
  ]) {
    const result = resolverWhatsApp(ambito, fixture);
    assert.equal(result.estado, 'disponible');
    const url = new URL(result.href);
    assert.equal(url.origin, 'https://wa.me');
    assert.equal(url.pathname, '/541100000000');
    assert.deepEqual([...url.searchParams], [['text', esperado]]);
  }
});

test('el contacto rechaza datos incompletos e IDs desconocidos sin cruzar ámbitos', () => {
  const general = { tipo: 'general' };
  for (const [ambito, fuente, motivo] of [
    [{ tipo: 'propuesta', id: 'sin-propuesta' }, fixture, 'propuesta-desconocida'],
    [general, { ...fixture, numero: dato('+54 1100000000') }, 'numero-invalido'],
    [general, { ...fixture, numero: dato('') }, 'numero-invalido'],
    [general, { ...fixture, numero: pendiente('Validar') }, 'numero-pendiente'],
    [general, { ...fixture, numero: provisional('541100000000', 'Validar') }, 'numero-pendiente'],
    [general, { ...fixture, general: provisional(texto, 'Validar') }, 'mensaje-pendiente'],
    [general, { ...fixture, general: pendiente('Validar') }, 'mensaje-pendiente'],
    [general, { ...fixture, general: dato('  ') }, 'mensaje-pendiente'],
  ]) {
    const result = resolverWhatsApp(ambito, fuente);
    assert.deepEqual(result, { estado: 'no-disponible', motivo });
  }
});

test('la navegación conserva anclas de otra página y omite destinos sin habilitar', () => {
  const items = [
    { id: 'inicio', etiqueta: 'Inicio', ruta: '/' },
    { id: 'propuestas', etiqueta: 'Propuestas', ruta: '/', fragmento: 'propuestas' },
    { id: 'nosotros', etiqueta: 'Nosotros', ruta: '/', fragmento: 'nosotros' },
  ];
  assert.deepEqual(destinosHabilitados(items, ['inicio', 'propuestas']).map(x => x.href), ['/', '/#propuestas']);
  assert.deepEqual(destinosHabilitados(items, ['desconocido']), []);
});
