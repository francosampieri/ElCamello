# Skills y herramientas para El Camello

**Selección aprobada el 18 de noviembre de 2026:** `frontend-design`, `web-design-guidelines`, `playwright-cli` y `animate`; Stitch, Chrome DevTools y Astro Docs para tareas Astro, con Context7 para el resto de la documentación. El [registro de instalación de skills](instalacion-skills.md) documenta lo instalado realmente, sus versiones, licencias y referencias. La operatividad de MCP se verifica por separado.

El resto de este documento conserva la investigación previa a esa selección; sus recomendaciones y estados de disponibilidad describen ese momento, no el inventario actual.

Investigación del 18 de noviembre de 2026.
Se consultaron el leaderboard de [skills.sh](https://skills.sh/), los archivos reales de las skills y fuentes primarias de las herramientas.
La investigación inicial documentó opciones: no instaló paquetes, navegadores, skills ni servidores; no abrió cuentas, generó diseños ni envió fotografías.

## Alcance y criterio

El sitio usará Astro + TypeScript + CSS estándar, con React cuando una necesidad concreta lo justifique.
Se priorizan identidad visual, celular, desktop profesional, fotografías propias, portada audiovisual, animaciones y contacto por WhatsApp.
El roadmap completo está en [CHANGES.md](../../CHANGES.md); la arquitectura acordada está en [la KB](../../knowledge-base/08_arquitectura_propuesta.md).
Solo se consideran recursos gratuitos. Agenda, analítica, CMS, base de datos, cuentas, pagos y reservas automáticas quedan fuera de esta versión.

La selección compara cinco skills y cinco familias de herramientas; no propone instalar todo.
Una skill aporta instrucciones. Un MCP o una CLI proporciona capacidades ejecutables. Una suite de tests conserva assertions reproducibles en el repositorio.
Instalar instrucciones no habilita automáticamente herramientas ni demuestra que el sitio funcione.
Las cantidades siguientes son aproximaciones observadas hoy; las estrellas pertenecen al repositorio completo y no certifican calidad.

## Skills principales propuestas

| Skill e ID exacto | Aporte y fase | Compatibilidad y límite | Costo/licencia | Instalaciones / estrellas aproximadas | Estado |
|---|---|---|---|---|---|
| [frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md), `anthropics/skills@frontend-design` | Dirección visual, tipografía, composición y crítica del diseño. C-03; C-05 a C-10. | Aplicable a Astro/CSS; no exige React, Next ni Tailwind. No sustituye aprobación visual. | Gratis; [Apache-2.0](https://github.com/anthropics/skills/blob/main/skills/frontend-design/LICENSE.txt). | [1,1 M instalaciones](https://skills.sh/anthropics/skills/frontend-design) / [197,1 k estrellas](https://github.com/anthropics/skills). | Recomendada; selección e instalación pendientes. |
| [web-design-guidelines](https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md), `vercel-labs/agent-skills@web-design-guidelines` | Revisión breve de interfaz, foco, teclado, imágenes, touch y movimiento. C-03, C-05, C-09 y C-12. | Revisa código; ejemplos React/Tailwind se traducen a HTML/CSS equivalente. Descarga las guías actuales al revisar. | Sin compra prevista; licencia no declarada/verificada en el SHA instalado `1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62` (sin LICENSE/NOTICE ni campo license en package.json). [Evidencia de instalación](instalacion-skills.md). | [878,1 k instalaciones](https://skills.sh/vercel-labs/agent-skills/web-design-guidelines) / [34,5 k estrellas](https://github.com/vercel-labs/agent-skills). | Recomendada; selección e instalación pendientes en la investigación inicial. |
| [playwright-cli](https://github.com/microsoft/playwright-cli/blob/main/skills/playwright-cli/SKILL.md), `microsoft/playwright-cli@playwright-cli` | Navegación, interacciones, consola y capturas en navegador. C-03, C-09 y C-12. | Independiente de Astro/CSS. Requiere CLI y navegadores; no instala una suite de regresión por sí sola. | Gratis; Apache-2.0 en el [repositorio](https://github.com/microsoft/playwright-cli). | [220,6 k instalaciones](https://skills.sh/microsoft/playwright-cli/playwright-cli) / [15,3 k estrellas](https://github.com/microsoft/playwright-cli). | Recomendada si se elige CLI para el navegador del agente. |

`frontend-design` ayuda a elaborar propuestas propias desde el contenido de El Camello y revisar el resultado contra el brief.
`web-design-guidelines` aporta una revisión pequeña durante la implementación; sus [guías reales](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md) incluyen controles para video decorativo y movimiento reducido.
La tercera skill se selecciona junto con la capacidad real de navegador, evitando duplicar CLI y MCP sin un caso concreto.

## Skills opcionales

| Skill e ID exacto | Aporte y fase | Dependencias y límite | Costo/licencia | Instalaciones / estrellas aproximadas | Estado |
|---|---|---|---|---|---|
| [animate](https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md), `emilkowalski/skills@animate` | Elegir propósito, propiedades, easing, duración e interrupción de animaciones. C-03 y C-09. | Prefiere CSS/WAAPI; contempla Motion cuando corresponde e invoca `../pick-ui-library`. Revisar referencias antes de instalación selectiva. | Gratis; [MIT](https://github.com/emilkowalski/skills/blob/main/LICENSE). | [234,7 k instalaciones](https://skills.sh/emilkowalski/skills/animate) / [58 k estrellas](https://github.com/emilkowalski/skills). | Opcional para trabajo de movimiento específico. |
| [web-quality-audit](https://github.com/addyosmani/web-quality-skills/blob/main/skills/web-quality-audit/SKILL.md), `addyosmani/web-quality-skills@web-quality-audit` | Auditoría medida de performance, accesibilidad y SEO. C-09, C-11 y C-12. | Carga referencias hermanas de performance y enlaza otras skills. El paquete completo contiene seis skills; no asumir que una carpeta aislada alcanza. | Gratis; MIT. Colección [no oficial de Google](https://github.com/addyosmani/web-quality-skills). | [38,1 k instalaciones / 3,1 k estrellas](https://skills.sh/addyosmani/web-quality-skills/web-quality-audit). | Opcional si hace falta una auditoría más amplia. |

`animate` incluye movimiento reducido y evita bibliotecas innecesarias. No se instalarán Motion, React o Tailwind automáticamente.
Sus reglas de frecuencia necesitan aplicarse al contexto de una web de presentación; el brief y la revisión visual siguen siendo relevantes.
`web-quality-audit` separa mediciones de hipótesis del código, pide repetir controles y admite fallbacks cuando falta Chrome DevTools MCP.
No exige incorporar analítica al sitio. Datos de campo o ranking no pueden darse por comprobados a partir de pruebas locales.
La [guía de Codex](https://github.com/addyosmani/web-quality-skills/blob/main/docs/codex-setup.md) advierte sobre symlinks en Windows; revisar el paquete concreto antes de elegir instalación por plugin.

## Cinco familias de herramientas

| Familia | Uso principal y fase | Requisitos | Costo / estado |
|---|---|---|---|
| [Playwright Test](https://playwright.dev/docs/intro), [CLI + skill](https://github.com/microsoft/playwright-cli) o [MCP](https://github.com/microsoft/playwright-mcp) | Tests del proyecto y navegador del agente son capas distintas. Estrategia C-01, smoke C-03, flujos y regresión C-12. | Node compatible, descarga de navegadores y proyecto ejecutable. Elegir CLI o MCP según el flujo. | Software local gratuito, Apache-2.0; no configurado en esta etapa. |
| [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) | Diagnóstico de carga, video, scroll, CSS, consola y red. C-03, C-09 y C-12. | Node LTS admitido, npm y Chrome compatible. | Gratuito local, Apache-2.0; opcional, no configurado. |
| [Stitch MCP](https://docs.cloud.google.com/mcp/supported-products) | Explorar composiciones móvil/desktop y variantes en C-03. | Servicio remoto de Google; autenticación y selección previa del material a enviar. | [MCP sin cargo según su README](https://github.com/gemini-cli-extensions/stitch/blob/main/README.md); límites por comprobar en la cuenta; opcional. |
| [Astro Docs MCP](https://docs.astro.build/en/guides/build-with-ai/) | Consultar APIs y patrones oficiales actuales de Astro. C-01 a C-13. | Cliente MCP con conexión HTTP; no requiere instalar servidor local. | Documentación pública sin compra prevista; no configurado. |
| [Context7](https://github.com/upstash/context7) | Consultar documentación actual de bibliotecas; posible alternativa para consultas de Astro. | Conexión funcional y límites del servicio según la cuenta. | Ya figura configurado; herramientas no expuestas en este chat, funcionamiento no verificado. No proponer otra instalación. |

### Playwright: pruebas persistentes y exploración

Playwright Test guarda tests TypeScript, assertions y reportes en el repositorio y permite proyectos Chromium, Firefox y WebKit.
La [guía de Astro](https://docs.astro.build/en/guides/testing/) muestra pruebas sobre build + preview para comprobar la salida construida.
Eso ayuda a detectar problemas que no aparecen en el servidor de desarrollo.
Se propone definir la estrategia en C-01 y añadir un smoke significativo del prototipo en C-03; ampliar en C-12 según comportamiento real.

La CLI con skill y el MCP permiten explorar páginas y reunir evidencia durante el trabajo del agente.
Los README de Microsoft favorecen CLI + skills para coding agents por uso de contexto; MCP resulta útil para determinadas exploraciones persistentes.
Elegir uno primero. Ninguno reemplaza assertions versionadas o revisión humana del diseño.

Antes de instalar, comprobar [requisitos actuales de Playwright Test](https://playwright.dev/docs/intro): la documentación consultada admite Node 22, 24 o 26 y Windows 11 o posterior.
Los README de [CLI](https://github.com/microsoft/playwright-cli) y [MCP](https://github.com/microsoft/playwright-mcp) indican Node 20 o posterior; comprobar también compatibilidad del sistema y navegador elegidos.
No se debe reutilizar una instrucción antigua que presuponga Node 18.
Descargar navegadores y agregar dependencias pertenece a implementación, no a esta investigación.

### Chrome DevTools: diagnóstico complementario

El [servidor oficial](https://github.com/ChromeDevTools/chrome-devtools-mcp) permite investigar consola, red, estilos y rendimiento de Chrome.
Sus [herramientas](https://github.com/ChromeDevTools/chrome-devtools-mcp/blob/main/docs/tool-reference.md) incluyen trazas, throttling y capturas; tienen especial valor para la portada y el scroll.
El Lighthouse integrado actual excluye la categoría Performance: para ese diagnóstico se usan trazas e Insights.

Es opcional: agregarlo cuando una medición o problema concreto lo justifique.
Su telemetría está activada por defecto. Antes de configurarlo, revisar las opciones documentadas `--no-usage-statistics` y `--no-performance-crux`.
No se modificaron ajustes de privacidad ni se arrancó el servidor.

### Stitch: experimento de diseño acotado

Google [lista Stitch como servidor MCP remoto](https://docs.cloud.google.com/mcp/supported-products) con endpoint `https://stitch.googleapis.com/mcp`.
El [README de la extensión](https://github.com/gemini-cli-extensions/stitch/blob/main/README.md) describe generación, listado y recuperación de pantallas, HTML e imágenes; autenticación con API key de Stitch o ADC para proyecto propio.
Esa extensión es un cliente de Gemini CLI: no obliga instalar Gemini CLI para usar el servidor desde Codex.
La documentación web de setup redirigió sin texto legible; no se verificó aquí un procedimiento completo dentro de la cuenta.

Uso propuesto: comparar composiciones de portada y bloques en móvil/desktop antes de implementar C-03.
El resultado debe adaptarse a Astro, al CSS del proyecto y al contenido real; no verifica animaciones ni video funcionando en el sitio.
No se garantizan cuotas numéricas ni uso ilimitado. No se creó proyecto cloud, obtuvo credenciales ni envió material a Google.

El repositorio [stitch-skills](https://github.com/google-labs-code/stitch-skills) declara compatibilidad con Codex y licencia Apache-2.0, pero advierte que no es un producto Google oficialmente soportado.
Si se elige Stitch, revisar después `generate-design` y `manage-design-system`; la primera depende de instrucciones y referencias de la segunda.
Son complementos condicionados a esa elección, fuera de las cinco candidatas prioritarias.
No se propone instalar todo el paquete ni adoptar sus flujos React, shadcn o Tailwind.

### Documentación: Astro Docs o Context7

Astro publica su [integración para agentes](https://docs.astro.build/en/guides/build-with-ai/) mediante `https://mcp.docs.astro.build/mcp`.
Sería una conexión enfocada en documentación oficial; no agrega código al sitio.
Context7 ya aparece configurado, pero esta conversación no expone sus herramientas y no se comprobó una consulta real.
Primero verificar esa conexión; elegir Astro Docs si aporta mejor acceso a la fuente oficial o evita ambigüedades de versión.
No duplicar conexiones de documentación sin un propósito claro.

## Disponibilidad observada

El inventario local de skills incluye las de foundation y OPSX; no contiene las cinco candidatas comparadas arriba.
En la configuración inspeccionada por el coordinador figuran Context7 y CUA habilitados; en este chat CUA sí está expuesto como herramienta.
Engram y Node REPL también están habilitados. Una entrada configurada no demuestra que un servidor remoto esté conectado y funcionando.
No se observaron Stitch, Playwright, Chrome DevTools ni Astro Docs configurados en ese inventario.

La búsqueda en el catálogo de plugins encontró Context7, sin instalar como plugin.
No encontró entradas para Stitch, Playwright o DevTools; eso no significa que sus servidores MCP externos no existan.
No hace falta instalar otro Context7 para concluir esta etapa.

## Opciones descartadas o diferidas

| Opción revisada | Motivo | Costo / decisión propuesta |
|---|---|---|
| [withastro/skills](https://github.com/withastro/skills) | Repositorio vacío al consultar. | No hay skill instalable verificada para este sitio. |
| [astro-developer oficial](https://github.com/withastro/astro/blob/main/.agents/skills/astro-developer/SKILL.md) | Sirve para contribuir al monorepo de Astro, no para construir un sitio con Astro. | No incorporarla al proyecto. |
| [astro-framework de delineas](https://github.com/delineas/astro-framework-agents/blob/main/skills/astro-framework/SKILL.md) | Incluye instrucciones sobre `hybrid`, sesiones, adapters y colecciones que requieren filtrar según versión/alcance. [2,2 k instalaciones y 48 estrellas](https://skills.sh/delineas/astro-framework-agents/astro-framework). | MIT/gratis; preferir documentación oficial actual antes que asumir su contenido completo. |
| Varias skills React/Next/Tailwind y paquetes completos de diseño | No responden al stack elegido; sumar opciones solapadas no mejora por sí mismo el resultado. | Diferir; ninguna compra o instalación propuesta. |
| MCP de GitHub, base de datos, pagos, CMS o Cloudinary como requisito | No resuelven una necesidad nueva del alcance actual. El alojamiento del video sigue pendiente. | No incorporarlos por esta investigación; ningún servicio comprado. |

No se recomienda una supuesta skill oficial de Astro para sitios: no se verificó una adecuada.
No se fija librería de animación ni alojamiento multimedia mediante esta selección.

## Aplicación al roadmap

| Change | Capacidad mínima propuesta | Opcional cuando aporte valor | Evidencia esperada |
|---|---|---|---|
| C-01: setup | Estrategia Playwright Test y acceso a documentación. | Astro Docs si Context7 no alcanza. | Compatibilidad real de entorno y comandos definidos; sin tests vacíos. |
| C-03: dirección visual y prototipo | `frontend-design`, revisión `web-design-guidelines`, smoke del proyecto y navegador disponible. | Stitch para variantes; `animate`; DevTools para medir. | Prototipo móvil/desktop, interacción comprobada y decisión visual revisable. |
| C-05 a C-08: navegación y contenido | Las dos skills de diseño/calidad según la tarea; pruebas de comportamiento cuando correspondan. | CLI del agente para exploración repetida. | Navegación, teclado, touch y enlaces contextualizados comprobados. |
| C-09: portada audiovisual | Navegador y pruebas de pausa/fallback, movimiento reducido y medios adaptativos. | DevTools para carga/scroll; `animate`; auditoría amplia. | Capturas y mediciones comparables; comprobación en celular real. |
| C-11: integración y SEO | Revisión de metadatos, enlaces, salida construida e indexación prevista. | `web-quality-audit` con sus referencias resueltas. | Señales técnicas verificadas, sin prometer posiciones de búsqueda. |
| C-12: verificación | Suite persistente, revisión manual móvil/desktop y evidencia de correcciones. | DevTools y auditoría amplia ante problemas concretos. | Assertions, reportes y limitaciones documentadas. |
| C-13: publicación | Repetir checks relevantes contra entorno publicado. | Herramientas ya elegidas, sin ampliar por rutina. | Resultado publicado comprobado y pendientes explícitos. |

Emular un teléfono no reproduce un iPhone/Safari real. WebKit de Playwright está adaptado para pruebas y no es Safari comercial.
La disponibilidad de codecs y reproducción de video puede diferir en Windows; probar el hero en un celular real sigue siendo relevante.
Comparar capturas detecta cambios visuales, pero no decide calidad estética ni demuestra fluidez de animaciones.
Software gratuito no incluye consumo del modelo, cuotas de servicios externos o ejecución de CI; no se autorizaron gastos.

### Pruebas que aportan valor al alcance

La selección de herramientas se justifica por comportamientos observables, definidos al proponer cada change.
Ejemplos a convertir en criterios concretos cuando exista implementación:

- Abrir y cerrar la navegación móvil, conservar foco útil y llegar a una página de propuesta.
- Verificar el destino y mensaje contextual del enlace WhatsApp sin enviar mensajes ni afirmar una reserva.
- Mostrar contenido y contacto utilizables con movimiento reducido.
- Comprobar pausa del hero fuera de vista y respaldo visible cuando el video no se reproduce.
- Contrastar viewport móvil y desktop, sin desbordamiento que impida leer o contactar.
- Comprobar títulos, enlaces y recursos de la salida construida sobre las cinco páginas previstas.

Las assertions deben comprobar comportamiento y contenido relevante; una captura o una tautología no sustituye ese contrato.
La revisión estética y la sensación de fluidez se documentan como revisión visual, con sus condiciones y límites.

## Comandos de referencia: no ejecutados

Si Franco selecciona estas opciones, preferir instalación de proyecto para Codex; no usar `-g` automáticamente.
Revisar contenido y resolver referencias de cada paquete antes de ejecutarlas.

```text
npx skills add https://github.com/anthropics/skills --skill frontend-design -a codex
npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines -a codex
npx skills add https://github.com/microsoft/playwright-cli --skill playwright-cli -a codex
```

Estos comandos siguen el formato publicado por [skills.sh](https://skills.sh/docs); no fueron ensayados ni instalan automáticamente los navegadores necesarios.
Para `animate` y `web-quality-audit`, revisar primero el paquete y sus referencias; no se presenta una copia aislada como suficiente.
La configuración de MCP queda como plan de capacidades; no se escribieron dotfiles, claves ni configuraciones globales.

## Recomendación mínima sujeta a selección

1. Elegir `frontend-design` y `web-design-guidelines` para diseño e inspección habitual.
2. Definir Playwright Test como suite del proyecto y elegir la capacidad de navegador del agente cuando se necesite; si es CLI, acompañarla con `playwright-cli`.
3. Verificar Context7; recurrir a Astro Docs si aporta acceso más directo a documentación oficial.
4. Reservar DevTools para diagnóstico de rendimiento y Stitch para un experimento de composiciones en C-03.
5. Considerar `animate` o la auditoría amplia solo ante tareas que justifiquen sus instrucciones y dependencias.

La siguiente acción es seleccionar con Franco qué incorporar y luego preparar la instalación concreta dentro del proyecto.
El registro de skills y las instrucciones del agente deberán distinguir recomendadas de instaladas y registrar dependencias efectivamente disponibles.
El estado del orquestador conserva únicamente las tres candidatas principales como `recommended` y `installed: []`; los MCP no se mezclan con skills.
