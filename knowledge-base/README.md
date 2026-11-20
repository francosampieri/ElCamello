# Parador El Camello — Base de conocimiento

Base de conocimiento construida de forma interactiva con Franco Sampieri. Recoge el Discovery aprobado y las decisiones técnicas posteriores. C-01 implementó la base técnica mínima y C-02, el catálogo editorial compartido. Las páginas y sus funciones comerciales se trabajarán en los changes siguientes.

## Índice de archivos

| Archivo | Contenido |
|---|---|
| [01 — Visión y objetivos](01_vision_y_objetivos.md) | Propósito, prioridades, alcance y evaluación del resultado. |
| [02 — Descripción general](02_descripcion_general.md) | Stack aprobado, funcionamiento y conexiones externas. |
| [03 — Actores y roles](03_actores_y_roles.md) | Públicos, responsabilidades editoriales y acceso público. |
| [04 — Modelo de datos](04_modelo_de_datos.md) | Modelo propuesto para contenidos TypeScript y referencias a medios. |
| [05 — Reglas de negocio](05_reglas_de_negocio.md) | Reglas comerciales, editoriales y de experiencia con identificadores. |
| [06 — Funcionalidades](06_funcionalidades.md) | Historias de usuario y criterios de aceptación del lanzamiento. |
| [07 — Flujos principales](07_flujos_principales.md) | Recorridos del visitante y actualización/publicación de contenido. |
| [08 — Arquitectura propuesta](08_arquitectura_propuesta.md) | Componentes, carpetas, estilos, medios y despliegue. |
| [09 — Decisiones y supuestos](09_decisiones_y_supuestos.md) | Decisiones aprobadas, alternativas y supuestos pendientes de validar. |
| [10 — Preguntas abiertas](10_preguntas_abiertas.md) | Pendientes priorizados, responsables y momento de resolución. |

## Lectura rápida para desarrolladores

1. Entender propósito y público: [01](01_vision_y_objetivos.md) y [03](03_actores_y_roles.md).
2. Entender las decisiones técnicas: [02](02_descripcion_general.md), [08](08_arquitectura_propuesta.md) y [09](09_decisiones_y_supuestos.md).
3. Entender contenido y condiciones: [04](04_modelo_de_datos.md) y [05](05_reglas_de_negocio.md).
4. Preparar implementación: [06](06_funcionalidades.md) y [07](07_flujos_principales.md).
5. Revisar lo todavía abierto antes de construir o publicar: [10](10_preguntas_abiertas.md).

## Resumen ejecutivo

La web ayudará a comprender y desear las experiencias para grupos de El Camello mediante una presentación visual impactante, con prioridad móvil y una presentación cuidada en desktop. Tendrá una principal y cuatro páginas de propuestas; la consulta y el cierre comercial continuarán por WhatsApp.

El stack aprobado es Astro con TypeScript, CSS estándar y React cuando haga falta. Los contenidos se centralizarán en archivos TypeScript y las fotografías seleccionadas para la web se versionarán en el repositorio. La distribución de videos y los efectos concretos siguen abiertos.

## Estado de las definiciones

- **Aprobado:** decisiones expresamente confirmadas durante la conversación y alcance del [Discovery](../discovery/discovery.md).
- **Propuesta técnica:** organización o representación recomendada en esta KB, revisable al implementar sin alterar el alcance.
- **Pendiente:** requiere una decisión o validación identificada en [10](10_preguntas_abiertas.md). No equivale a un servicio confirmado ni a un dato publicable.
- **Base verificada en C-01:** versiones directas fijadas, instalación reproducible, tipos, build y dos smokes HTTP; ver [02](02_descripcion_general.md), [08](08_arquitectura_propuesta.md) y la resolución PA-11 en [10](10_preguntas_abiertas.md). Esto no acredita todavía el diseño visual ni las funcionalidades comerciales.
- No hay una estimación de visitas ni presupuestos cuantitativos de rendimiento acordados.

## Fuentes y precedencia

Las confirmaciones técnicas posteriores al Discovery están recogidas en [09](09_decisiones_y_supuestos.md) y prevalecen sobre los puntos que aquel documento dejó abiertos. El Discovery aprobado prevalece sobre alternativas anteriores de los documentos fuente. Las fuentes se conservan como antecedentes, sin reescribir su historia.

- [Discovery aprobado](../discovery/discovery.md).
- [Estructura del sitio](../documentacion/estructura-web.md).
- [Relevamiento del parador](../documentacion/fuentes/relevamiento-parador.md).
- [Dirección visual investigada](../documentacion/fuentes/direccion-visual.md).
- [Selección audiovisual y faltantes](../documentacion/revision-medios/seleccion-y-faltantes.md).
- [Investigación comercial histórica](../investigacion/2026-10-30-competidores-el-camello.md).

La carpeta contenedora es `ElCamello/`; `web/` es el repositorio. Las rutas externas `../fotos/Fotos` y `../tmp` se interpretan desde la raíz `web/`, no desde esta carpeta. Los originales y los archivos de edición permanecen fuera del repositorio; únicamente las fotografías seleccionadas y preparadas para publicación están aprobadas para incorporarse a él.
