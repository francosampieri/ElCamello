# Verificación de C-06

Base `62cd010` en `feature/change_6`. Incluye C-04 `b98b04f` y C-05 `49e3cc5`. El baseline integrado pasó `npm run verify` con 26 pruebas, Astro sin diagnósticos en 25 archivos y una página estática.

## Resultado

- `npm run verify` pasó 31 pruebas. Astro comprobó 30 archivos con 0 errores, advertencias y sugerencias. El build emitió una página, la principal.
- `/revision-parador/` sirve las dos secciones en desarrollo y devuelve 404 en la vista previa del build. La principal y las vistas previas de C-03, C-04 y C-05 conservan sus contratos.
- En Edge a 1440 × 1000 y 390 × 844 táctil emulado, ambas imágenes se decodificaron sin desborde de página. Enter sobre un enlace de vista llevó el foco al destino. La galería respondió al gesto táctil emulado y se pudo continuar hasta el enlace de salida.
- Con JavaScript desactivado, movimiento reducido e imágenes bloqueadas, comprobé el acceso directo a `#el-parador`, la versión en lista, el rótulo de la foto, Habitaciones y el regreso a Inicio. Pendiente verificar en dispositivos físicos.
- La galería muestra dos vistas simultáneas cuando entran. La lista apilada muestra las fotos en orden a costa de ocupar más altura. El efecto definitivo sigue en PA-03.

## Datos y traspaso

Las fortalezas vienen del catálogo C-02. La presentación y las descripciones provisionales se identifican en revisión y se omiten de la proyección pública. La temporada de verano se apoya en el [relevamiento](../../../../documentacion/fuentes/relevamiento-parador.md) y el pernocte adicional en RN-OF-05 de las [reglas de negocio](../../../../knowledge-base/05_reglas_de_negocio.md). La capacidad y condiciones de habitación quedan para confirmación según la KB.

Las fotos C-04 `predio-atardecer` y `relieve-montana` son vistas de contexto con sus alternativos del catálogo. El encuadre de `pileta-deck` para la ficha acuática sigue pendiente. Habitaciones y otros espacios mantienen su texto. PA-07, PA-08, PA-09 y PA-10 continúan abiertas.

C-11 puede montar `Presentacion.astro` y `ElParador.astro` después de la portada y antes de las propuestas. Sus IDs son `presentacion` y `el-parador`. En composición pública se usan las props por defecto. La URL para alternar la presentación de la galería solo se proporciona en revisión local.

## TDD Cycle Evidence

| Task | Test File | Layer | Safety Net | RED | GREEN | TRIANGULATE | REFACTOR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | Suites existentes | Integración | 26/26 | N/A | Baseline integrado | Ambas ramas presentes | N/A |
| 1.2 y 2.1 | `tests/parador.test.mjs`, `tests/prototipo-visual.test.mjs` | Unidad y HTTP | 26/26 | Módulo ausente y ruta 404 | Proyección y render pasan | Confirmado, provisional y grupos distintos | 31/31 |
| 2.2 | `tests/parador.test.mjs`, `tests/prototipo-visual.test.mjs` | Unidad y HTTP | 26/26 | Resolución y HTML ausentes | Medios válidos y alt visible | Medio sin archivo omitido, fichas legibles | 31/31 |
| 2.3 | Edge, script local | Navegador | Galería previa de C-03 | N/A observación visual | Teclado, táctil emulado y salida | Sin JS, movimiento reducido, lista e imagen fallida | N/A |
| 3.1 y 3.2 | `tests/prototipo-visual.test.mjs` | HTTP | 26/26 | Desarrollo devolvía 404 | Desarrollo 200 y 31/31 | Inicio 200 y revisión 404 en preview | N/A |
