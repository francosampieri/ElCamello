# Herramientas MCP del proyecto

La configuración vive en `.codex/config.toml`, dentro de la raíz de este repositorio (`web`). Codex la carga para proyectos confiables. Abrir Codex desde esta raíz; la configuración global y su Context7 existente se conservan.

| Servidor | Uso acordado | Estado |
| --- | --- | --- |
| Astro Docs | Consultas y tareas de Astro | Habilitado; conexión verificada |
| Context7 | Documentación del resto del stack | Heredado de la configuración global existente |
| Chrome DevTools | Inspección, accesibilidad y diagnóstico en navegador | Habilitado; conexión y navegador verificados |
| Stitch | Diseño con el MCP oficial de Google | Preparado y deshabilitado; autenticación aplazada por el usuario |

## Astro Docs

Se conecta directamente por HTTP a `https://mcp.docs.astro.build/mcp`. Es remoto y gratuito; no requiere paquete local ni clave. La verificación confirmó `initialize` y `tools/list`, con la herramienta `search_astro_docs`.

## Chrome DevTools

Se usa `chrome-devtools-mcp@1.13.0`, Node.js LTS y Chrome for Testing `158.0.8127.36` para Windows x64. El lanzador `.codex/chrome-devtools.mjs` resuelve las rutas relativas a este repositorio y lee la entrada oficial del paquete instalado. No contiene rutas de usuario absolutas ni descarga paquetes durante el arranque.

Las dependencias y el navegador portátil están fuera del repositorio, en `../tmp/herramientas-MCP/`. El lanzador requiere conservar esta disposición: carpeta padre con `web/` y `tmp/herramientas-MCP/`. Se ejecuta con `--headless`, `--isolated`, `--no-usage-statistics` y `--no-performance-crux`. También se desactivan las comprobaciones periódicas de actualizaciones del MCP. El perfil es temporal y separado de los perfiles personales. No se conecta a sesiones de Chrome existentes.

### Preparar otro equipo Windows

Instalar Node.js LTS y npm si faltan. Desde PowerShell, situado en la raíz `web`:

```powershell
$mcpRuntime = Join-Path (Split-Path -Path (Get-Location).Path -Parent) 'tmp\herramientas-MCP'
New-Item -ItemType Directory -Path $mcpRuntime -Force | Out-Null
$mcpCache = Join-Path $mcpRuntime 'npm-cache'
npm install --prefix $mcpRuntime --cache $mcpCache --no-fund --no-audit --ignore-scripts --save-exact chrome-devtools-mcp@1.13.0 @puppeteer/browsers@3.2.7
if ($LASTEXITCODE -ne 0) { throw 'No se pudieron instalar las herramientas MCP.' }
$browserInstaller = Join-Path $mcpRuntime 'node_modules\@puppeteer\browsers\lib\main-cli.js'
$browserCache = Join-Path $mcpRuntime 'browsers'
node $browserInstaller install chrome@158.0.8127.36 --path $browserCache
if ($LASTEXITCODE -ne 0) { throw 'No se pudo descargar Chrome for Testing.' }
```

No requiere instalar Chrome en el sistema. Esta preparación cubre Windows x64; otro sistema operativo requiere adaptar el lanzador y la plataforma del navegador. Para actualizar versiones, revisar las opciones oficiales, actualizar conjuntamente el pin del paquete/navegador y volver a verificar la conexión.

### Verificación realizada

Se confirmó la versión del paquete, el soporte de los cuatro argumentos anteriores, el handshake MCP, el catálogo de 33 herramientas y una llamada real a `list_pages` que devolvió `about:blank`. Node.js usado: `24.19.0`.

La prueba de navegador dentro del sandbox de ejecución terminó con `Target closed`; la misma prueba con ejecución aprobada fuera de ese sandbox pasó. No se cambiaron los permisos por defecto, la configuración del sandbox ni el aislamiento de Chrome. La disponibilidad posterior del MCP también depende de las políticas de la sesión de Codex.

## Activar Stitch cuando corresponda

El endpoint es `https://stitch.googleapis.com/mcp`. La cabecera `X-Goog-Api-Key` se obtiene de la variable de entorno `STITCH_API_KEY`; el archivo TOML contiene únicamente el nombre de la variable. Actualmente `enabled = false` y no se probó una conexión autenticada.

1. Obtener una API key desde la interfaz oficial de Stitch con la cuenta autorizada.
2. En Windows, abrir **Editar las variables de entorno de esta cuenta** y crear la variable de usuario `STITCH_API_KEY` con esa clave. Guardarla localmente; no pegarla en chats, terminales con historial, documentos ni archivos del repositorio.
3. Cerrar y volver a abrir Codex para que herede el nuevo entorno.
4. En `.codex/config.toml`, cambiar únicamente `enabled = false` por `enabled = true` dentro de `[mcp_servers.stitch]`.
5. Recargar Codex y comprobar primero el handshake y listado de herramientas antes de usar operaciones de diseño.

No se crearon proyectos de Stitch, no se enviaron imágenes y no se configuraron OAuth, gcloud, IAM ni proyectos de Google Cloud.

## Carga en Codex y comprobación

El TOML se analizó correctamente y `codex mcp list --json` desde la raíz reconoce los tres servidores del proyecto con los estados indicados, además de los globales existentes. La configuración global mantuvo el mismo hash antes y después de esta preparación. El listado de configuración por sí solo no prueba una conexión: las pruebas de Astro Docs y DevTools indicadas arriba fueron conexiones reales independientes.

Los servidores nuevos no se incorporan retroactivamente a las herramientas de un turno ya iniciado. Reiniciar o recargar Codex y comenzar un nuevo turno para comprobar su disponibilidad. Si Codex solicita confiar en el proyecto, revisarlo desde su interfaz; esta preparación no modificó el nivel de confianza. Evitar compartir la salida JSON completa del listado, porque otros servidores pueden incluir variables privadas.

## Fuentes oficiales

- [MCP en Codex](https://learn.chatgpt.com/docs/extend/mcp?surface=cli) y [referencia de configuración](https://learn.chatgpt.com/docs/config-file/config-reference).
- [Astro: trabajar con herramientas de IA](https://docs.astro.build/en/guides/build-with-ai/).
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp), [configuración de clientes](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/client-configurations.md) y [referencia de herramientas](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/tool-reference.md).
- [Puppeteer: instalador oficial de navegadores](https://pptr.dev/browsers-api).
- [Stitch: configuración de MCP](https://stitch.google.com/docs/mcp/setup/).
