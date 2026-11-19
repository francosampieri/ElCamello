# Discovery — Parador El Camello

**Fecha:** 18 de noviembre de 2026.  
**Estado:** resumen de once áreas confirmado por Franco: «Me parece perfecto, continuemos».  
**Propósito:** dejar una base de producto y contenido aprobada para la creación interactiva de la base de conocimiento. Este documento no selecciona un stack ni fija el diseño visual final.

Las decisiones de esta sesión prevalecen sobre las opciones anteriores que seguían abiertas en los documentos fuente. Cuando falta una definición, se registra como pendiente; no se completa por suposición.

## 1. Problema que resuelve

La web debe reunir la información de Parador El Camello, ayudar a los interesados a comprender qué ofrece y transmitir la belleza del lugar de una forma visualmente impactante y novedosa. Debe permitir imaginar una experiencia de grupo y pasar a una conversación comercial por WhatsApp.

La comprensión de la oferta y su presentación visual tienen un peso central. También se busca dar a la familia y al responsable de ventas una herramienta convincente para presentar el lugar, y preparar el sitio para su descubrimiento en buscadores.

No se conocen ejemplos concretos de consultas actuales, abandonos o razones de pérdida de ventas. La posible falta de propuestas claramente comunicadas es una hipótesis de trabajo, no un diagnóstico de conversión comprobado. No se prometen posiciones en Google ni resultados comerciales determinados.

## 2. Usuarios / roles

El público inicial confirmado es de Mendoza y organiza experiencias para grupos.

| Actor | Necesidad o responsabilidad |
|---|---|
| Organizadores de empresas, especialmente Recursos Humanos | Entender el espacio, las actividades y la propuesta empresarial para consultar por un evento. |
| Adultos que organizan su cumpleaños | Imaginar el festejo, conocer posibilidades e iniciar una consulta personalizada. |
| Padres que organizan un cumpleaños infantil | Entender la experiencia para niños, los servicios incluidos y los extras disponibles. |
| Padres que organizan encuentros de compañeros de primaria | Conocer una propuesta recreativa organizada por familias y consultar sus condiciones. |
| Franco | Generar los contenidos, desarrollar el sitio y realizar las modificaciones acordadas. |
| Dueña del parador | Confirmar que textos, servicios, condiciones e imágenes describen correctamente la oferta antes de publicar. |
| Padre de Franco, responsable comercial | Atender las consultas y realizar la venta personalizada por WhatsApp, además de sus tareas comerciales fuera del sitio. |

Estos roles describen personas y responsabilidades; no implican cuentas, permisos ni un panel dentro de la web.

## 3. Casos de uso

1. Como persona que descubre El Camello, quiero recorrer su presentación, instalaciones y actividades para entender el lugar e imaginar una experiencia allí.
2. Como organizador de un grupo, quiero identificar una propuesta adecuada y consultar sus detalles, incluidos, opcionales y preguntas frecuentes para decidir si me interesa.
3. Como visitante que llega por un enlace compartido, quiero acceder directamente a una página de propuesta y comprenderla sin tener que recorrer primero toda la página principal.
4. Como interesado, quiero abrir WhatsApp con un mensaje relacionado con la propuesta para continuar la consulta con el responsable de ventas, sin completar un formulario previo.
5. Como persona con una idea distinta, quiero encontrar una invitación a armar una propuesta a medida y contarla por WhatsApp.

La web informa y facilita la consulta. La cotización, la confirmación de disponibilidad y la reserva se resuelven mediante la conversación comercial.

## 4. Competidores / soluciones existentes

### Documentación del proyecto

- [Estructura acordada del sitio](../documentacion/estructura-web.md).
- [Relevamiento del parador](../documentacion/fuentes/relevamiento-parador.md).
- [Dirección visual investigada](../documentacion/fuentes/direccion-visual.md).
- [Selección audiovisual y faltantes](../documentacion/revision-medios/seleccion-y-faltantes.md).
- [Investigación comercial de referentes](../investigacion/2026-10-30-competidores-el-camello.md).

