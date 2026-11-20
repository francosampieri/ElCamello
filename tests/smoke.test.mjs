import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { after, before, test } from 'node:test';

const root = fileURLToPath(new URL('../', import.meta.url));
const manifestUrl = new URL('../node_modules/astro/package.json', import.meta.url);
const { bin } = JSON.parse(readFileSync(manifestUrl, 'utf8'));
const astro = fileURLToPath(new URL(bin.astro, manifestUrl));
let preview;
let baseUrl;

before(async () => {
  preview = spawn(process.execPath, [astro, 'preview', '--host', '127.0.0.1', '--port', '0'], {
    cwd: root,
    env: { ...process.env, NO_COLOR: '1', ASTRO_TELEMETRY_DISABLED: '1' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  baseUrl = await new Promise((resolve, reject) => {
    let output = '';
    const timeout = setTimeout(() => {
      reject(new Error(`Astro no inició la vista previa en 30 segundos.\n${output}`));
    }, 30_000);
    const finish = (callback, value) => {
      clearTimeout(timeout);
      callback(value);
    };
    preview.on('error', (error) => finish(reject, error));
    preview.on('exit', (code) => finish(reject, new Error(`La aplicación no pudo servir el build (salida ${code}).\n${output}`)));
    const readOutput = (chunk) => {
      output = (output + chunk.toString()).slice(-8_000);
      const address = output.match(/http:\/\/127\.0\.0\.1:\d+/);
      if (address) finish(resolve, address[0]);
    };
    preview.stdout.on('data', readOutput);
    preview.stderr.on('data', readOutput);
  });
});

after(async () => {
  if (!preview || preview.exitCode !== null || preview.signalCode !== null) return;
  const closed = once(preview, 'close');
  preview.kill();
  await closed;
}, { timeout: 5_000 });

test('la portada generada responde con un documento español e identidad accesible sin JavaScript', async () => {
  const response = await fetch(baseUrl, { signal: AbortSignal.timeout(5_000) });
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /text\/html/);
  const html = await response.text();
  assert.match(html, /<html\b[^>]*\blang=["']es["']/i);
  assert.match(html, /<title>\s*Parador El Camello\s*<\/title>/i);
  assert.match(html, /<main\b/i);
  assert.match(html, /<h1\b[^>]*>\s*Parador El Camello\s*<\/h1>/i);
});

test('la principal tiene un marco común con salto y solo destinos públicos disponibles', async () => {
  const html = await (await fetch(baseUrl, { signal: AbortSignal.timeout(5_000) })).text();
  for (const tag of ['header', 'main', 'footer']) {
    assert.equal([...html.matchAll(new RegExp('<' + tag + '\\b', 'g'))].length, 1);
  }
  assert.match(html, /href="#contenido">Saltar al contenido/);
  assert.match(html, /<main\b[^>]*id="contenido"[^>]*tabindex="-1"/);
  assert.match(html, /Cacheuta, Mendoza/);
  assert.match(html, /<nav\b[\s\S]*?href="\/"[\s\S]*?<\/nav>/);
  assert.doesNotMatch(html, /href="[^"]*(?:#propuestas|revision-navegacion|wa\.me)/);
});

test('una ruta inexistente responde 404 en vez de simular una página válida', async () => {
  const response = await fetch(new URL('/ruta-inexistente-c01', baseUrl), {
    signal: AbortSignal.timeout(5_000),
  });
  assert.equal(response.status, 404);
});
