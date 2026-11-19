# Preguntas abiertas

Este registro separa lo que falta decidir de lo ya aprobado. Un pendiente de contenido puede permitir avanzar en una composición interna, pero debe resolverse antes de publicar su afirmación. Astro, TypeScript, React selectivo, CSS estándar, contenido TypeScript y fotografías seleccionadas en el repositorio ya están cerrados.

## Inconsistencias detectadas

### IN-01 — Stack abierto en antecedentes

**Documento A dice:** [Discovery](../discovery/discovery.md) y [estructura](../documentacion/estructura-web.md) conservan el stack como pendiente en su fecha de redacción.
**Documento B dice:** las confirmaciones posteriores recogidas en [09](09_decisiones_y_supuestos.md) aprueban el stack y la organización básica de contenido y fotografías.
**Impacto:** un lector podría reabrir decisiones cerradas.
**Resolución:** esta KB consolida las confirmaciones posteriores. Los antecedentes históricos no se reescriben; el README raíz fue actualizado para enlazar Discovery/KB y reflejar el stack aprobado.

### IN-02 — Capacidad general frente a usos concretos

**Documento A dice:** el relevamiento orienta a 10–35 personas y contempla mayores a consulta.
**Documento B dice:** ese mismo documento refiere parrillas hasta 30, mesas/sillas para 30–40 y límites de cumpleaños a conversar.
**Impacto:** publicar una capacidad universal podría prometer recursos distintos de los disponibles para cada uso.
**Resolución propuesta:** confirmar con la dueña cifras y condiciones por propuesta y espacio; no elegir una cifra general por inferencia.

### IN-03 — Alcance visual y públicos de fuentes antiguas

**Documento A dice:** las investigaciones históricas contienen otras audiencias, opciones visuales y dudas anteriores.
**Documento B dice:** el Discovery confirmado fija cuatro propuestas y las decisiones posteriores fijan parte de la arquitectura.
**Impacto:** incorporar propuestas o componentes no acordados.
**Resolución:** usar los antecedentes como inspiración, respetando las decisiones consolidadas. La contracción de portada, 3D real y componentes de referencias siguen abiertos, no obligatorios.

## Preguntas abiertas priorizadas

| ID | Prioridad | Pregunta o tarea | Qué bloquea / cuándo resolver | Decisor o responsable |
|---|---|---|---|---|
| PA-01 | Alta | Definir escenas y producir todas las tomas nuevas H/V de portada y respaldos. | Portada final; pedir material temprano, no bloquea primeras composiciones. | Franco define pedido; dueña coordina material. |
| PA-02 | Alta | Elegir distribución de videos tras medir exportaciones, calidad, cuotas y carga móvil. | Integración audiovisual definitiva. | Franco, con condiciones del servicio verificadas. |
| PA-03 | Alta | Probar y elegir galerías, transiciones y recorrido de scroll por sección. | Diseño interactivo final; resolver con prototipos y material real. | Franco. |
| PA-04 | Alta | Confirmar nombres comerciales y slugs públicos de las cuatro propuestas. | Rutas, navegación y metadatos definitivos. | Franco propone; dueña confirma. |
| PA-05 | Alta | Precisar incluidos, extras, horarios, capacidades y condiciones por propuesta. | Publicación de información comercial; puede llegar durante desarrollo. | Dueña valida, con apoyo comercial. |
| PA-06 | Alta | Decidir si se publican precios y bajo qué condiciones. | Presentación comercial final de propuestas. | Dueña y responsables comerciales; Franco lo implementa. |
| PA-07 | Alta | Identificar personas y eventos de fotos y completar faltantes de propuestas/Nosotros. | Selección audiovisual y afirmaciones de contexto. | Dueña identifica y aprueba; Franco selecciona. |
| PA-08 | Alta | Validar número de WhatsApp, mensajes, dirección e indicaciones y mecanismo de mapa. | Contacto y ubicación antes de publicar. | Dueña y responsable comercial; Franco verifica enlaces. |
| PA-09 | Media | Afinar texto de presentación, historia y preguntas frecuentes. | Revisión editorial final. | Franco redacta; dueña confirma. |
| PA-10 | Media | Precisar personal calificado, condiciones de actividades y estacionalidad. | Publicación de esas afirmaciones; no extrapolar aptitud universal. | Dueña. |
| PA-12 | Media | Definir dominio final, accesos y configuración de alojamiento y publicación. | Despliegue e indexación; verificar límites y condiciones vigentes. | Cliente gestiona dominio; Franco configura lo acordado. |
| PA-13 | Media | Definir tipografías, aplicación de marca y adaptaciones móviles de las referencias. | Diseño visual final; siempre recursos gratuitos. | Franco, con revisión de la dueña. |
| PA-14 | Media | Acordar dispositivos de prueba y criterios técnicos concretos de carga/fluidez. | Verificación de calidad antes de publicar. | Franco. |

## Resoluciones registradas

### PA-11 — Versiones y comandos de la base

Resuelto en C-01 con aprobación de Franco y verificaciones reales: Astro `7.4.13`, TypeScript `6.0.3`, `@astrojs/check` `0.9.12`, sobre Node `24.19.0` y npm `11.17.0`. Las versiones directas y scripts están en [package.json](../package.json), con árbol fijado en [package-lock.json](../package-lock.json).

Comandos disponibles: `npm ci`, `npm run dev`, `npm run check`, `npm run build`, `npm run preview`, `npm test` y `npm run verify`. La instalación limpia y el flujo de tipos, build y dos smokes HTTP pasaron; ver [README](../README.md) y [evidencia de C-01](../openspec/changes/archive/2026-11-19-foundation-setup/verification.md). Esta resolución solo cubre el scaffolding y no cierra decisiones de contenido, medios, diseño ni publicación.

## Datos desconocidos que no bloquean la base

No hay estimación de visitas ni línea de base de consultas, abandonos o conversión. Se registran como desconocidos; no se sustituyen por cifras o diagnósticos supuestos. El objetivo de publicación es aproximadamente un mes, máximo deseado un mes y medio desde el 18 de noviembre de 2026, sin fecha comprometida.

## Evolución posterior, fuera del lanzamiento

- **Agenda:** posible consulta de días disponibles; comportamiento y operación por definir si se solicita.
- **Analítica y reportes:** posible implementación paga y reportes mensuales posteriores; sin herramienta, precio ni contratación actual.
- **Cuentas, CMS, reservas y pagos:** fuera de alcance, sin compromiso de incorporarlos.

No es necesario resolver estos puntos futuros para publicar el sitio acordado. Tampoco justifican instalar servicios, dependencias o seguimiento ahora.
