# Tasks

## 1. Entrada de revisión y dirección visual

- [x] 1.1 Comprobar rama y baseline con `npm run verify`. Documentar la URL interna y crear primero las pruebas del contrato de desarrollo y de la salida pública. Implementar la ruta aislada y comprobar HTTP 200 en desarrollo, HTTP 404 en la vista previa del build, ausencia de recursos de muestra en `dist/` y conservación del contrato de `/`.
- [x] 1.2 Preparar una dirección candidata con marca o nombre del parador, tipografía gratuita, escala, color y espacios. Aplicar variables CSS de alcance local y registrar origen/licencia de los recursos usados. Revisar con Franco la composición en celular y escritorio y registrar qué queda pendiente de revisión con la dueña.

## 2. Portada y presentación

- [x] 2.1 Montar portada, presentación textual y enlace directo entre ambas con HTML legible desde la primera respuesta. Usar textos del catálogo o ejemplos autorizados identificables y material preparado para revisión, con fuente y estado. Antes de implementar el comportamiento, definir pruebas del acceso directo y la lectura sin JavaScript. Comprobar contraste, jerarquía y recortes en las dos escalas y anotar referencias para C-04.
- [x] 2.2 Probar el comportamiento de la portada con medio fijo y, si hay un tramo apto autorizado, agregar el clip silencioso como mejora progresiva. Escribir primero la prueba del comportamiento que se implemente y verificar respaldo desde el inicio, medio ausente o fallido, movimiento reducido y pausa fuera de vista cuando haya video. Registrar con evidencia si la prueba se limitó a una muestra estática.

## 3. Galería y revisión de interacción

- [x] 3.1 Probar una galería horizontal con una lista breve de instalaciones y su texto. Definir primero pruebas para acceso al contenido y navegación mediante controles, anclas o teclado, y para la continuidad del recorrido sin scripts. Verificar gesto táctil, foco, scroll vertical, paso entre imágenes y continuación a la sección siguiente en navegador. Comprobar la variante con movimiento reducido.
- [x] 3.2 Comparar la muestra interactiva con su variante estática a partir del mismo contenido. Registrar navegador, tamaño de ventana, entrada, red y equipo cuando se mida carga o fluidez. Revisar en un dispositivo real si está disponible, identificar expresamente los datos obtenidos por emulación y anotar las verificaciones reales pendientes. Proponer a Franco una matriz breve para PA-14.

## 4. Integración y entrega

- [x] 4.1 Ejecutar `npm run verify` y la revisión integral de desarrollo y build. Confirmar que la muestra abre con el comando documentado y que los casos de interacción, accesibilidad, respaldo de medios y salida pública tienen evidencia o una condición pendiente identificada. Registrar resultados TDD conforme a las reglas del repositorio y revisar el diff de alcance.
- [x] 4.2 Registrar la revisión con Franco, estado de aprobación de la identidad y propuesta de traspaso. Separar recursos que funcionan, variantes descartadas y pendientes de aprobación. Dejar a C-04 encuadres y lista de tomas, a C-05 variables y recomendaciones de navegación, a C-09 criterios de respaldo y transición, y a C-12 condiciones de prueba todavía abiertas. Actualizar README, KB y roadmap con lo comprobado.
