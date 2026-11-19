# Playwright CLI local

Verificado el 18 de noviembre de 2026. Se eligió Playwright CLI con su skill para la automatización del navegador. No se agregó un servidor Playwright MCP al proyecto.

## Componentes y alcance

| Componente | Estado |
| --- | --- |
| Skill `.agents/skills/playwright-cli/` | Instrucciones del agente; instalación gestionada por separado del binario. |
| Binario `@playwright/cli` | Instalado localmente y verificado: **0.1.25**. |
| Dependencias del CLI | `playwright` y `playwright-core` **1.66.0-alpha-2026-11-18**, fijadas por el paquete oficial y por el lockfile local. |
| Chrome for Testing | Portable compartido con la preparación de Chrome DevTools: **158.0.8127.36**. |
| Pruebas del producto | C-01 creó la base Astro y dos smokes HTTP con el runner integrado de Node; `npm run verify` pasó. No se instaló `@playwright/test`; las pruebas de interacción se ampliarán en los changes correspondientes. |

El CLI utiliza un daemon local para conservar cada sesión entre comandos. Ese proceso forma parte de su funcionamiento y no constituye una configuración de Playwright MCP en Codex.

## Ubicación local

Todo el paquete y sus salidas están fuera del repositorio `web`, en:

```text
C:/Users/franc/Desktop/ElCamello/tmp/herramientas-Playwright/
  package.json
  package-lock.json
  node_modules/.bin/playwright-cli.cmd
  playwright-cli.ps1
  cli.config.json
  .playwright/
  artifacts/
  runtime/daemon/
```

El ejecutable de Chrome compartido está en:

```text
C:/Users/franc/Desktop/ElCamello/tmp/herramientas-MCP/browsers/chrome/win64-158.0.8127.36/chrome-win64/chrome.exe
```

Estas rutas pertenecen a esta máquina. Los temporales no se incluyen en Git y deben recrearse si se eliminan. No se modificaron el PATH, npm global ni configuraciones globales del usuario. La instalación utilizó Node **24.19.0**, npm **11.17.0**, tres paquetes y scripts de instalación desactivados.

## Uso reproducible en PowerShell

Desde `C:/Users/franc/Desktop/ElCamello/web`:

```powershell
& '../tmp/herramientas-Playwright/playwright-cli.ps1' --version
& '../tmp/herramientas-Playwright/playwright-cli.ps1' --help
& '../tmp/herramientas-Playwright/playwright-cli.ps1' '-s=elcamello-revision' open 'about:blank' '--config=cli.config.json' '--idle-timeout=60000'
& '../tmp/herramientas-Playwright/playwright-cli.ps1' '-s=elcamello-revision' eval 'location.href'
& '../tmp/herramientas-Playwright/playwright-cli.ps1' '-s=elcamello-revision' snapshot
& '../tmp/herramientas-Playwright/playwright-cli.ps1' '-s=elcamello-revision' close
```

El wrapper ejecuta el `.cmd` local sin descargar paquetes, cambia temporalmente el directorio de trabajo a la carpeta de la herramienta y restaura el directorio anterior al terminar. La configuración selecciona Chrome mediante `browser.launchOptions.executablePath`, fuerza `headless: true`, usa un contexto aislado y dirige las salidas a `artifacts/`. No utiliza el perfil personal del navegador.

El wrapper configura `NO_UPDATE_NOTIFIER=1` durante cada invocación para evitar consultas automáticas de actualización. También configura `PWTEST_DAEMON_SESSION_DIR` para guardar el registro del daemon en `runtime/daemon/`. Esta última es una variable interna comprobada en el código de la dependencia fijada; debe revisarse si se actualiza el CLI. Ambas variables se restauran al terminar y no se escriben en el entorno permanente del usuario.

Para verificar el cierre, el wrapper acepta `list --json`. Cerrar siempre la sesión específica que se creó; evitar `close-all` y `kill-all` cuando otros agentes puedan estar trabajando.

Para reinstalar las mismas dependencias conservando el lockfile:

```powershell
Push-Location 'C:/Users/franc/Desktop/ElCamello/tmp/herramientas-Playwright'
try {
    npm.cmd ci --ignore-scripts --no-audit --no-fund --registry=https://registry.npmjs.org/ --cache='C:/Users/franc/Desktop/ElCamello/tmp/herramientas-Playwright/npm-cache'
} finally {
    Pop-Location
}
```

Si se pierde la carpeta completa, recrear primero un paquete privado en esa carpeta temporal e instalar `@playwright/cli@0.1.25` con `--save-exact --ignore-scripts --no-audit --no-fund`. Recrear también el wrapper y la configuración con las rutas locales correctas. No ejecutar instalación global ni `install-browser`: Chrome ya está disponible en la ruta compartida.

## Verificación realizada

| Comprobación | Resultado observado |
| --- | --- |
| Consulta al registro oficial npm | `@playwright/cli` 0.1.25, requisito Node `>=20`; versión exacta guardada en `package.json` y `package-lock.json`. |
| `--version` | Salida `0.1.25`, código 0. |
| `--help` y `open --help` | Comandos y parámetros disponibles, código 0. |
| Abrir `about:blank` | Sesión `elcamello-herramienta-smoke`, headless y aislada; apertura correcta. |
| `eval 'location.href'` | Resultado `"about:blank"`. |
| `snapshot` | Comando correcto; página vacía sin elementos. Snapshot inicial: `artifacts/page-2026-11-18T21-19-01-380Z.yml`, vacío como corresponde a `about:blank`. |
| Cierre específico | `Browser 'elcamello-herramienta-smoke' closed`, código 0. |
| `list --json` posterior | `{ "browsers": [] }` dentro del registro aislado de esta herramienta. |

El primer intento dentro del sandbox de Windows falló porque Crashpad de Chrome no pudo iniciar. La misma prueba funcionó con permisos de ejecución ampliados. En este entorno, abrir el navegador puede requerir esa autorización; consultar ayuda o versión no demuestra por sí solo que el navegador pueda arrancar.

Esta verificación del 18 de noviembre comprueba el engranaje CLI/daemon/navegador. No valida páginas, formularios, navegación, accesibilidad ni flujos E2E del producto. C-01 ya creó la base Astro y verificó su servidor local; los dos smokes HTTP de esa base están documentados en [la evidencia de C-01](../../openspec/changes/archive/2026-11-19-foundation-setup/verification.md). La evaluación de interacción visual del producto sigue correspondiendo a los changes posteriores.

## Fuentes oficiales

El [README de Microsoft Playwright CLI](https://github.com/microsoft/playwright-cli#configuration-file) documenta el archivo JSON y las opciones de lanzamiento. La [skill oficial](https://github.com/microsoft/playwright-cli/blob/main/skills/playwright-cli/SKILL.md) documenta sesiones, comandos e interacción. La versión instalada se consultó en el [registro oficial npm de `@playwright/cli`](https://registry.npmjs.org/@playwright%2fcli/latest).