Instagram es un canal existente de descubrimiento y presentación: [@parador_elcamello](https://www.instagram.com/parador_elcamello/). Según Franco, la actividad, la calidad de los contenidos y algunas piezas dirigidas a públicos concretos son fortalezas actuales. No se asume que las redes carezcan de trabajo profesional o de toda segmentación.

### Antecedente comercial

La investigación del **30 de octubre de 2026** reúne veinte casos de Mendoza y otras provincias. Es un antecedente documental; no se volvió a investigar su vigencia en esta etapa ni se auditaron servicios, cotizaciones o resultados de venta.

| Referente del informe previo | Utilidad como antecedente |
|---|---|
| Kiam Te, Cacheuta | Separación entre eventos, grupos e instalaciones e información práctica del predio. |
| Ruta 60 Extreme, Mendoza | Presentación de ofertas por ocasión y consultas diferenciadas por WhatsApp. |
| Archicampo, Buenos Aires | Comunicación de exclusividad y organización de paquetes para grupos. |
| Tandil Aventura, Buenos Aires | Presentación de programas y propuesta corporativa. |

La inclusión de estos casos no demuestra superioridad, menor precio o exclusividad única de El Camello. Las ideas antiguas sobre otros públicos tampoco amplían las cuatro propuestas aprobadas para el lanzamiento.

### Referencias visuales aportadas por Franco

| Referencia | Interés expresado | Estado |
|---|---|---|
| [Bellevoire](https://bellevoire.framer.website/) | Animaciones y transiciones; presentación textual después de portada; secuencia de imágenes con scroll en «Where Every Day is Designed for You», como posibilidad para instalaciones o actividades. | Inspiración para adaptar; no copiar su posicionamiento premium o gourmet. |
| [CMS Fan Carousel](https://www.framer.com/marketplace/components/cms-fan-carousel/) | Posibilidad de galería con tarjetas superpuestas y profundidad. | Alternativa de presentación, sin compra ni incorporación confirmadas. |
| [Drift Wall](https://reactbits.dev/components/drift-wall) | Posibilidad de mostrar varias fotografías mediante una composición en movimiento. | Alternativa de galería, sin incorporación confirmada. |
| [Accordion Gallery](https://reactbits.dev/components/accordion-gallery) | Posibilidad para presentar propuestas, actividades o instalaciones. | Sección de destino y adaptación todavía abiertas. |
| [Casa Angelina](https://www.casangelina.com/) | Portada audiovisual, movimiento y recorrido mediante scroll. | Referencia principal de portada; efectos específicos abiertos. |

Son referencias de diseño, no competidores equivalentes ni una selección de tecnología. Se consultaron sus páginas y descripciones durante la conversación. No se validaron sus animaciones mediante una prueba interactiva completa ni su funcionamiento móvil. La skill de scraping automático no estaba instalada y no se generaron fichas de scraping individuales.

## 5. Funcionalidades necesarias

### Página principal

1. **Portada audiovisual:** video del lugar sin música, planos tranquilos y texto protagonista.
2. **Presentación:** bloque principalmente textual, inmediatamente después de la portada, que explique el parador y sus fortalezas.
3. **El Parador:** instalaciones y actividades antes de las propuestas. Las habitaciones se muestran aquí; no habrá una sección principal independiente de alojamiento.
4. **Propuestas:** bloques iniciales con imagen, título, descripción breve y acceso a su página específica. El último bloque será siempre «Armá tu propuesta», o una expresión equivalente, dirigido a WhatsApp.
5. **Nosotros:** origen del nombre, historia y experiencia familiar; fotografías identificadas por la dueña.
6. **Ubicación y acceso:** localización e indicaciones prácticas para llegar.
7. **Preguntas frecuentes:** dudas generales con respuestas confirmadas.
8. **Cierre y contacto:** acceso a WhatsApp, también disponible durante la navegación.

El menú permitirá acceder directamente a las propuestas. El recorrido visual no debe obligar a completar una experiencia para poder consultar.

### Cuatro páginas de propuestas

- Eventos para empresas.
- Cumpleaños de adultos.
- Cumpleaños infantiles.
- Encuentros de compañeros de primaria organizados por padres.

Cada página desarrolla su propia experiencia, imágenes, información comercial, incluidos, opcionales, condiciones relevantes, preguntas frecuentes y contacto por WhatsApp. Las páginas específicas complementan los bloques de la principal; no los reemplazan.

«Armá tu propuesta» es una invitación secundaria y el último bloque de propuestas. No agrega una quinta página específica al alcance aprobado.

### Presentación, contacto y SEO

- Experiencia visual llamativa, con transiciones, animaciones y recursos de scroll adaptados a la identidad del parador.
- Diseño y pruebas con prioridad en celular y presentación cuidada en desktop.
- Botones que abren WhatsApp directamente con un mensaje contextual según la propuesta; sin formulario previo ni registro de clics en esta versión.
- Contenido informativo, fotografías y videos seleccionados y optimizados para publicación.
- Preparación SEO, indexación y publicación según el alcance comercial acordado. La implementación técnica se definirá en la siguiente etapa.

Todo el material de portada se grabará nuevamente en horizontal y vertical, con tomas consecutivas de la misma escena para conservar momento y luz. El video se pausará fuera de vista y tendrá una imagen estática de respaldo. No se fija la contracción con scroll ni otro efecto concreto como obligatorio. La presencia de 3D real tampoco es un requisito.

## 6. Funcionalidades opcionales

**Posteriores al lanzamiento, sin contratación actual:**

- Agenda o sistema para consultar días disponibles. No entra en esta versión.
- Analítica de visitas, páginas e interacciones. Franco considera ofrecerla después con un costo de implementación y un servicio de reportes mensuales. No se ha contratado, fijado un precio ni seleccionado una herramienta.

**Fuera del alcance inicial, sin compromiso de incorporarlas:** cuentas de usuario, panel de edición para los dueños, reservas automáticas y pagos online.

Las galerías y efectos mencionados en las referencias son alternativas de diseño de la experiencia aprobada; todavía no constituyen una lista cerrada de componentes a implementar.

## 7. Reglas de negocio

- La comunicación principal se dirige a grupos y eventos de Mendoza. No se presenta una oferta general de ingreso para parejas o familias pequeñas.
- Se destacan exclusividad, personalización, paisaje y variedad de actividades. El relevamiento confirma exclusividad del predio para el grupo; debe comunicarse de forma coherente con las condiciones finales aprobadas.
- Las cuatro propuestas están preparadas conceptualmente. Los extras podrán ampliarse y algunas fotografías deben completarse durante el trabajo.
- Cada propuesta distingue lo incluido de los servicios opcionales. Una imagen de un extra no significa que esté incluido en una reserva.
- Los límites se validan por propuesta y uso. El rango general de diez a treinta y cinco personas del relevamiento no se aplica automáticamente a los cumpleaños; existen excepciones sujetas a consulta.
- El alojamiento nocturno es una posibilidad adicional. Mostrar habitaciones no debe dar a entender que el pernocte está incluido en todas las propuestas.
- La publicación de precios sigue sin decidirse. No se elige por defecto entre precios públicos, importes «desde» o cotización exclusivamente por WhatsApp.
- Franco genera contenidos y la dueña confirma su exactitud antes de publicar. El responsable comercial atiende la consulta y concreta la venta por WhatsApp.
- Las actividades estacionales deben identificarse como tales. La canchita de fútbol figura como futura en el relevamiento; no se publicará como una instalación operativa sin confirmación.
- Los más de quince años mencionados corresponden a la experiencia de la familia, no a una antigüedad confirmada del predio actual.
- La identificación de personas y del tipo de evento en imágenes debe venir del cliente. No se deduce que un grupo sea empresarial o de primaria solo por su apariencia.
- Abrir WhatsApp no equivale a enviar un mensaje ni a concretar una reserva.

## 8. Integraciones

| Conexión | Alcance inicial |
|---|---|
| WhatsApp | Enlaces directos con mensajes contextualizados; conversación y cierre fuera de la web. No bot, API de mensajería ni formulario previo. |
| Instagram | Acceso al perfil del parador y recepción de visitantes desde enlaces compartidos allí. No se requiere un feed automático. |
| Ubicación y acceso | Información para llegar. El mecanismo concreto de mapa o enlace se definirá en diseño e implementación. |
| Buscadores | Preparación SEO e indexación contempladas en el trabajo contratado. Sin promesa de una posición determinada. |

No se incorporan herramientas de analítica por defecto. No se prevé una base de datos para el alcance inicial; el stack y la arquitectura técnica siguen pendientes de definición con Franco.

## 9. Restricciones

- Primera versión únicamente en español, con tono cercano, cálido y familiar.
- Prioridad explícita en que se vea y funcione muy bien en celular. La expectativa de mayoría móvil proviene del canal Instagram; no es una distribución medida.
- Presentación cuidada también en desktop para consultas y ofertas profesionales. Las interacciones táctiles no dependerán exclusivamente de estados de mouse.
- Alto peso de la comprensión de la oferta y de una experiencia visual impactante y novedosa. Las referencias deben adaptarse a la identidad de El Camello.
- Sin una fecha de publicación comprometida. Objetivo expresado el 18 de noviembre de 2026: publicar idealmente dentro de un mes, con un mes y medio como máximo deseado; no es un plazo contractual nuevo.
- Los originales audiovisuales permanecen fuera del repositorio y no se modifican durante su inspección. La selección final para la web requiere exportaciones apropiadas; las miniaturas no son recursos finales.
- La documentación y la fundación se realizan en español, de forma interactiva, sin resolver decisiones abiertas por inferencia.

Las rutas `../fotos/Fotos` y `../tmp` se interpretan **desde la raíz del repositorio `web/`**, no desde la ubicación de este documento. Son recursos externos que deben sincronizarse por separado al trabajar en otro dispositivo. Los enlaces entre documentos de este archivo sí se resuelven desde `discovery/`.

## 10. Riesgos

| Riesgo o supuesto pendiente | Implicación para el trabajo |
|---|---|
| Peso de fotografías, videos y efectos | Seleccionar y optimizar recursos; comprobar carga y fluidez en dispositivos reales durante el desarrollo. |
| Animaciones diseñadas solo para escritorio | Diseñar la interacción táctil desde el principio y adaptar el recorrido a cada formato. |
| Demora de la nueva producción de portada | Preparar el pedido de tomas con tiempo y mantener un respaldo visual mientras se integra el material definitivo. |
| Fotos sin contexto confirmado para algunas propuestas | Identificar primero lo existente con la dueña y pedir únicamente los faltantes necesarios. |
| Efectos que dificulten comprender o contactar | Mantener accesibles las propuestas, la información y WhatsApp durante el recorrido. |
| Condiciones comerciales todavía imprecisas | Confirmar incluidos, extras, capacidades y afirmaciones antes de publicar, aunque el diseño avance mientras tanto. |
| Supuesto de que una presentación más clara aumentará ventas | No hay evidencia actual de fricciones ni una línea de base; no convertir esta expectativa en un resultado garantizado. |
| Interpretar la investigación histórica como vigencia comprobada | Conservar fechas y límites de las fuentes; no usarla para afirmar superioridad o precios actuales. |

La revisión de medios disponible cubre 236 archivos filtrados y aproximadamente 3,50 GiB. Los videos se inspeccionaron mediante muestras de fotogramas, no reproducción íntegra ni evaluación de audio. La selección preliminar permite empezar las composiciones internas, pero no reemplaza las nuevas tomas de portada ni la aprobación del contexto de publicación.

## 11. Preguntas abiertas

### Para la siguiente etapa de fundación

- Seleccionar con Franco el stack, la arquitectura y las herramientas de implementación. No hay un framework decidido por este Discovery.
- Definir cómo se organizarán los contenidos y los recursos finales del sitio, manteniendo los originales fuera del repositorio.

### Durante diseño y desarrollo

- Elegir nombres comerciales, URLs, textos y preguntas frecuentes definitivos.
- Determinar qué galerías, transiciones y recursos de scroll convienen a cada sección y cómo se adaptan a celular y desktop.
- Preparar la lista de tomas y producir los montajes horizontal y vertical de portada y sus imágenes de respaldo.
- Identificar fotografías y eventos existentes con la dueña; completar retratos, contextos de propuestas e instalaciones cuando haga falta.

### Antes de publicar

- Resolver si se mostrarán precios y bajo qué condiciones.
- Confirmar condiciones, horarios, mínimos, máximos, incluidos y extras de cada propuesta.
- Precisar afirmaciones operativas como «personal calificado» o la adecuación de actividades a distintos públicos, sin ampliarlas por suposición.
- Validar contacto, ubicación, indicaciones y datos operativos finales con la dueña.
- Obtener aprobación de los contenidos y de la selección audiovisual final.

Los pendientes de texto o material no impiden empezar el diseño, pero no se publicarán afirmaciones provisionales como si estuvieran confirmadas. La agenda y la analítica permanecen fuera de esta versión y solo se retomarán mediante un alcance posterior acordado.
