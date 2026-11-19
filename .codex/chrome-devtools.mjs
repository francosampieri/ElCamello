import {existsSync, readFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath, pathToFileURL} from 'node:url';

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export function buildLaunch(root = repositoryRoot) {
  const runtime = resolve(root, '../tmp/herramientas-MCP');
  const packageDirectory = resolve(runtime, 'node_modules/chrome-devtools-mcp');
  const manifest = resolve(packageDirectory, 'package.json');
  const browser = resolve(runtime, 'browsers/chrome/win64-158.0.8127.36/chrome-win64/chrome.exe');
  const bootstrapMessage = 'Preparar las dependencias según documentacion/herramientas/configuracion-mcp.md.';
  if (!existsSync(manifest) || !existsSync(browser)) throw new Error(bootstrapMessage);
  const metadata = JSON.parse(readFileSync(manifest, 'utf8'));
  if (metadata.version !== '1.13.0') throw new Error(`Se requiere chrome-devtools-mcp@1.13.0. ${bootstrapMessage}`);
  return {
    script: resolve(packageDirectory, metadata.bin['chrome-devtools-mcp']),
    args: ['--headless', '--isolated', '--no-usage-statistics', '--no-performance-crux', `--executablePath=${browser}`],
  };
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  const launch = buildLaunch();
  process.env.CHROME_DEVTOOLS_MCP_NO_UPDATE_CHECKS = '1';
  process.argv = [process.execPath, launch.script, ...launch.args];
  await import(pathToFileURL(launch.script).href);
}
