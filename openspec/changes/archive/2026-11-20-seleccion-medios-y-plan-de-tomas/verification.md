# Verificación de C-04

## Entregables

- [Pedido de portada para Franco](../../../../documentacion/revision-medios/pedido-portada.md) con escenas, pares consecutivos H/V, respaldo por encuadre y exportación sin música.
- [Faltantes por sección](../../../../documentacion/revision-medios/faltantes-c04.md) con alternativas internas y confirmaciones externas pendientes.
- [Ficha para C-09](../../../../documentacion/revision-medios/ficha-evaluacion-c09.md) con encuadre, reproducción y carga comparables. No se decidieron proveedor ni presupuestos.

## Selección y inspección

Revisé tres originales a escala de salida, la comparación de encuadres centrales 16:9 y 9:16 y las imágenes servidas por Astro en la vista de desarrollo. Las exportaciones parten de los originales, aplican orientación y convierten al espacio sRGB. WebP con pérdida a calidad 79, sin metadatos del original, 1440 × 960 en los tres casos. Los SHA-256 de los tres originales coinciden antes y después. El original duplicado de pileta en Paisaje comparte SHA-256 con el de Pileta y se omitió.

| ID / uso previsto | Original, relativo a `../fotos/Fotos` | Original | WebP fuente de Astro | WebP observado de Astro |
| --- | --- | --- | --- | --- |
| `predio-atardecer` · El Parador | `Instalaciones/Paisaje/DSC_0080.jpg` | 6000 × 4000 | 176.156 bytes | 24.314 bytes |
| `pileta-deck` · sector acuático | `Instalaciones/Pileta/7fdbcac0-30c2-4fb6-afee-b97da6ad6dcc.jpg` | 4160 × 2773 | 246.718 bytes | 30.554 bytes |
| `relieve-montana` · entorno sin nombre atribuido | `Instalaciones/Paisaje/_DSC0119.jpg` | 6000 × 4000 | 206.128 bytes | 22.534 bytes |

Selección incorporada: **629.002 bytes**. En la comprobación local Edge eligió 480 × 320 en escritorio (1440 × 1000) y móvil táctil emulado (390 × 844). Se verificó HTTP 200, decodificación, relación 3:2 y WebP de respuesta en los seis casos. Las fotos ocupan el ancho de cada tarjeta, sin recorte ni desborde. El ensayo 9:16 elimina la torre lateral del predio, estrecha el deck y deja fuera los árboles que enmarcan la montaña. Las tomas verticales de portada requieren encuadre propio. Las láminas y las capturas quedaron en `../tmp/c04-review/` fuera de Git. Las propuestas sin contexto conservan sus relaciones pendientes.

Reproduje en Edge una copia auxiliar muda de **6 a 10 s de `Instalaciones/Paisaje/IMG_0056(1).MOV`**, exportada fuera de Git. Se confirmó avance de fotogramas y fin de reproducción a los 4 s en 360 × 640. En la tira se distingue el movimiento del agua y un leve desplazamiento de encuadre, con deck, árboles y pileta legibles a esa escala. La orientación visible es vertical. La reducción y el transcodificado limitan la valoración de nitidez del original. El original declara pista AAC, cuyo contenido no se escuchó ni se evaluó. Queda como referencia de composición y no como toma definitiva. El resto de los clips del inventario siguen candidatos según relevamiento.

## Comprobaciones

`npm run verify` aprobó 20 pruebas, tipos sin errores, avisos ni sugerencias y una sola página en el build. `/revision-medios/` y `/prototipo-visual/` están disponibles únicamente con Astro dev y responden 404 en preview. En `dist/` solo está `index.html`; ninguna foto se publicó. Se ejecutaron las pruebas locales de loopback con la autorización de ejecución necesaria por `EACCES` del sandbox.

### TDD Cycle Evidence

| Task | Test File | Layer | Safety Net | RED | GREEN | TRIANGULATE | REFACTOR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.3 | `tests/medios.test.mjs` | Catálogo y archivo local | 17/17 | Export `resolverFoto` ausente | Resolver con fuente, alternativo y archivo real | ID desconocido y propuesta pendiente; catálogo válido | No hizo falta |
| 2.4 | `tests/prototipo-visual.test.mjs` | HTTP Astro | 17/17 | Dev 404 frente a 200 esperado | Dev entrega foto WebP real | Preview 404, C-03 y home conservados. Edge decodifica tres archivos en dos viewports | No hizo falta |

La prueba anterior de catálogo vacío usa ahora un catálogo hipotético con las relaciones pendientes, y el fixture de referencias válidas conserva los medios existentes. Ambas mantienen el comportamiento que verificaban al incorporar los primeros datos reales.
