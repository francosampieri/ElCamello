# Herramientas MCP del proyecto

La configuración portable vive en `.codex/config.toml`, dentro de la raíz de este repositorio (`web`). Codex la carga para proyectos confiables. La configuración global y su Context7 existente se conservan. Para el chat abierto desde la carpeta contenedora `ElCamello/`, se agregó con autorización de Franco un archivo local `../.codex/config.toml` que contiene únicamente Stitch; ese archivo está fuera del repositorio.

| Servidor | Uso acordado | Estado |
| --- | --- | --- |
| Astro Docs | Consultas y tareas de Astro | Habilitado; conexión verificada |
| Context7 | Documentación del resto del stack | Heredado de la configuración global existente |
| Chrome DevTools | Inspección, accesibilidad y diagnóstico en navegador | Habilitado; conexión y navegador verificados |
| Stitch | Diseño con el MCP oficial de Google | Habilitado; autenticación, catálogo y consulta de lectura reverificados. Codex hereda la variable y el CLI reconoce una entrada desde ambas raíces, pero las herramientas nativas siguen ausentes del chat tras el reinicio informado por Franco |

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

El endpoint es `https://stitch.googleapis.com/mcp`. La cabecera `X-Goog-Api-Key` se obtiene de la variable de entorno `STITCH_API_KEY`; el archivo TOML contiene únicamente el nombre de la variable. Actualmente `enabled = true` y la clave está guardada como variable de usuario de Windows. No se guarda su valor en el repositorio.

1. Obtener una API key desde la interfaz oficial de Stitch con la cuenta autorizada.
2. En Windows, abrir **Editar las variables de entorno de esta cuenta** y crear la variable de usuario `STITCH_API_KEY` con esa clave. Guardarla localmente; no pegarla en chats, terminales con historial, documentos ni archivos del repositorio.
3. Cerrar y volver a abrir Codex para que herede el nuevo entorno.
4. En otro equipo o si se deshabilitó, comprobar que `.codex/config.toml` tenga `enabled = true` dentro de `[mcp_servers.stitch]`.
5. Recargar Codex y comprobar primero el handshake y listado de herramientas antes de usar operaciones de diseño.

No se crearon proyectos de Stitch, no se enviaron imágenes y no se configuraron OAuth, gcloud, IAM ni proyectos de Google Cloud.

### Verificación autenticada — 19 de noviembre de 2026

Se comprobó el endpoint oficial por HTTPS, leyendo la clave localmente desde la variable de usuario y sin imprimirla ni copiarla a archivos:

- `initialize`: correcto, protocolo MCP `2024-11-05`.
- `tools/list`: correcto, 18 herramientas disponibles.
- `tools/call` con `list_projects`: consulta de solo lectura correcta; contenido e identificadores omitidos de la evidencia.

La petición dentro del sandbox falló con `HttpRequestException`, sin estado HTTP. La misma verificación con ejecución aprobada fuera de ese sandbox pasó. No se modificaron permisos, políticas de red ni configuración global.

En el proceso de Codex de la primera comprobación, `STITCH_API_KEY` todavía no estaba heredada y las herramientas de Stitch no aparecían en el catálogo del chat. Esto distingue una autenticación válida del servicio de su disponibilidad en la sesión.

### Segunda comprobación tras reiniciar — 19 de noviembre de 2026

Después del reinicio, se confirmó la presencia de `STITCH_API_KEY` tanto en el entorno del proceso como en las variables de usuario, sin mostrar su valor. El problema de herencia de la variable está resuelto; no hace falta repetir ese paso.

Las herramientas de Stitch siguen ausentes del catálogo del chat actual. La comparación sanitizada de `codex mcp list --json` mostró:

- Desde `web/`: Astro Docs, Chrome DevTools y Stitch aparecen habilitados, junto a los servidores globales. Stitch figura con estado de autenticación `unknown`; ese listado de configuración no reemplaza la prueba autenticada que ya pasó.
- Desde la carpeta contenedora `ElCamello/`: no aparecen esos tres servidores del proyecto; solo se cargan los globales.

La raíz de trabajo del chat actual continúa siendo `ElCamello/`. Esta diferencia apuntó a la raíz del chat como causa probable de que no cargara `.codex/config.toml` de `web/`; no constituye una confirmación del comportamiento interno de la aplicación. La prueba se realizó antes de agregar la configuración local de la carpeta contenedora descrita a continuación.

