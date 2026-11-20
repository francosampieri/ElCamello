import assert from 'node:assert/strict';
import { test } from 'node:test';
import { leerPresentacion, leerEspacios, fotosDeContexto } from '../src/data/presentacion-parador.ts';

test('la presentación conserva fortalezas confirmadas y reserva el borrador para revisión', () => {
  const publica = leerPresentacion();
  assert.deepEqual(publica.fortalezas, ['Exclusividad', 'Paisaje de montaña', 'Variedad de actividades', 'Personalización']);
  assert.equal(publica.introduccion, undefined);
  const interna = leerPresentacion(true);
  assert.equal(interna.introduccion.estado, 'provisional');
  assert.match(interna.introduccion.valor, /grupo/);
});

test('el catálogo distingue grupos y permite leer habitaciones y temporada sin publicar borradores', () => {
  const { instalaciones, actividades } = leerEspacios();
  const habitaciones = instalaciones.find(espacio => espacio.id === 'habitaciones');
  assert.match(habitaciones.descripcion.valor, /posibilidad adicional.*consult/i);
  assert.equal(actividades.some(espacio => espacio.id === 'habitaciones'), false);
  assert.equal(instalaciones.find(espacio => espacio.id === 'sector-acuatico').temporada, 'Temporada de verano');
  assert.equal(actividades.find(espacio => espacio.id === 'caminata').descripcion, undefined);
  assert.equal(leerEspacios(true).actividades.find(espacio => espacio.id === 'caminata').descripcion.estado, 'provisional');
});

test('el contexto visual usa medios reales y omite los que no tienen archivo disponible', () => {
  const fotos = fotosDeContexto(() => true);
  assert.deepEqual(fotos.map(foto => foto.id), ['predio-atardecer', 'relieve-montana']);
  assert.ok(fotos.every(foto => foto.textoAlternativo && foto.referencia.endsWith('.webp')));
  assert.deepEqual(fotosDeContexto(() => false), []);
});
