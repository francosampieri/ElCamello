# Verificación de C-05

La principal usa el marco Aventura, con nombre y ubicación, navegación a Inicio, salto al contenido y pie con Instagram. La revisión de desarrollo incorpora un detalle de muestra, enlaces a secciones y seis borradores de consulta. La navegación móvil conserva teclado y uso sin JavaScript.

Franco informó el número de contacto. Queda registrado con su formato original y estado provisional hasta comprobar el destinatario y su representación internacional en WhatsApp. La dueña revisará los seis mensajes. PA-08 y PA-04 conservan sus decisiones pendientes. Para operar el cambio, ver [navegación y mensajes de consulta](../../../../README.md#navegación-y-mensajes-de-consulta).

## Evidencia

- Baseline `npm run verify` en copia aislada del proyecto con los tests del commit de base y las dependencias enlazadas: 17 pruebas, tipos y build correctos. El primer intento en la raíz encontró el servidor de desarrollo ya activo. Se preservó ese servidor y su lock. Las pruebas de desarrollo ahora usan puerto dinámico y `--ignore-lock`.
- Verificación final en la rama: 23 pruebas, tipos con cero diagnósticos y build de una página. La vista de revisión y el detalle dev responden 404 en preview. C-03 sigue funcionando en desarrollo y queda fuera del build.
- Edge: 320, 768 y 1440 px sin desborde, salto por teclado con foco, tacto emulado a 390 px, Escape con devolución de foco y acceso por fragmento desde el detalle y desde la misma página. Con JavaScript desactivado funciona el menú nativo y el teclado. Se verificó el recorrido con preferencia de movimiento reducido y el desplazamiento libre. Los seis ejemplos carecen de enlaces activos o formulario.
- Las URLs con número y mensajes confirmados se comprobaron con datos sintéticos, sin abrir conversaciones. Queda pendiente la comprobación del destinatario real y la transición a la app en equipo físico.

## TDD Cycle Evidence

| Tarea | Prueba | Capa | Safety Net | RED | GREEN | TRIANGULATE | REFACTOR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | `smoke.test.mjs` | HTTP público | Baseline aislado 17/17 | El documento no tenía encabezado | Landmarks, salto e identidad | Home 200 y ruta desconocida 404 | Marco compartido verificado |
| 1.2 | Edge | Visual | Identidad C-03 | N/A visual | Roles Aventura, foco y lectura | 320, 768, 1440 px | Sin desborde |
| 2.1 | `navegacion.test.mjs` | Unidad | Baseline 17/17 | Faltaba el módulo | Habilitación y fragmento compartido | ID ausente sin enlace | Destinos de revisión compartidos |
| 2.2–2.3 | `prototipo-visual.test.mjs`, Edge | HTTP y navegador | C-03 preservado | La revisión respondía 404 | Menú nativo y rutas dev 200 | Preview 404, toque, Escape, teclado sin JS y anclas | Dev/preview reutilizados en la suite |
| 3.1–3.2 | `navegacion.test.mjs`, `prototipo-visual.test.mjs`, Edge | Unidad y render | Inventario editorial previo | Faltaban el resolver y la página de muestra | Tres ámbitos y seis borradores | Unicode, inválidos, estados pendientes e ID desconocido | Resolución común sin duplicar mensajes |
| 4.1 | `npm run verify` | Integración | Baseline 17/17 | Ver observaciones anteriores | 23/23, tipos y build | C-03 y salidas 404 verificadas | Corrección del matcher para atributos de Astro y ejecución final |
