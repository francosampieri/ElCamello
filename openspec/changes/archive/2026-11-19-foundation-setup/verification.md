# Verificación de C-01

Fecha de verificación: 19/11/2026. Rama: `feature/change_1`. Franco aprobó D-01 a D-04 y autorizó la implementación. Al completar apply todavía no se había realizado commit, push, merge ni archivo de este change.

## Base implementada

El cierre posterior fue autorizado por Franco: C-01 se archivó el 19/11/2026 con sus ocho tareas completas y la especificación `sitio-estatico-base` sincronizada en `openspec/specs/`.

- Astro `7.4.13`, TypeScript `6.0.3` y `@astrojs/check` `0.9.12`, instalados y resueltos con npm `11.17.0` sobre Node `24.19.0`.
- Salida estática y configuración `astro/tsconfigs/strict`.
- Página mínima en español, layout compartido y CSS estándar. No representa el diseño visual definitivo.
- Lockfile y comandos `dev`, `check`, `build`, `preview`, `test` y `verify` en `package.json`.
- Dos smokes HTTP en `tests/smoke.test.mjs`; inician una vista previa propia en un puerto asignado por el sistema y la cierran al terminar. No requieren credenciales de aplicación.

## Resultados reales

| Comprobación | Resultado |
|---|---|
| `npm install` inicial | Correcto; 271 paquetes y versiones directas aprobadas. |
| `npm ls --depth=0` | Astro, TypeScript y check coinciden con las versiones fijadas. |
| `npm run check` | 0 errores, 0 advertencias y 0 hints. |
| `npm run build` | Una página estática generada en `dist/`. |
| `node --test tests/smoke.test.mjs` inicial corregido | 1/1 caso HTTP aprobado. |
| Adición del caso de ruta desconocida | 2/2 casos aprobados: `/` con HTTP 200 e identidad semántica en español; ruta inexistente con HTTP 404. |
| `npm ci` desde el lockfile | Correcto; 271 paquetes, 38 segundos. SHA256 del lockfile idéntico antes y después. |
| `npm run verify` después de reinstalar | Tipos, build y 2/2 smokes correctos. |
| `npm run dev -- --host 127.0.0.1 --port 0` | Petición real HTTP 200 con identidad; sesión propia cerrada y puerto sin listener posterior. |
| Restauración tras controles negativos | `npm run verify` correcto: tipos sin errores, una página y 2/2 smokes. |
| Conservación de staging previo | Las cinco entradas que ya estaban staged permanecen idénticas en el índice; `tasks.md` tiene modificaciones nuevas sin stage. |

El intento de instalación dentro del sandbox no devolvió un resultado y se canceló su sesión propia; la descarga con ejecución aprobada fuera de ese sandbox funcionó. La petición HTTP local dentro del sandbox falló con `EACCES`; la misma prueba con ejecución aprobada pasó. No se cambiaron políticas, aislamiento ni configuración global.

## Controles negativos y propagación de errores

Se alteraron únicamente archivos propios de C-01 de forma temporal y se restauraron en `finally`:

| Control | Comando individual | Flujo conjunto |
|---|---|---|
| Asignar un número a un `string` en un archivo temporal de `src/` | `npm run check`: salida 1 con TS2322. | `npm run verify`: salida 1; no ejecuta build ni tests. |
| Hook temporal que lanza un error al iniciar el build | `npm run build`: salida 1 con el error controlado. | `npm run verify`: check correcto, build con salida 1; no ejecuta tests. |
| Generar HTML sin el `h1` requerido | `npm test`: salida 1 con `AssertionError`; el caso 404 sigue pasando. | `npm run verify`: tipos y build correctos, smoke HTTP con salida 1. |

Los archivos de control fueron retirados, los originales propios restaurados y la verificación sana completa pasó después. No se dejaron servidores de prueba activos ni se tocaron procesos ajenos. Estos controles demuestran detección de fallos; no sustituyen un ciclo TDD previo a la implementación.

## TDD: desviación aceptada exclusivamente para C-01

Se escribió el test antes de los archivos de producción, pero el primer fallo **no es un RED contractual válido**: el harness suponía el bin antiguo `astro/astro.js`. Astro 7 publica `./bin/astro.mjs`. El fallo persistió después de instalar y se detectó la suposición equivocada; el test ahora resuelve el bin desde los metadatos del paquete.

