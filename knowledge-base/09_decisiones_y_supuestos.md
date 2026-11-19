# Decisiones y supuestos

Las decisiones siguientes fueron confirmadas por Franco en la conversación de fundación. Las confirmaciones técnicas posteriores al [Discovery](../discovery/discovery.md) resuelven sus puntos abiertos sin modificar ese antecedente. La estructura de archivos y los campos de contenido de [04](04_modelo_de_datos.md) y [08](08_arquitectura_propuesta.md) son propuestas técnicas revisables.

## Decisiones documentadas

### DD-01 — Comprensión e impacto visual

**Decisión:** priorizar que el interesado entienda y desee la experiencia mediante una presentación impactante y novedosa, con prioridad móvil y desktop cuidado.
**Contexto:** la web será una herramienta comercial e informativa para grupos.
**Alternativas consideradas:** énfasis principal en ventas, soporte comercial, búsquedas o imagen.
**Justificación:** todos aportan valor, pero Franco confirmó el mayor peso de comprensión e impacto.
**Trade-offs aceptados:** se dedicará trabajo a diseño y medios; los efectos concretos requieren pruebas y no prometen resultados comerciales.

### DD-02 — Cuatro propuestas y consulta personalizada

**Decisión:** empresas, cumpleaños adultos, infantiles y primaria organizada por padres, con páginas propias y previews en la principal. «Armá tu propuesta» es el último bloque y abre WhatsApp sin quinta página.
**Contexto:** es necesario presentar experiencias reconocibles conservando personalización.
**Alternativas consideradas:** concentrar el detalle en la principal o separar propuestas.
**Justificación:** las páginas permiten información y fotografías específicas y se pueden compartir directamente.
**Trade-offs aceptados:** más contenido editorial que mantener; no se amplía el catálogo a otros públicos históricos.

### DD-03 — WhatsApp directo y alcance acotado

**Decisión:** mensajes contextuales sin formulario previo; la venta queda fuera de la web. Agenda y analítica después; sin cuentas, CMS, reservas o pagos online.
**Contexto:** el padre de Franco realiza atención y cierre personalizados.
**Alternativas consideradas:** pedir fecha y cantidad antes del contacto; medir desde lanzamiento.
**Justificación:** simplificar el paso a consulta y posponer medición como posible servicio de implementación y reportes, no contratado.
**Trade-offs aceptados:** el sitio no conoce conversaciones, disponibilidad ni reservas y no ofrece estadísticas de comportamiento en esta versión.

### DD-04 — Astro, TypeScript y React selectivo

**Decisión:** Astro con TypeScript; React cuando sea necesario.
**Contexto:** sitio de contenido y experiencias visuales sin backend de gestión inicial; Franco aprenderá estas herramientas con el proyecto.
**Alternativas consideradas:** React como base con otras herramientas o Next.js.
**Justificación:** generar contenido preparado y añadir comportamiento por componentes encaja con el alcance.
**Trade-offs aceptados:** aprender Astro y los conceptos de React usados; no incorporar React por defecto en todas las secciones. C-01 fijó y verificó las versiones de la base, registradas en [02](02_descripcion_general.md); React sigue sujeto a una necesidad concreta y aprobación antes de incorporarlo.

### DD-05 — CSS estándar

**Decisión:** CSS estándar, con estilos por componente y variables compartidas.
**Contexto:** Franco conoce CSS básico y estaba abierto a Tailwind si ofrecía una ventaja significativa.
**Alternativas consideradas:** Tailwind y CSS propio.
**Justificación:** Astro permite encapsular estilos y el sitio tendrá composiciones a medida. CSS permite toda la ambición visual prevista.
**Trade-offs aceptados:** organizar convenciones y estilos propios; no se obtiene la sintaxis de utilidades de Tailwind. La decisión no limita animaciones o librerías futuras compatibles.

### DD-06 — Contenido centralizado en TypeScript

**Decisión:** mantener los datos compartidos en archivos TypeScript utilizados por principal y páginas específicas.
**Contexto:** las propuestas aparecen en varios lugares y serán modificadas por Franco.
**Alternativas consideradas:** contenido repartido en componentes; un CMS no forma parte del alcance.
**Justificación:** evitar contradicciones y facilitar cambios con tipos y referencias compartidas.
**Trade-offs aceptados:** los cambios pasan por archivos y nueva publicación; la dueña valida mediante el flujo editorial externo.

### DD-07 — Fotografías en el repositorio; videos pendientes

**Decisión:** incorporar al repositorio solo las fotografías seleccionadas y preparadas para web, usando la optimización de Astro. Mantener originales fuera. Evaluar la distribución de videos al contar con primeras exportaciones.
**Contexto:** la selección audiovisual fuente pesa aproximadamente 3,50 GiB y tiene gran presencia de videos.
**Alternativas consideradas:** archivos junto al sitio y Cloudinary.
**Justificación:** el catálogo fotográfico editado por Franco puede distribuirse con el sitio; los videos requieren medir tamaño y rendimiento antes de elegir.
**Trade-offs aceptados:** el repositorio crece con fotografías e historial y se vuelve a publicar al cambiarlas. No se aprobó Cloudinary ni el versionado de videos.

### DD-08 — Recursos gratuitos y portada nueva

**Decisión:** nunca comprar recursos. Todas las tomas de portada se grabarán nuevamente en horizontal y vertical, sin música, con escenas tranquilas y continuidad de luz y momento.
**Contexto:** las referencias sirven de inspiración, aunque algunas sean productos comerciales; el material existente no sustituirá esa producción.
**Alternativas consideradas:** reutilizar verticales, recortar un solo montaje o comprar componentes.
**Justificación:** conservar encuadres adecuados y coherencia audiovisual dentro del criterio gratuito aprobado.
**Trade-offs aceptados:** hay trabajo de producción y adaptación; ninguna referencia comercial implica compra ni copia íntegra. El video mantiene pausa fuera de vista y respaldo estático.

## Supuestos inferidos y límites de evidencia

### SU-01 — Predominio de visitantes móviles

**Supuesto:** la mayor parte llegará desde celulares por Instagram. **Origen:** expectativa explícita de Franco, sin medición actual. **Riesgo si es falso:** no justifica descuidar desktop. **Cómo validar:** comprobar ambos formatos; una eventual medición posterior podrá aportar distribución real. La prioridad móvil ya es una decisión aprobada.

### SU-02 — Mejor comprensión favorecerá la consulta

**Supuesto:** presentar propuestas e información de forma más clara e impactante ayudará a interesados a avanzar. **Origen:** objetivo comercial, sin datos de fricciones o conversión. **Riesgo si es falso:** confundir una expectativa con una garantía de ventas. **Cómo validar:** observar consultas con el responsable comercial y, si se contrata después, medir comportamiento sin equiparar clic con reserva.

### SU-03 — Parte del material existente cubrirá las propuestas

**Supuesto:** fotografías y fotogramas disponibles servirán para algunas composiciones. **Origen:** revisión preliminar de medios. **Riesgo si es falso:** pedir escenas nuevas tarde o atribuir contextos equivocados. **Cómo validar:** revisar originales a tamaño final, reproducir clips y confirmar eventos con la dueña antes de publicar.

La selección de animaciones, proveedor de video, nombres comerciales, precios y condiciones pendientes no se trata como supuesto aprobado; está registrada en [10](10_preguntas_abiertas.md).
