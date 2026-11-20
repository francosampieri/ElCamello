# Design

## Context

`BaseLayout.astro` provee el documento en español y un slot. `index.astro` contiene el nombre, la ubicación y su propia región principal. C-02 centraliza identidad, contacto y propuestas. El número de WhatsApp está pendiente y los mensajes de propuesta son provisionales. C-03 aprobó crema `#FAEACB`, naranja quemado `#A93B12` y petróleo `#00666A`, con titulares gruesos y revisión de familia tipográfica aún abierta. Sus ejemplos quedan en la ruta interna del prototipo.

## Goals / Non-Goals

**Goals:** entregar componentes y contratos que se puedan usar y probar por separado. Dar a Franco una muestra con un cambio real de página, navegación directa y ejemplos de los tres ámbitos de consulta.

**Non-Goals:** componer la principal definitiva, publicar rutas comerciales o slugs provisionales, instalar un sistema de animación o reemplazar el contacto directo aprobado.

## Decisions

### D-01 — Integración incremental y revisión aislada

| Opción | Qué permite | Coste o límite |
| --- | --- | --- |
| Estructura compartida en la principal y recorrido ampliado en revisión local | Usa los componentes reales desde el inicio y permite probar detalles futuros con destinos de muestra propios | Hay que mantener separados los destinos disponibles y los de revisión |
| Estructura solo en revisión local | Conserva intacta la página actual y permite experimentar | Pospone comprobar que la estructura funciona en el build público |
| Publicar el recorrido provisional con rutas de propuesta | Permite navegar por una representación completa | Expone rutas y contenido todavía sujetos a validación y anticipa el trabajo de C-07 y C-11 |

Recomendación: usar la primera opción. El layout posee encabezado, navegación, un único `main` identificado y pie. El contenido se inserta en el slot del `main`; la principal conserva nombre, ubicación y su título visible. Si solo existe la principal, sus destinos son únicamente los disponibles, como Inicio. El pie puede enlazar el Instagram confirmado del catálogo si corresponde. `/revision-navegacion/` y una subruta interna de detalle sirven exclusivamente en `astro dev`, con anclas y un ejemplo comercial identificados como muestra. Las rutas dev usan el mecanismo ya presente en C-03. La muestra y su contenido propio se excluyen del build.

Traducir Aventura a propiedades CSS con roles de superficie, énfasis y acción. Usar la tinta y el blanco de KB-11 como auxiliares. Adoptar inicialmente la pila de sistema de C-03, con Arial Black como candidata para titulares, sin descargar fuentes. La composición usa la paleta y el carácter tipográfico ya revisados y permite validar el encabezado, el menú y el pie en ambos tamaños.

### D-02 — Navegación con destinos publicados por cada composición

El layout toma una lista tipada de destinos habilitados. Los identificadores internos de sección son estables y separados de los slugs de PA-04. El punto de integración habilita un destino solo junto a su ruta o su ancla efectiva. Así, cuando C-11 integre una sección de propuestas con el ID acordado, un enlace desde el detalle llevará a `/#propuestas`; en C-05 esa ancla se demuestra con su equivalente en revisión local. Conservar las URLs completas con fragmento al cruzar rutas, y evitar enlaces como `href="#"`, páginas futuras o anclas ausentes. Evitar indicadores de página actual imprecisos en enlaces de fragmento.

| Menú móvil | Ventaja | Tradeoff |
| --- | --- | --- |
| Desplegable nativo con `details/summary` y mejora pequeña | Teclado y tacto desde el HTML, recuperación natural sin scripts y poco código | Con scripts, Escape y cierre al navegar requieren un complemento acotado |
| Botón con panel y estado JavaScript | Control fino de estado y movimiento | Requiere fallback visible sin scripts y cuidar sincronización de estado y foco |
| Diálogo modal, con o sin React | Ofrece un panel inmersivo si la navegación crece | Añade manejo modal de foco y fondo; el alcance actual no justifica esa complejidad ni la dependencia |

Recomendación: desplegable nativo con el mismo conjunto de destinos para escritorio y celular. Añadir cierre con Escape y restitución del foco al resumen cuando el foco esté dentro. Al activar un enlace del menú mejorado, cerrarlo sin robar el foco al destino, con especial cuidado cuando se navega a un ancla en la misma página. Mantener el conjunto de controles visible y navegable sin JavaScript, además de suprimir transiciones prescindibles bajo movimiento reducido. La exploración no convierte el menú en modal ni bloquea el scroll.

### D-03 — Resolver contacto antes del render

Usar una función TypeScript pura que reciba un ámbito discriminado (general, personalizado o propuesta por ID estable) y devuelva un enlace preparado o un estado no disponible. Leer el número de `contacto.unidades.whatsapp`. Tomar el mensaje de propuesta de su unidad `mensajeWhatsApp` y definir dos unidades editoriales distintas para general y personalizado. Resolver por ID, no por slug o por texto libre de URL. Los tres ámbitos se validan por separado; una propuesta desconocida o pendiente no cae a consulta general. El número confirmado se expresa con dígitos de formato internacional sin `+`, espacios, paréntesis ni guiones. Rechazar un dato que no cumpla el formato acordado, en lugar de inferir prefijo o reescribir un valor que podría ser otro destinatario. Exigir mensaje confirmado no vacío y usar `encodeURIComponent` al construir `https://wa.me/<numero>?text=<mensaje>`. La ayuda oficial explica el formato y el borrador precargado. [WhatsApp, enlace directo](https://faq.whatsapp.com/5913398998672934)

La unificación en un componente evita repetir la comprobación editorial en cada página. Un inicio de WhatsApp sin mensaje aprobado quitaría el contexto y un selector de destinatario sin número dejaría de dirigir al parador. Un formulario intermedio añadiría pasos y captura de datos, contrario al recorrido acordado. El contacto explícito por URL mantiene el flujo sin intermediarios. Hasta PA-08, la muestra interna enseña los tres textos de ejemplo como contenido legible, sin un botón que simule enviar un mensaje. La principal omite el CTA de WhatsApp si no hay acción confirmada. La validación con datos sintéticos queda en pruebas sin contacto externo. Por ejemplo, una consulta conocida que contiene «¿Cumpleaños + sábado & domingo?» debe llegar como un solo valor del parámetro de mensaje con ese texto intacto.

## Risks / Trade-offs

- Duplica navegación entre tamaños → ambos se derivan de la misma lista y el bloque oculto no queda en el orden de tabulación.
- Un ancla publicada antes de su contenido crea un salto roto → verificar fragmentos y rutas efectivos en revisión y en la salida estática.
- Un mensaje provisional o una prueba con destino ficticio se confunden con una acción real → la disponibilidad requiere estado confirmado y las pruebas de URL no abren conversaciones externas.
- La emulación no reproduce el paso de navegador a app en un equipo real → verificar estructura, foco y URL en C-05. Registrar por separado la comprobación con número aprobado y equipo físico cuando corresponda.

## Migration Plan

Incorporar la estructura sobre la principal existente, con el inventario mínimo de destinos correspondientes al build. Los changes posteriores añaden secciones y páginas con sus destinos. C-11 integra la navegación definitiva. La ruta de revisión se puede retirar sin afectar las páginas públicas ni el catálogo.

## Open Questions

- PA-04 conserva la decisión sobre slugs públicos definitivos. La muestra usa rutas internas.
- PA-08 conserva la validación del número y de cada texto. El resolver y la navegación se pueden verificar antes con los estados actuales y datos de prueba.
