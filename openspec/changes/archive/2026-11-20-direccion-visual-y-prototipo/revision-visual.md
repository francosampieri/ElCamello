# Revisión de dirección visual

Abrir `/prototipo-visual/` con `npm run dev`. El comparador repite el texto y las imágenes. Cada enlace cambia la variante en la URL. **Franco eligió Aventura y el comparador la abre de forma predeterminada**, con la paleta acordada y una portada principalmente crema. Encuentro y Paisaje siguen disponibles para comparar.

| Variante | Paleta y roles candidatos | Tipografía y composición | Contrapartida |
| --- | --- | --- | --- |
| Encuentro | Crema `#f3e2bf`, papel `#fffaec`, terracota `#9b3610`, pino `#1b3428` y naranja vivo `#d65c22` | Trebuchet MS y cuerpo de sistema. Contenedor redondeado, foto y texto en planos contiguos | Lectura clara con proximidad de tono. Requiere imágenes expresivas para lograr más energía |
| Aventura (elegida) | Crema `#FAEACB`, naranja quemado `#A93B12` y petróleo `#00666A`, con tinta `#252716` y blanco `#FFFFFF` de apoyo | Arial Black y cuerpo de sistema. Titular grueso, portada crema y naranja concentrado en instalaciones | La base crema deja espacio a la foto. El naranja conserva energía y el petróleo identifica acciones |
| Paisaje | Crema `#f0e3c7`, marfil `#fff8e8`, pino `#244136`, turquesa oscuro `#11575a` y sol `#ed9b44` | Georgia y cuerpo de sistema. Foto panorámica, texto en superposición, acento solar | Le da peso al paisaje y depende del encuadre. La serif y el tono sereno transmiten menos energía que Aventura |

Las familias se usan vía el sistema, con alternativas para instalaciones que no incluyan cada fuente. Se tomó el sello aportado en `IMG_3774.jpg` como referencia del crema, naranja, verde pino y turquesa. La recomendación inicial de Encuentro se registró antes de la revisión. La decisión de Franco fue conservar la tipografía gruesa de Aventura y combinarla con crema dominante, naranja por bloques y el petróleo como color de acción. Los usos y una proporción orientativa 60–30–10 quedan en la [identidad visual web](../../../../knowledge-base/11_identidad_visual.md).

## Material de composición

- Sello de marca del archivo facilitado por Franco. Derivación WebP local.
- Portada común a partir de `Instalaciones/Paisaje/DSC_0080.jpg`, en 720 px y 1440 px. Entorno de la muestra fijo, con fondo oscuro de respaldo.
- Galería a partir de `Instalaciones/Pileta/7fdbcac0-30c2-4fb6-afee-b97da6ad6dcc.jpg`, `Instalaciones/Paisaje/_DSC0119.jpg` e `Instalaciones/Paisaje/DSC_0028.jpg`. Originales fuera de Git. Las copias WebP se limitan al comparador.
- Nombre, localidad, presentación y fortalezas de C-02. La bajada, el título de presentación y las leyendas son ejemplos de revisión, con el mismo contenido en las tres variantes. No se identifica un cerro específico, evento ni persona.
- C-04 deberá pedir un encuadre que conserve la lectura del paisaje y el primer plano en pantallas estrechas. Se probó con foto fija. La reproducción, la pausa y el montaje quedan para el ensayo con video apto y para C-09.

## Evidencia de revisión

- Baseline `npm run verify`: tipos sin diagnósticos, build estático y 15 pruebas previas verdes. Después de la implementación, el flujo quedó verde con 17 pruebas. La comparación de ruta HTTP comprueba portada y secciones legibles, variantes de query, home conservada, vista previa 404 y ausencia de archivos de prueba en el build.
- Edge con Playwright local: escritorio 1440 × 1000, móvil táctil emulado 390 × 844 y ancho adicional 320 px. Se revisó la portada y el comienzo de la presentación. Las tres variantes caben a 320 px sin cortar el título.
- La galería normal permite desplazamiento táctil horizontal. En el modo estático comprobado con JavaScript desactivado y movimiento reducido, sigue disponible la selección por enlace, se alcanza la presentación y se puede volver a la portada por teclado. Se comprobó el título cuando se forzó el fallo de la foto principal. No hubo prueba en dispositivo físico ni medición de rendimiento con red limitada.
- Matriz sugerida para PA-14: repetir lectura y gesto diagonal en Android/Chrome e iOS/Safari físicos, y foco y anclas en escritorio con teclado. Medir demora visual y transferencia con la red y el dispositivo registrados cuando haya material representativo. Acordar más adelante los presupuestos cuantitativos.

| Tarea | Prueba | Capa | Baseline / RED | GREEN, triangulación y ajuste |
| --- | --- | --- | --- | --- |
| 1.1, 2.1, 3.1 | `tests/prototipo-visual.test.mjs` | HTTP | 15/15 previas. La ruta dev esperada 200 devolvió 404 | Dev 200 con portada y anclas. Preview 404, home conservada, archivos de prueba ausentes |
| Selector | `tests/prototipo-visual.test.mjs` y Playwright | HTTP y navegador | La comprobación inicial coincidía con un selector CSS y Playwright expuso que el contenido seguía en Encuentro. La aserción de `main` falló antes de corregir el SSR | Aventura y Paisaje se renderizan al abrir su URL. Las tres variantes funcionan también cuando el navegador desactiva JavaScript |
| 2.2, 3.1, 3.2 | Sesión aislada Edge con Playwright | Navegador | Complemento visual y de interacción del contrato HTTP | Respaldo tras fallo forzado, teclado, movimiento reducido, ancho estrecho y gesto táctil emulado |
| 4.1 | `npm run verify` | Integración | Baseline conservado | Tipos, build, 13 casos de contenido, 2 smokes y 2 de prototipo |
| Variante inicial elegida | `tests/prototipo-visual.test.mjs` y Playwright | HTTP y navegador | Baseline 17/17. La nueva aserción esperaba Aventura y recibió Encuentro antes del cambio | Aventura carga sin parámetro y con parámetro desconocido. Encuentro y Paisaje mantienen sus URLs y funcionan desde el selector. Capturas de escritorio y móvil emulado confirman que la portada, el CTA y el bloque naranja aplican los tres roles |

El apply termina con la elección y la evidencia registradas. La revisión de la dueña, la tipografía definitiva, el montaje con video y las pruebas físicas conservan su estado pendiente. La [identidad visual web](../../../../knowledge-base/11_identidad_visual.md) deja el traspaso para C-04 sobre fotos y encuadres, C-05 sobre variables y marca, C-09 sobre portada y C-12 sobre verificación.
