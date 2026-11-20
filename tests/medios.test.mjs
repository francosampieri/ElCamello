import assert from 'node:assert/strict';
import { statSync } from 'node:fs';
import test from 'node:test';
import { catalogo, validarCatalogo } from '../src/data/contenido.ts';
import { resolverFoto } from '../src/data/medios.ts';

test('resuelve las fotos elegidas al derivado real con alternativo y fuente', () => {
  const fotos = catalogo.medios.filter(medio => medio.recurso.tipo === 'imagen');
  assert.ok(fotos.length > 0);
  for (const foto of fotos) {
    const resultado = resolverFoto(foto.id);
    assert.equal(resultado?.referencia, foto.recurso.referencia);
    assert.ok(resultado?.textoAlternativo.trim());
    assert.ok(foto.unidades.contexto?.fuente);
    assert.ok(statSync(new URL('../src/assets/medios/' + resultado.referencia, import.meta.url)).size > 0);
  }
});

test('un ID inexistente o una selección pendiente no genera una URL ficticia', () => {
  assert.equal(resolverFoto('foto-que-no-existe'), undefined);
  const propuesta = catalogo.propuestas.find(item => item.id === 'empresas');
  assert.equal(propuesta?.unidades.medios.estado, 'pendiente');
  assert.equal('valor' in propuesta.unidades.medios, false);
  assert.deepEqual(validarCatalogo(), []);
});
