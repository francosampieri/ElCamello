# Tasks

Franco aprobó D-01 a D-04 y autorizó apply el 19/11/2026. Los checks siguientes reflejan el progreso comprobado de implementación; no implican autorización para commit, push, merge o archivo.

## 1. Revisión y contrato ejecutable

- [x] 1.1 Confirmar con Franco D-01 a D-04 — versiones, npm y comprobación nativa — y comprobar rama `feature/change_1`, estado de Git e inventario de archivos previos; verificar que el alcance aprobado y cualquier trabajo preexistente queden identificados antes de escribir aplicación.
- [x] 1.2 Disponer del caso mínimo de página `/` válida en `tests/smoke.test.mjs`, con una petición real a la salida servida y administración del servidor propio con espera y cierre acotados; agregar el caso 404 como triangulación. El test se escribió primero, pero su RED inicial fue inválido por una ruta de bin equivocada: la producción se escribió antes de un RED contractual válido. Franco aceptó el 19/11/2026 esta excepción documentada exclusivamente para C-01; los controles negativos posteriores y GREEN no se presentan como cumplimiento retroactivo de ese orden. Ver `verification.md`.

## 2. Base Astro y comandos reproducibles

- [x] 2.1 Crear el manifiesto ESM, configuración Astro estática y TypeScript estricto con las versiones aprobadas, generar el lockfile e instalar sin tocar configuración global; verificar las versiones resueltas y que no se incorporen React, Tailwind, frameworks de tests ni dependencias de funciones futuras.
- [x] 2.2 Crear la página mínima, layout y CSS estándar necesarios para cumplir el contrato; obtener GREEN mediante build y los smoke tests. Añadir el caso 404 como triangulación del servicio HTTP y volver a ejecutar tras cualquier refactor. Verificar que identidad y estructura semántica estén en el HTML recibido sin ejecutar JavaScript.
- [x] 2.3 Definir `dev`, `check`, `build`, `preview`, `test` y `verify`, donde `verify` propague fallos de la secuencia; documentarlos en README junto con las versiones de entorno, el uso de `npm ci` y el alcance limitado de los smokes, y comprobar que los comandos documentados ejecuten esas responsabilidades.

## 3. Comprobación integral y entrega

- [x] 3.1 Reinstalar una vez desde el lockfile generado en 2.1 mediante `npm ci` y ejecutar `npm run verify`; comparar las resoluciones con la instalación inicial y confirmar los mismos resultados, cubriendo ambos escenarios de reproducibilidad de la spec.
- [x] 3.2 Comprobar que un fallo controlado de tipos, generación o contrato HTTP produzca salida no cero en la etapa correspondiente y en el flujo conjunto; retirar únicamente la alteración temporal propia, verificar de nuevo el estado sano y registrar evidencias de éxito y fallo sin dejar defectos ni procesos de prueba abiertos.
- [x] 3.3 Revisar el diff contra el inventario previo para confirmar preservación de documentación, MCP, skills y medios originales; entregar evidencia de instalación, tipos, build y HTTP, incluida la secuencia TDD aplicable. Informar a Franco qué documentos requieren actualización — PA-11 y tablas de versiones de KB/AGENTS/CLAUDE — y obtener confirmación antes de retirar sus pendientes anteriores. No marcar C-01 implementado ni archivar hasta completar sus criterios; no hacer commit, push o merge sin permiso específico.