Por tanto, parte de la base de producción fue escrita antes de obtener un RED válido. No se declara cumplimiento del orden TDD estricto ni se presenta el control negativo posterior como si hubiese ocurrido antes. Franco aceptó explícitamente el 19/11/2026 esta excepción documentada solo para C-01, después de revisar la desviación y los resultados reales. La tarea 1.2 se resuelve por esa aceptación; el modo TDD estricto sigue vigente para el trabajo posterior.

### TDD Cycle Evidence

| Task | Test File | Layer | Safety Net | RED | GREEN | TRIANGULATE | REFACTOR |
|---|---|---|---|---|---|---|---|
| 1.1 | — | Revisión | Sin suite previa | N/A | Inventario y aprobación comprobados | N/A | N/A |
| 1.2 | `tests/smoke.test.mjs` | Integración HTTP | Sin aplicación ni suite previas | Inválido: ruta de bin supuesta; excepción C-01 aceptada | 1/1 tras corregir harness | 2/2 con ruta 404 | Bin leído desde metadatos; cierre acotado del servidor |
| 2.1 | `tests/smoke.test.mjs` | Configuración e integración | Sin configuración previa | Desviación de 1.2 aplicable | Instalación, tipos y build correctos | Página válida y ruta desconocida | Sin refactor adicional |
| 2.2 | `tests/smoke.test.mjs` | Integración HTTP | Base nueva | Control negativo posterior válido; no previo | 2/2 | 200/identidad y 404 | Resultado sano confirmado |
| 2.3 | `tests/smoke.test.mjs` | Flujo operativo | Verificación inicial correcta | Tres controles negativos posteriores | Flujo sano correcto | Fallos de tipos, build y HTML | README actualizado con autorización |
| 3.1 | `tests/smoke.test.mjs` | Reproducibilidad | 2/2 antes de reinstalar | N/A: sin cambio de comportamiento | Lockfile conservado y verify correcto | Instalación inicial y reinstalación | N/A |
| 3.2 | `tests/smoke.test.mjs` | Controles operativos | Verify correcto antes de mutar | Tres fallos detectados | Verify correcto tras restaurar | Tipos, build y HTTP | Alteraciones propias retiradas |
| 3.3 | — | Documentación y revisión | Staging previo conservado | N/A | Evidencias y revisión completas | N/A | Actualización documental autorizada y verificada |

## Aprobaciones y actualización documental

Franco confirmó el 19/11/2026 las tres consultas: actualizar versiones y PA-11 en KB/AGENTS, sustituir estados vencidos de README/roadmap/registro por el estado comprobado y aceptar la excepción TDD documentada de C-01. La autorización documental permite retirar esos pendientes resueltos; no elimina preguntas de negocio, decisiones visuales ni hitos futuros.

El README incorpora los comandos, el entorno y los límites de las pruebas. El coordinador confirmó la actualización y revisión conjunta de KB, AGENTS/CLAUDE, documentación de Playwright y registro local; PA-11 quedó resuelta. C-01 está implementado con 8/8 tareas, incluida la excepción de proceso aceptada; todavía no está archivado. El coordinador actualiza a continuación su estado en CHANGES. Las pruebas HTTP no acreditan diseño visual, accesibilidad integral, interacción móvil, Safari real ni rendimiento del sitio final.

Alcance documental autorizado y revisado para cerrar 3.3:

- `knowledge-base/02_descripcion_general.md`, `AGENTS.md` y `CLAUDE.md`: sustituir las versiones pendientes de Astro/TypeScript por las versiones comprobadas y referenciar el entorno y lockfile.
- `knowledge-base/10_preguntas_abiertas.md`: resolver PA-11 con las versiones y comandos reales; conservar las demás preguntas abiertas.
- `knowledge-base/08_arquitectura_propuesta.md`: distinguir la base creada de las carpetas funcionales futuras; retirar la afirmación de que `src/` está por crear.
- `knowledge-base/09_decisiones_y_supuestos.md` y `knowledge-base/README.md`: sustituir las referencias a versiones aún no elegidas por el resultado verificado de C-01.
- `README.md`: reflejar fundación completa y base ejecutable, y documentar instalación, comandos y límites de las pruebas.
- `CHANGES.md`: reflejar el progreso real de C-01; no declarar archive ni implementación completa antes de resolver sus tareas pendientes.
- `documentacion/herramientas/playwright-cli-local.md`: retirar la afirmación de que Astro no está iniciado, manteniendo la ausencia de Playwright Test y los límites de la inspección.
- `.atl/skill-registry.md`: actualizar únicamente las referencias a la base y estrategia de pruebas disponibles; conservar su carácter de caché local.