### Configuración local para el chat contenedor — 19 de noviembre de 2026

Franco autorizó agregar `ElCamello/.codex/config.toml`, después de comprobar que no existía. El archivo contiene únicamente el servidor Stitch y la referencia a `STITCH_API_KEY`; no contiene la clave. Se conserva intacta la configuración del repositorio `web/.codex/config.toml`.

La validación con `codex mcp list --json`, mostrando solo nombres y habilitación, confirmó:

- Desde `ElCamello/`: los mismos cinco servidores globales que antes y una entrada habilitada de Stitch.
- Desde `web/`: los mismos ocho servidores que antes, con una sola entrada de Stitch; no se observó duplicación del servidor.
- El hash SHA256 de `web/.codex/config.toml` permaneció idéntico antes y después.

No se modificó la configuración global, la confianza del proyecto ni los ajustes de la aplicación. La coexistencia de ambos archivos agrega mantenimiento local: el archivo contenedor no viaja con Git y debe recrearse en otro dispositivo si allí también se abren chats desde `ElCamello/`. Los chats abiertos desde `web/` siguen usando la configuración portable del repositorio.

El listado del CLI valida la configuración, pero no demuestra que el chat haya cargado sus herramientas. No se creó un chat nuevo ni se inició C-01.

### Comprobación posterior al reinicio — 19 de noviembre de 2026

Franco informó un nuevo reinicio y pidió volver a verificar. La clave está presente en el entorno del proceso; el CLI desde `ElCamello/` reconoce exactamente una entrada habilitada de Stitch. Una nueva conexión directa, usando la clave del entorno sin mostrarla, confirmó `initialize` con protocolo `2024-11-05`, `tools/list` con 18 herramientas y una consulta `list_projects` correcta. La ejecución en sandbox volvió a fallar sin estado HTTP; la misma prueba con ejecución aprobada pasó.

Las herramientas de Stitch continúan ausentes del catálogo nativo de este chat. Por tanto, la autenticación y el acceso al servicio funcionan, pero la integración nativa de esta sesión no está disponible; la causa exacta de esta última condición no quedó demostrada. No hay evidencia para prometer que otro reinicio o volver a configurar la clave lo solucione.

Como alternativa, el chat puede realizar llamadas MCP directas mediante un script local que lea `STITCH_API_KEY` del entorno, sin exponerla ni guardarla en el repositorio. La prueba de solo lectura está en `../tmp/verificar-stitch.ps1`, fuera de Git. Esto no registra herramientas nativas ni autoriza crear proyectos, subir archivos u otras operaciones futuras: cada trabajo debe respetar el alcance autorizado y los permisos de ejecución aplicables.

## Carga en Codex y comprobación

El TOML se analizó correctamente y `codex mcp list --json` desde la raíz reconoce los tres servidores del proyecto con los estados indicados, además de los globales existentes. La configuración global mantuvo el mismo hash antes y después de esta preparación. El listado de configuración por sí solo no prueba una conexión: las pruebas de Astro Docs y DevTools indicadas arriba fueron conexiones reales independientes.

Los servidores nuevos no se incorporan retroactivamente a las herramientas de un turno ya iniciado. Reiniciar o recargar Codex y comenzar un nuevo turno para comprobar su disponibilidad. Si Codex solicita confiar en el proyecto, revisarlo desde su interfaz; esta preparación no modificó el nivel de confianza. Evitar compartir la salida JSON completa del listado, porque otros servidores pueden incluir variables privadas.

## Fuentes oficiales

- [MCP en Codex](https://learn.chatgpt.com/docs/extend/mcp?surface=cli) y [referencia de configuración](https://learn.chatgpt.com/docs/config-file/config-reference).
- [Astro: trabajar con herramientas de IA](https://docs.astro.build/en/guides/build-with-ai/).
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp), [configuración de clientes](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/client-configurations.md) y [referencia de herramientas](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/tool-reference.md).
- [Puppeteer: instalador oficial de navegadores](https://pptr.dev/browsers-api).
- [Stitch: configuración de MCP](https://stitch.google.com/docs/mcp/setup/).
