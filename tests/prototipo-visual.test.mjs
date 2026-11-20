import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { after, test } from 'node:test';

const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = new URL('../node_modules/astro/package.json', import.meta.url);
const astro = fileURLToPath(new URL(JSON.parse(readFileSync(manifest, 'utf8')).bin.astro, manifest));
const ruta = '/prototipo-visual/';
const servers = [];

function start(command) {
  const server = spawn(process.execPath, [astro, command, '--host', '127.0.0.1', '--port', '0'], {
    cwd: root,
    env: { ...process.env, NO_COLOR: '1', ASTRO_TELEMETRY_DISABLED: '1' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  servers.push(server);
  return new Promise((resolve, reject) => {
    let output = '';
    const timer = setTimeout(() => reject(new Error('Astro no arrancó.\n' + output)), 30_000);
    const finish = (callback, value) => {
      clearTimeout(timer);
      callback(value);
    };
    server.once('error', error => finish(reject, error));
    server.once('exit', code => finish(reject, new Error(`Astro terminó (${code}).\n${output}`)));
    const read = chunk => {
      output = (output + chunk).slice(-8000);
      const url = output.match(/http:\/\/127\.0\.0\.1:\d+/)?.[0];
      if (url) finish(resolve, url);
    };
    server.stdout.on('data', read);
    server.stderr.on('data', read);
  });
}

after(async () => {
  await Promise.all(servers.filter(s => s.exitCode === null && s.signalCode === null).map(async s => {
    const closed = once(s, 'close');
    s.kill();
    await closed;
  }));
}, { timeout: 5000 });

const load = (base, path) => fetch(new URL(path, base), { signal: AbortSignal.timeout(10_000) });

test('en desarrollo la muestra entrega portada y presentación enlazada en el HTML inicial', async () => {
  const dev = await start('dev');
  const response = await load(dev, ruta);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<main[^>]*data-estilo="aventura"/);
  assert.match(html, /<h1[^>]*>\s*Parador El Camello\s*<\/h1>/);
  assert.match(html, /href="#presentacion"/);
  assert.match(html, /id="presentacion"/);
  assert.match(html, /<img[^>]*alt="[^"]+"/);
  assert.match(html, /href="#foto-pileta"/);
  assert.match(html, /id="foto-pileta"/);
  for (const estilo of ['encuentro', 'paisaje']) {
    const alternative = await (await load(dev, ruta + '?estilo=' + estilo)).text();
    assert.match(alternative, new RegExp('<main[^>]*data-estilo="' + estilo + '"'));
    assert.match(alternative, /<h1[^>]*>\s*Parador El Camello\s*<\/h1>/);
  }
  const desconocido = await (await load(dev, ruta + '?estilo=desconocido')).text();
  assert.match(desconocido, /<main[^>]*data-estilo="aventura"/);
});

test('la vista generada conserva la home y excluye la ruta y los medios del prototipo', async () => {
  const preview = await start('preview');
  assert.equal((await load(preview, ruta)).status, 404);
  assert.match(await (await load(preview, '/')).text(), /Cacheuta, Mendoza/);
  const files = readdirSync(new URL('../dist/', import.meta.url), { recursive: true });
  assert.ok(files.every(path => !/(prototipo-visual|c03-muestra)/i.test(String(path))));
});
