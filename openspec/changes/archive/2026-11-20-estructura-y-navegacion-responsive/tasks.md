# Tasks

## 1. Estructura compartida e identidad

- [x] 1.1 Ejecutar el baseline de `npm run verify`. Escribir primero las comprobaciones HTTP del documento inicial, los landmarks únicos y el enlace de salto. Implementar layout, encabezado, pie e integración de Inicio. Verificar en HTML estático que se conserva el nombre, la ubicación y el contrato HTTP existente. Documentar qué posee el layout y qué se inserta en su slot.
- [x] 1.2 Definir variables comunes de Aventura a partir de KB-11 y aplicarlas a la estructura. Revisar lectura, contraste, foco, estados y desborde en ancho móvil, ancho intermedio y escritorio. Registrar la pila tipográfica candidata, sin aprobar una familia definitiva.

## 2. Destinos y menú responsive

- [x] 2.1 Escribir primero los casos de destinos habilitados, destinos ausentes y fragmentos entre páginas. Definir la lista compartida y su punto de integración, con solo los destinos reales en la principal. Comprobar que cada enlace visible tiene su ruta y fragmento en el entorno correspondiente. Documentar cómo habilitar nuevos destinos y quién integra la principal.
- [x] 2.2 Escribir primero una prueba de comportamiento del menú móvil. Implementar el desplegable nativo y sus mejoras puntuales. Verificar que el menú abre y cierra con teclado y tacto, que Escape devuelve foco al control, que activar un ancla conserva el recorrido al contenido y que el scroll permanece libre. Comprobar con JavaScript desactivado y con movimiento reducido.
- [x] 2.3 Escribir primero las comprobaciones HTTP de las rutas internas de revisión y su ausencia en el build. Incorporar `/revision-navegacion/` y su detalle de muestra, usando la misma estructura y anclas propias. Verificar acceso directo al detalle, retorno por fragmento, ausencia de rutas y ejemplos en la salida estática y continuidad de la muestra de C-03. Documentar el recorrido para Franco.

## 3. Contacto por contexto

- [x] 3.1 Escribir primero las pruebas del resolver con número y mensajes sintéticos confirmados, comparando consulta general, personalizada y propuesta por ID. Implementar la construcción del enlace y comprobar el mensaje decodificado exacto con acentos, espacios y caracteres especiales. Triangular con ID desconocido, teléfono inválido y número o mensaje vacío, provisional o pendiente. Documentar las unidades editoriales y sus estados.
- [x] 3.2 Incorporar la presentación de contacto reutilizable y sus ejemplos no accionables en la revisión, con comprobaciones del DOM antes de implementar. Verificar que el build actual omite la acción con PA-08 pendiente y que ningún ejemplo envía a un destino externo. Verificar el enlace de los casos aprobados con datos sintéticos sin abrir una conversación. Revisar que el flujo carezca de formulario, registro, rastreo y confirmaciones de envío o reserva.

## 4. Integración y traspaso

- [x] 4.1 Ejecutar `npm run verify`, verificar las dos escalas en navegador y registrar evidencia de teclado, foco, tacto o emulación, JavaScript desactivado, movimiento reducido, acceso directo y build sin rutas de revisión. Documentar RED/GREEN y triangulación donde aplique. Actualizar README, KB y roadmap con el estado verificado, pasos de integración posteriores y comprobaciones físicas pendientes, incluidas las de WhatsApp cuando se validen los datos.
