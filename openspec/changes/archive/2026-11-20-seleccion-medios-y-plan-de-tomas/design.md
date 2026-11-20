# Design

## Context

El inventario de selección inicial cubre 169 imágenes y 67 archivos de video en 3,50 GiB fuera del repositorio. Las hojas de contacto y los fotogramas orientan la selección. La revisión previa de los videos se limitó a tres fotogramas por serie y no evaluó audio. En la preparación de esta propuesta solo se confirmó la existencia de archivos candidatos de foto y video. C-02 provee un catálogo editorial con medios aún vacíos y estados confirmado, provisional y pendiente. C-03 provee un prototipo aislado y la guía Aventura, con base crema, bloques de naranja quemado, acciones en petróleo y titulares gruesos.

## Goals / Non-Goals

**Goals:** entregar una primera selección comprobada, el registro de recursos y faltantes, un pedido utilizable por quien grabe y una pauta repetible para evaluar exportaciones de portada.

**Non-Goals:** producción de tomas durante este change, montaje final o elección de proveedor, publicación, cambios de dirección visual o importación masiva. El prototipo conserva su aislamiento de desarrollo.

## Decisions

### D-01 — Revisar candidatos por destino y contexto

Partir de [selección y faltantes](../../../../documentacion/revision-medios/seleccion-y-faltantes.md). Registrar fuente relativa, encuadre previsto, orientación real, dimensiones, destino, estado y confirmación necesaria. Revisar el original a escala útil y comparar con el resultado en contexto móvil y escritorio. Elegir un representante por encuadre, revisar duplicados y reproducir con un reproductor local cada tramo que efectivamente se proponga. Anotar intervalos, movimiento, nitidez y si se pudo evaluar audio. Por ejemplo, `IMG_5221.HEIC` es candidato visual de quincho. Su carpeta y lo que se ve en la foto no acreditan una jornada empresarial. Primero pedir contexto a la dueña, y solicitar producción nueva si el material identificado no cubre el destino. Una vista neutra de las instalaciones puede servir provisionalmente para componer.

### D-02 — Derivados locales y salida Astro verificable

| Opción | Ventaja | Coste y decisión |
| --- | --- | --- |
| Fotografías seleccionadas y preparadas en el repo, con procesamiento de Astro | Build repetible y una fuente identificable para las resoluciones necesarias | Hay que controlar tamaño y evitar derivados redundantes. Es la opción acordada. |
| Imágenes ya exportadas servidas como archivos estáticos | Entrega directa para un caso con tamaño y formato conocidos | Traslada al equipo generar y mantener variantes a mano. Reservar para una excepción justificada si correspondiere. |
| Servir imágenes optimizadas desde un proveedor | Puede ofrecer recortes remotos y evitar peso en Git | Suma cuotas, dependencia operativa y revisiones de configuración. No se necesita para esta selección. |

Conservar el original y archivos de edición fuera del repositorio. Normalizar orientación y perfil de color del derivado cuando haga falta, también al convertir HEIC o fuentes con metadatos de rotación. WebP permite un candidato liviano para fotografía. JPEG sirve si el flujo de origen o compatibilidad lo hace preferible. AVIF es una opción de salida si las comparaciones de calidad y peso lo justifican. Evaluar tamaños de uso y densidades reales, sin inventar los presupuestos de rendimiento de PA-14. Usar el contrato actual de medios y sus IDs estables, con contexto y alternativos donde corresponda. Resolver solo IDs asociados a archivos reales. Comprobar en una composición local aislada que el procesamiento de Astro entrega un archivo decodificable, con ruta y encuadre correctos, y revisar tamaño de salida. Mantener la evidencia fuera del sitio publicado.

### D-03 — Composición y pedido de nuevas tomas

Redactar primero el pedido para que Franco pueda enviarlo temprano. Priorizar vistas del predio, relación con la montaña y espacios de encuentro como candidatos, con lista de toma, sujeto, espacio de lectura, movimiento, orientación y respaldo. Por ejemplo, proponer una vista de pileta y entorno con un punto de interés legible y margen para titulares en horizontal, y recién después grabar su versión vertical reencuadrada en el mismo momento. Mantener planos tranquilos y texto protagonista. Solicitar respaldos estáticos por encuadre, tomados con el mismo criterio visual o seleccionados del material nuevo a calidad adecuada.

Usar pares H/V consecutivos como ya se acordó. Recortar un único archivo horizontal reduce trabajo de rodaje, pero puede perder espacio para texto y sujeto en móvil. Reservar el recorte digital para imágenes internas cuyo objeto conserve aire, revisando cada variante. Usar la base crema de Aventura, el naranja para energía en secciones y petróleo para acciones como guía de convivencia entre imagen, contraste y texto. La identidad recreativa no exige acelerar las tomas de portada.

Separar el pedido de rodaje de un mapa por Portada, El Parador, instalaciones, actividades, Empresas, cumpleaños de adultos, cumpleaños infantiles, primaria organizada por padres y Nosotros. Cada fila anota qué hay, qué falta, responsable y alternativa. Priorizar retrato principal y foto familiar identificados por la dueña. Preguntar contexto de las fotos grupales antes de pedir repetir escenas. Franco prepara y canaliza el pedido. La dueña confirma personas y eventos y coordina faltantes.

### D-04 — Evaluar exportaciones antes de resolver distribución

Preparar una ficha para C-09 que compare exportaciones horizontal y vertical con sus respaldos, en la misma composición y bajo condiciones anotadas. Registrar resolución/orientación, códec, duración, tamaño, calidad visual y recortes, contraste/texto, primera imagen visible, carga, errores de reproducción, comportamiento sin sonido, reproducción según dispositivo y pausa fuera de vista. Registrar dispositivo/navegador, red y variante. Comparar entrega estática propia con alojamiento audiovisual cuando haya datos sobre archivos, uso y cuotas. La primera simplifica el flujo pero puede trasladar peso a la infraestructura del sitio. La segunda puede aportar entrega especializada a cambio de dependencia, configuración y límites. Ningún proveedor, compra o presupuesto queda decidido aquí.

## Risks / Trade-offs

- Fotogramas de inventario pueden ocultar desenfoque o giros → reproducir el tramo relevante y revisar el derivado al tamaño real antes de elegir.
- Un encuadre amplio puede perder el sujeto o el contraste en vertical → revisar ambas composiciones y registrar márgenes y respaldos.
- Un evento real puede quedar mal atribuido → conservar el estado pendiente, usar material neutro identificado y pedir confirmación explícita a la dueña.
- Los archivos grandes o versiones repetidas pueden crecer en Git → incorporar únicamente derivados aceptados para destinos concretos y comparar sus dimensiones y peso.

## Migration Plan

Incorporar los derivados junto con sus entradas y referencias comprobadas. Una retirada quita primero las referencias correspondientes o las devuelve a estado pendiente, y después retira el derivado. Los originales permanecen intactos y el trabajo puede avanzar con alternativas internas identificadas.

## Open Questions

- PA-01: fecha, lista final de escenas y resultado de la nueva producción H/V.
- PA-07: identidad y contexto editorial de candidatos sujetos a revisión de la dueña.
- PA-02 y PA-14: distribución, condiciones de prueba y presupuestos después de comparar primeras exportaciones y dispositivos.
