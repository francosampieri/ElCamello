# Instalación local de skills de El Camello

Registro del 18 de noviembre de 2026. Franco aprobó estas cuatro skills para los agentes del proyecto. Se instalaron en `web/.agents/skills/` usando el helper oficial de Codex `install-skill-from-github.py`, con `--dest` explícito y `--ref` fijado a un commit completo. No se instalaron skills en directorios globales.

Las skills aportan instrucciones. Esta instalación no acredita la disponibilidad de la CLI de Playwright, sus navegadores ni ningún servidor MCP. Las skills nuevas estarán disponibles para selección en el próximo turno de Codex; no se afirma que ya estén cargadas en este chat.

## Versiones y procedencia

Los SHA se consultaron en GitHub antes de descargar. Las cuatro instalaciones usaron `--method download` y finalizaron con código 0.

| Skill y carpeta | Origen fijado | Licencia comprobada |
|---|---|---|
| [frontend-design](../../.agents/skills/frontend-design/SKILL.md) | [`e4bb5d960d87126ff3b3a8af1a104b7db67560ba`](https://github.com/anthropics/skills/tree/e4bb5d960d87126ff3b3a8af1a104b7db67560ba/skills/frontend-design) | Apache-2.0; LICENSE.txt original incluida. |
| [web-design-guidelines](../../.agents/skills/web-design-guidelines/SKILL.md) | [`1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62`](https://github.com/vercel-labs/agent-skills/tree/1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62/skills/web-design-guidelines) | No declarada/verificada en el SHA instalado (sin LICENSE/NOTICE ni campo license en package.json). |
| [playwright-cli](../../.agents/skills/playwright-cli/SKILL.md) | [`c872a33cec77fa03c28fa7c6d1ad99d15d04ce42`](https://github.com/microsoft/playwright-cli/tree/c872a33cec77fa03c28fa7c6d1ad99d15d04ce42/skills/playwright-cli) | Apache-2.0; LICENSE raíz original copiada. |
| [animate](../../.agents/skills/animate/SKILL.md) | [`64eb3deb9a5fbfa041faf783e0bc3fd635872e9c`](https://github.com/emilkowalski/skills/tree/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/skills/animate) | MIT, © 2026 Emil Kowalski; LICENSE raíz original copiada. |

La mención previa de MIT para `vercel-labs/agent-skills` se corrigió: en este commit no se encontró una declaración de licencia en el árbol del repositorio ni en su `package.json`. Se registra la ausencia comprobada, sin asignar una licencia ni extraer conclusiones legales adicionales. La skill se usa como herramienta del agente; no forma parte del código del sitio.

## Alcance de instalación

- `frontend-design`: carpeta upstream completa con su licencia; sin modificaciones.
- `web-design-guidelines`: `SKILL.md` upstream completo; sin modificaciones. Durante cada revisión obtiene las guías actuales desde la URL que indica el autor, por lo que esa referencia remota no queda fijada al commit de esta skill.
- `playwright-cli`: `SKILL.md` y las diez referencias de su carpeta upstream, más la licencia raíz original. La CLI ejecutable, los navegadores y la suite Playwright Test se gestionan por separado.
- `animate`: `SKILL.md`, `RECIPES.md`, licencia raíz y referencias de apoyo descritas abajo.

Se conservaron las seis skills OpenSpec preexistentes y se verificaron sin cambios mediante sus huellas SHA-256 previas. Los cuatro destinos se resolvieron dentro de `web/.agents/skills/` y se comprobó que no existían antes de instalar; no se sobrescribieron carpetas. No se instalaron Motion, componentes UI, React, Tailwind, paquetes npm ni otras skills activas. No se modificaron por esta instalación configuraciones MCP, estados del orquestador, AGENTS ni código de la web.

El stack acordado sigue siendo Astro + TypeScript + CSS estándar, con React selectivo. Los ejemplos de bibliotecas en las referencias son material de consulta: no autorizan incorporarlas al proyecto. Las decisiones visuales y de movimiento deben responder al brief de El Camello y a su web de presentación.

## Animate: referencias autocontenidas

La instalación aislada upstream dejaba dos rutas hermanas sin resolver. Se hicieron estos cambios mecánicos:

| Archivo instalado | Cambio |
|---|---|
| `animate/SKILL.md` | `../pick-ui-library/SKILL.md` → `references/pick-ui-library.md`. |
| `animate/RECIPES.md` | `../choreograph/SKILL.md` → `references/choreograph.md`. |
| `animate/references/pick-ui-library.md` | Copia de apoyo del cuerpo de `skills/pick-ui-library/SKILL.md`, sin frontmatter de descubrimiento. |
| `animate/references/choreograph.md` | Copia de apoyo del cuerpo de `skills/choreograph/SKILL.md`, sin frontmatter; dos enlaces y una referencia textual a recetas apuntan a `choreograph-recipes.md`. |
| `animate/references/choreograph-recipes.md` | Copia de `skills/choreograph/RECIPES.md`; su enlace de regreso apunta a `choreograph.md`. |

Las tres referencias incluyen una nota de procedencia, la descripción del empaquetado y la licencia MIT aplicable. No tienen nombre `SKILL.md` ni frontmatter activable; no se instalaron `pick-ui-library` ni `choreograph` como skills adicionales. La licencia MIT original se conserva íntegra en `animate/LICENSE`. No se alteraron los criterios de animación del autor.

| Referencia de origen, mismo commit de Animate | Git blob SHA de origen |
|---|---|
| [`skills/pick-ui-library/SKILL.md`](https://github.com/emilkowalski/skills/blob/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/skills/pick-ui-library/SKILL.md) | `fca76b8792f0b2e72623a25ffb182c2c46d3fbc0` |
| [`skills/choreograph/SKILL.md`](https://github.com/emilkowalski/skills/blob/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/skills/choreograph/SKILL.md) | `965f7b1ee991adbbc301401cf2f6f6890b247572` |
| [`skills/choreograph/RECIPES.md`](https://github.com/emilkowalski/skills/blob/64eb3deb9a5fbfa041faf783e0bc3fd635872e9c/skills/choreograph/RECIPES.md) | `35461d735091b12a97a52e7669df5c425b825e7f` |

Las menciones a otras skills por nombre son contexto editorial del autor; no se activaron ni instalaron. La cadena necesaria de enlaces Markdown y rutas locales de Animate quedó resuelta.

## Validación ejecutada

Se verificaron los 16 archivos de las cuatro carpetas upstream contra sus Git blob SHA del commit fijado; para los dos archivos modificados de Animate se revirtió en memoria únicamente el enlace adaptado antes de comparar. Las licencias raíz copiadas para Animate y Playwright también coincidieron byte a byte con los blobs originales. No se encontraron symlinks.

Se comprobaron los enlaces Markdown y rutas locales a documentación dentro de las cuatro skills. Las rutas `specs/<feature>.plan.md` y `specs/basic-operations.plan.md` en la guía de generación de tests de Playwright son ejemplos de artefactos a producir, no referencias del paquete faltantes.

No se escribió código de producción ni se ejecutó una suite de la web para instalar instrucciones. Esto no acredita comportamiento de una web todavía no implementada. La disponibilidad ejecutable de Playwright y MCP debe verificarse en su propio registro.

## Huellas SHA-256 de los archivos instalados

Rutas relativas a `.agents/skills/`. Estas huellas reflejan el contenido local final, incluidas las referencias adaptadas.

| Archivo | SHA-256 |
|---|---|
| `animate/LICENSE` | `4ff5bdb7887ec1435c9cab0e8d1a7caee704d894d65c2a008ccc68b1cc2f260b` |
| `animate/RECIPES.md` | `e7cfb72d05ebb2e2172746d95b4574367a475aec99de09e6a1faa2bfdf32643d` |
| `animate/references/choreograph-recipes.md` | `39baff52201c8f0596af11c471450137b847c84fc4f561140e15618067e0cef0` |
| `animate/references/choreograph.md` | `8f95c7ddd5c2111f2dd5df174e1dc4b8e65ae03864fc6593f3c2d35f00253974` |
| `animate/references/pick-ui-library.md` | `f9e1db75956bb5176297d2d2e2c8bde5f0de43352f2f00ae94b17c2e8f70b5d0` |
| `animate/SKILL.md` | `fda5f14cb1fc94d9b69a51d8945fa8ae4a8d7448ceaadcb1f1e73beed40ac276` |
| `frontend-design/LICENSE.txt` | `0d542e0c8804e39aa7f37eb00da5a762149dc682d7829451287e11b938e94594` |
| `frontend-design/SKILL.md` | `d91970639e9f5c37682ac7ab60094d35f1c7c1f38d731bd56396563aee10c1d3` |
| `playwright-cli/LICENSE` | `9a7110fc2d2f964038e5dc49128f908f29f47a574c961cba16085914e879cbda` |
| `playwright-cli/references/element-attributes.md` | `bf19aa4671e0a50a0fefa9c790f39124e803060eefe395042b723c29fcb7faa2` |
| `playwright-cli/references/playwright-tests.md` | `c5b0719fef2cfdff50bd744051b2f9afc119775db4b48e9b2882c1cf3886797c` |
| `playwright-cli/references/pr-attachments.md` | `24b118e74598be72e73e24fe223d295b9099c85b1860a7c8f6e5690c9038fa2a` |
| `playwright-cli/references/request-mocking.md` | `54e801c9663fc2b6d68ceb058cb1c360724c2499f42acc7852a68e83e5b5f37c` |
| `playwright-cli/references/running-code.md` | `eac97e0b77e723f8b1d7b64f276f92efa72f74453f45a805352d27ea1853a495` |
| `playwright-cli/references/session-management.md` | `2f4d953136cbfb998136095c064c38f4223ea049d6e13610e17db078dde8971c` |
| `playwright-cli/references/storage-state.md` | `71e90f774b5a7d61367f2336940f30be7c5693d43197b63d1154634b99ae5045` |
| `playwright-cli/references/test-generation.md` | `b9c5dda349a469b9abf9f10f3787135e6521f433f5743de399a164e14e76f7ce` |
| `playwright-cli/references/tracing.md` | `4e397e16e6bd92d8696cb815c4ee6dc4ce0be1da9e760e261a9c30b44c7857c7` |
| `playwright-cli/references/video-recording.md` | `1c800b897824cb54394c34265d8ebffdbb530adfc8d612c5d798b667a1799f48` |
| `playwright-cli/SKILL.md` | `1c4c34000f6102ee71fe91bf25351a221f7da37f48f2d556e1756f66e17d356f` |
| `web-design-guidelines/SKILL.md` | `f4647ca866a3accf763777f83e7682954f0187cd6bea7eea0399796652414e8f` |

