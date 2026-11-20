# Verificación de C-02

Rama `feature/change_2`. La verificación parte de la aprobación de la propuesta por Franco y conserva el contrato estático de C-01.

## Evidencias de implementación

- El catálogo real contiene cuatro propuestas, cinco grupos de instalaciones, cinco grupos de actividades, seis FAQ y la consulta general separada. El catálogo de medios está vacío hasta la selección de C-04.
- El inventario derivado devuelve 50 unidades provisionales con valor y 16 pendientes sin valor. `validarCatalogo()` no informa duplicados ni referencias rotas en el catálogo real. El [README](../../../../README.md#contenido-compartido) explica cómo consultar el inventario y sustituir una unidad.
- El baseline comprobó los tipos, la generación de una página estática y los dos smokes de C-01. El sandbox devolvió `EACCES` al conectar con el servidor local. La ejecución aprobada de `npm test` antes de modificar los scripts pasó ambos casos.
- `npm run test:contenido` verificó los 13 casos del módulo. Una alteración temporal de la búsqueda hizo que `npm run verify` devolviera 1 al ejecutar esta suite después de tipos y build. El comando se detuvo antes de los smokes y se restauró el archivo original byte a byte.
- `npm run verify` salió con código 0 tras la restauración. Astro reportó 0 errores, 0 advertencias y 0 indicaciones. Se generó una página estática y pasaron las 13 pruebas de contenido y los 2 casos HTTP.
- `git diff` no muestra cambios en la página, el layout, los estilos ni el lockfile. Las cuestiones comerciales PA-04 a PA-10 mantienen sus validaciones correspondientes.

## TDD Cycle Evidence

| Tarea | Prueba | Capa | Baseline / RED | GREEN y triangulación |
| --- | --- | --- | --- | --- |
| 1.1–1.2 | `tests/contenido.test.mjs` | Consulta de contenido | Dos smokes de base pasaron. La prueba nueva falló porque el módulo aún no existía. | Consulta válida y luego ausencia explícita para ID desconocido. |
| 2.1 | `tests/contenido.test.mjs` | Lectura editorial | La propuesta mínima carecía de unidades editoriales y falló la lectura. | Público confirmado, título provisional disponible y selección pendiente sin valor. |
| 2.2 | `tests/contenido.test.mjs` | Inventario | Falló la llamada a la función de inventario ausente. | Localiza valor, ubicación y motivo. Al confirmar una unidad, conserva las demás pendientes. El refactor a salida tipada mantuvo la suite verde. |
| 3.1 | `tests/contenido.test.mjs` | Catálogo compartido | Faltaba la exportación del catálogo y la consulta devolvía el valor original frente a una fuente editada. | Cuatro propuestas, incluidos y opcionales, ID estable y edición compartida. |
| 3.2 | `tests/contenido.test.mjs` | Integridad de referencias | Faltaban el catálogo de medios y la función de validación. | Admite medio no seleccionado y relaciones válidas. Informa ID duplicado y destinos inexistentes de registros y medios. |
| 3.3 | `tests/contenido.test.mjs` | Datos representativos | El contacto pendiente ya respetaba el contrato preexistente. La nueva prueba de importe falló por ausencia del valor. | WhatsApp queda pendiente sin destino. El importe de ejemplo se lee y aparece en el inventario como provisional. |
| 4.1–4.2 | `npm run verify` | Integración de comprobaciones | El control negativo de la búsqueda se detectó durante la suite de contenido y devolvió 1. | Se restauró la búsqueda y se repitió la verificación conjunta. |
