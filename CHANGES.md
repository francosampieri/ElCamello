# CHANGES — Secuencia de Implementación

> Índice canónico de los changes de **Parador El Camello**.
> Cada change delimita una unidad de trabajo revisable. Su duración se estimará al proponerlo; este índice no promete sesiones de una cantidad fija de horas ni una fecha contractual.
> **Leer este archivo antes de ejecutar cualquier `/opsx:propose`.**

---

## Cómo usar este documento

Cada change se trabaja en su propia rama `feature/change_x`, usando su número sin cero inicial: C-01 → `feature/change_1`, C-02 → `feature/change_2`. Comprobar rama y cambios existentes antes de escribir artifacts o implementación; no mezclar ni descartar trabajo previo. **Nunca commitear, pushear ni mergear sin pedido o confirmación explícita de Franco.** Ver [las reglas del proyecto](AGENTS.md).

1. Identificar el change y consultar `openspec list --json` y, cuando exista, `openspec status --change "<nombre>" --json`. Comprobar que sus dependencias estén implementadas y verificadas; el CLI es la fuente de estado real. Los checks de este índice describen el plan, no sustituyen al CLI.
2. Leer los archivos y secciones de la KB indicados en «Leer antes». Revisar los pendientes asociados y distinguir decisiones aprobadas de propuestas técnicas.

3. Ejecutar `/opsx:propose <nombre-del-change>`, usando el nombre kebab-case de su ficha. Completar allí especificaciones, decisiones y tareas; resolver con Franco las decisiones materiales todavía abiertas.
4. Implementar mediante `/opsx:apply <nombre-del-change>`, verificar el resultado y archivar mediante `/opsx:archive <nombre-del-change>` cuando corresponda. Las fases siguientes agrupan trabajo; no impiden revisar o modificar artifacts con OPSX.
5. Marcar `[x]` solamente cuando el change esté realmente completado y verificado, manteniendo consistentes el índice y el estado del CLI.

Este roadmap cubre el lanzamiento en español de la principal y cuatro páginas de propuestas. Conserva Astro, TypeScript, CSS estándar, React selectivo, contenido compartido en TypeScript y fotografías seleccionadas dentro del repositorio. Los originales quedan fuera. Agenda, analítica, cuentas, CMS, reservas automáticas y pagos no son dependencias del lanzamiento.

Al 20/11/2026, C-01 a C-06 están archivados y sus requisitos están en las especificaciones principales. C-07 a C-13 siguen pendientes. Consultar el CLI para recuperar el estado vigente.

La dirección visual inicial es parte central del producto y se valida temprano. Los efectos concretos, las tipografías y la distribución de videos se deciden mediante pruebas; no se presupone 3D, contracción de portada, Cloudinary ni una librería. Solo se usan recursos gratuitos. El objetivo expresado de un mes a un mes y medio orienta la priorización, sin convertir este grafo en una estimación temporal.

La gobernanza se aplica al dominio realmente modificado: BAJO permite cambios rutinarios; MEDIO exige checkpoints sobre decisiones no obvias; ALTO requiere revisar el cambio concreto antes de escribir configuraciones que afecten datos, accesos o servicios externos. Una intervención de seguridad sería CRITICA y necesitaría aprobación explícita, aunque no haya un change de seguridad separado en este alcance. No se modifican dotfiles globales por este plan.

Cuando exista un runner y corresponda implementar comportamiento, se aplica el TDD estricto de las instrucciones del proyecto: baseline al modificar código existente y casos significativos de comportamiento antes de producción. El scaffolding se verifica con los comandos reales de tipos/build y no requiere tests vacíos. Las revisiones visuales, editoriales y de medios complementan las pruebas automatizadas.

---

## Árbol de dependencias

El árbol muestra ramas y convergencias. Las fichas de cada change contienen la lista completa y autoritativa de dependencias directas.

```text
C-01 foundation-setup
│
├── C-02 contenido-centralizado
└── C-03 direccion-visual-y-prototipo
    │
    ├── C-04 seleccion-medios-y-plan-de-tomas       (+ C-02)
    └── C-05 estructura-y-navegacion-responsive     (+ C-02)
        │
        ├── C-06 presentacion-y-el-parador         (+ C-04)
        ├── C-07 propuestas-y-paginas-de-detalle   (+ C-04)
        ├── C-08 nosotros-e-informacion-practica   (+ C-04)
        └── C-09 portada-audiovisual-adaptativa    (+ C-04)
            │
            └── C-10 revision-editorial-y-aprobacion-de-medios (+ C-06, C-07, C-08)
                └── C-11 integracion-general-y-seo
                    └── C-12 verificacion-integral-y-ajustes
                        └── C-13 publicacion-y-entrega
```

C-04 y C-05 requieren **C-02 y C-03**. C-06 a C-09 requieren **C-04 y C-05**. C-10 requiere **C-06, C-07, C-08 y C-09**. Los materiales y aprobaciones humanas son condiciones adicionales explícitas dentro del scope, no changes técnicos imaginarios.

### Paralelismo por fase

Los GATES describen disponibilidad de trabajo según dependencias. No son permisos nuevos ni bloqueos rígidos de OPSX. Las asignaciones son sugerencias de colaboración dentro del proyecto, no requieren tres personas, tres proveedores ni chats nuevos.

```text
GATE 0: ninguna
  → C-01 foundation-setup                              [Agente A]

GATE 1: C-01 ✓ — primera apertura de dos ramas
  → C-02 contenido-centralizado                        [Agente A]
  → C-03 direccion-visual-y-prototipo                   [Agente B]

GATE 2: C-02 + C-03 ✓
  → C-04 seleccion-medios-y-plan-de-tomas               [Agente C]
  → C-05 estructura-y-navegacion-responsive             [Agente A]

GATE 3: C-04 + C-05 ✓ — FORK: cuatro ramas independientes
  → C-06 presentacion-y-el-parador                     [Agente B]
  → C-07 propuestas-y-paginas-de-detalle                [Agente A]
  → C-08 nosotros-e-informacion-practica                [Agente C]
  → C-09 portada-audiovisual-adaptativa                 [Agente B cuando quede libre]

GATE 4: C-06 + C-07 + C-08 + C-09 ✓
  → C-10 revision-editorial-y-aprobacion-de-medios       [Agente C + Franco/dueña]

GATE 5: C-10 ✓
  → C-11 integracion-general-y-seo                      [Agente A]

GATE 6: C-11 ✓
  → C-12 verificacion-integral-y-ajustes                 [Agente B]

GATE 7: C-12 ✓
  → C-13 publicacion-y-entrega                          [Agente A + Franco]
```

Hay ocho puntos de sincronización, tres aperturas de paralelismo y un límite sugerido de tres agentes simultáneos. En GATE 3, C-09 puede ocupar el lugar de otra rama si el material ya está listo; esperar un agente libre no constituye una dependencia técnica de C-06.

### Camino crítico (8 changes — mínimo irreducible)

```text
C-01 → C-03 → C-04 → C-09 → C-10 → C-11 → C-12 → C-13
```

Es una cadena de ocho unidades dependientes bajo la comparación estructural de unidades, no un cálculo de duración. Hay cadenas de la misma longitud pasando por C-02, C-05 o C-06 a C-08. **Los trece changes son necesarios para el alcance acordado**: la cadena no permite omitir las ramas que convergen en C-10. No se suman tiempos ficticios; el material de portada y la aprobación de la dueña pueden determinar el plazo real. La programación de tres agentes requiere nueve tandas en el ejemplo siguiente.

### Plan óptimo con 3 agentes

Distribución inicial por responsabilidad, ajustable a tamaños reales y disponibilidad. No se promete que todas las unidades duren lo mismo. Las columnas representan áreas del sitio, no backends inexistentes.

| Paso | Agente A — estructura y contenido | Agente B — experiencia visual y pruebas | Agente C — medios y revisión editorial |
|---|---|---|---|
| 1 | C-01 | — | — |
| 2 | C-02 | C-03 | — |
| 3 | C-05 | — | C-04 |
| 4 | C-07 | C-06 | C-08 |
| 5 | — | C-09 | — |
| 6 | — | — | C-10, con validación humana |
| 7 | C-11 | — | — |
| 8 | — | C-12 | — |
| 9 | C-13, con Franco | — | — |

C-06 a C-09 producen componentes o módulos con ownership separado. C-11 es dueño de la integración final de `src/pages/index.astro`; no se permite que las cuatro ramas editen simultáneamente ese archivo. La atención de pendientes, el pedido temprano de tomas y la revisión parcial de contenidos pueden continuar mientras se desarrolla, sin dar por completado C-10 anticipadamente.

---

## FASE 0 — Cimientos del sitio

### [C-01] `foundation-setup`
- **Estado**: `[x]` implementado, verificado y archivado. Ver [evidencias y excepción TDD aceptada para C-01](openspec/changes/archive/2026-11-19-foundation-setup/verification.md) y [especificación vigente](openspec/specs/sitio-estatico-base/spec.md).
- **Scope**:
  - Crear el proyecto Astro con TypeScript en la raíz del repositorio `web/`, preservando documentación, OpenSpec y recursos externos; no anidar un nuevo repositorio ni mover los originales.
  - Seleccionar versiones compatibles, fijar dependencias y documentar comandos reproducibles de desarrollo, verificación de tipos y build. Preparar CSS estándar; incorporar React únicamente cuando una interacción lo justifique.
  - Establecer carpetas base y una página mínima verificable. Elegir la estrategia de pruebas para comportamientos posteriores, sin crear una suite de aserciones vacías ni instalar dependencias de funciones futuras.
  - Verificar instalación limpia, tipos y generación estática. Mantener credenciales fuera del repositorio; no crear secretos ficticios, backend, base de datos, contenedores ni analítica.
- **Dependencias**: ninguna
- **Governance**: BAJO
- **Leer antes**:
  - [01 — Visión y objetivos](knowledge-base/01_vision_y_objetivos.md) § «Alcance del lanzamiento».
  - [02 — Descripción general](knowledge-base/02_descripcion_general.md) § «Stack tecnológico».
  - [08 — Arquitectura propuesta](knowledge-base/08_arquitectura_propuesta.md) § «Estructura de directorios propuesta».
  - [10 — Preguntas abiertas](knowledge-base/10_preguntas_abiertas.md) § «Preguntas abiertas priorizadas» — PA-11.

---

## FASE 1 — Contratos, dirección visual y preparación

### [C-02] `contenido-centralizado`
- **Estado**: `[x]` implementado, verificado y archivado en `feature/change_2`. Ver [evidencias](openspec/changes/archive/2026-11-20-contenido-centralizado/verification.md).
- **Scope**:
  - Definir los tipos y módulos compartidos para identidad, contacto, cuatro propuestas, instalaciones, actividades, FAQs y referencias a medios, ajustando el modelo editorial propuesto de la KB.
  - Cargar los cuatro registros base con IDs estables; separar incluidos y extras. Mantener condiciones, precios, nombres y slugs todavía no confirmados como pendientes editoriales, no como datos públicos reales. Para componer, usar textos y valores provisionales autorizados y registrados junto con los confirmados, con inventario de reemplazos derivado de la misma fuente.
  - Establecer el contrato de lectura utilizado por previews y detalles para que ambos consuman una única fuente. Referenciar imágenes seleccionadas sin incorporar la biblioteca original ni fijar proveedor de video.
  - Verificar comportamiento de selección/reutilización y referencias: propuesta existente y desconocida, IDs o medios incoherentes cuando corresponda. Usar comprobación de tipos y tests significativos donde haya lógica, no tests por cada texto.
- **Dependencias**: C-01
- **Governance**: MEDIO
- **Leer antes**:
  - [04 — Modelo de datos](knowledge-base/04_modelo_de_datos.md) § «Entidades propuestas» y «Restricciones del contenido».
  - [05 — Reglas de negocio](knowledge-base/05_reglas_de_negocio.md) § «Oferta y público — RN-OF» y «Implementación y excepciones globales — RN-TE».
  - [06 — Funcionalidades](knowledge-base/06_funcionalidades.md) § «US-008 — Actualizar información de forma coherente».
  - [10 — Preguntas abiertas](knowledge-base/10_preguntas_abiertas.md) § «Preguntas abiertas priorizadas» — PA-04 a PA-10.

### [C-03] `direccion-visual-y-prototipo`
- **Estado**: `[x]` archivado, implementado y verificado en `feature/change_3`. Ver [registro de revisión de C-03](openspec/changes/archive/2026-11-20-direccion-visual-y-prototipo/revision-visual.md) e [identidad visual](knowledge-base/11_identidad_visual.md).
- **Scope**:
  - Proponer aplicación de marca, tipografías gratuitas, escala tipográfica, espacios y variables CSS para móvil y desktop; presentar la dirección a Franco y recoger la revisión de identidad indicada por la KB.
  - Construir una muestra acotada de portada/presentación y una interacción de galería o scroll con material representativo provisional. Usar las referencias por sus principios, sin comprar componentes ni copiar un posicionamiento premium.
  - Comparar comportamiento táctil, lectura, navegación directa y fluidez. Seleccionar o descartar efectos y herramientas gratuitas con evidencia del prototipo; no instalar React, una librería o 3D solo por aparecer en una referencia.
  - Acordar dispositivos y criterios técnicos de evaluación; registrar sus resultados y alternativas cuando no pueda ejecutarse video o movimiento. Los umbrales cuantitativos requieren definición, no se consideran aprobados de antemano.
  - Delimitar qué partes del prototipo pasan a componentes definitivos y qué material nuevo exige el encuadre; el prototipo no es una portada final aprobada.
- **Dependencias**: C-01
- **Governance**: MEDIO
- **Leer antes**:
  - [01 — Visión y objetivos](knowledge-base/01_vision_y_objetivos.md) § «Prioridades de calidad».
  - [05 — Reglas de negocio](knowledge-base/05_reglas_de_negocio.md) § «Experiencia y comunicación — RN-UX».
  - [08 — Arquitectura propuesta](knowledge-base/08_arquitectura_propuesta.md) § «Componentes y comportamiento».
  - [09 — Decisiones y supuestos](knowledge-base/09_decisiones_y_supuestos.md) § «DD-01 — Comprensión e impacto visual» y «DD-08 — Recursos gratuitos y portada nueva».
  - [10 — Preguntas abiertas](knowledge-base/10_preguntas_abiertas.md) § «Preguntas abiertas priorizadas» — PA-03, PA-13 y PA-14.

### [C-04] `seleccion-medios-y-plan-de-tomas`
- **Estado**: `[x]` implementado, verificado y archivado en `feature/change_4`. Ver [entrega y evidencia de C-04](openspec/changes/archive/2026-11-20-seleccion-medios-y-plan-de-tomas/verification.md).
- **Scope**:
  - Revisar candidatos existentes a tamaño de uso y reproducir los clips elegidos; confirmar con la dueña identidades y contextos sin atribuir eventos por apariencia o carpetas.
  - Seleccionar e incorporar fotografías preparadas para las composiciones acordadas, registrar contexto y referencias y verificar una salida optimizada de Astro. Mantener originales y archivos de edición fuera del repositorio.
  - Preparar y entregar mediante Franco el pedido de escenas de portada: todas nuevas H/V consecutivas con continuidad de luz/momento, planos tranquilos y texto protagonista. Pedir temprano los faltantes de propuestas y Nosotros.
  - Documentar faltantes por sección, quién los aporta y alternativas internas provisionales. El pedido se prepara al inicio del desarrollo; no se espera a tener todas las páginas terminadas.
  - Definir el procedimiento de exportación y evaluación del primer montaje para C-09; no aprobar todavía Cloudinary, alojamiento de videos ni copias de los 3,50 GiB originales. Verificar dimensiones, orientación, contexto y referencias de las fotos seleccionadas.
- **Dependencias**: C-02, C-03
- **Governance**: MEDIO
- **Leer antes**:
  - [04 — Modelo de datos](knowledge-base/04_modelo_de_datos.md) § «Datos iniciales y base operativa».
  - [05 — Reglas de negocio](knowledge-base/05_reglas_de_negocio.md) § «Medios — RN-ME».
  - [07 — Flujos principales](knowledge-base/07_flujos_principales.md) § «Flujo 5: Preparación de medios y publicación».
  - [10 — Preguntas abiertas](knowledge-base/10_preguntas_abiertas.md) § «Preguntas abiertas priorizadas» — PA-01, PA-02 y PA-07.

### [C-05] `estructura-y-navegacion-responsive`
- **Estado**: `[x]` implementado, verificado y archivado en `feature/change_5`. Ver [verificación de C-05](openspec/changes/archive/2026-11-20-estructura-y-navegacion-responsive/verification.md).
- **Scope**:
  - Implementar layout, variables CSS acordadas, navegación móvil/desktop, footer y estructura compartida de página, con ownership claro para futuras ramas.
  - Crear enlaces de contacto reutilizables desde los datos controlados: mensaje por propuesta, contacto general y «Armá tu propuesta». Validar codificación con acentos/caracteres especiales y evitar que el contacto general herede una propuesta incorrecta.
  - Resolver interacción de menú, foco, controles táctiles y salida hacia contenido sin completar animaciones. Usar Astro/scripts o React según necesidad demostrada.
  - Cubrir estados de navegación y generación de enlaces con casos normales y alternativos; comprobar que no haya formulario, seguimiento de clics ni falsa confirmación de reserva. Usar datos provisionales solo en revisión interna hasta PA-08.
- **Dependencias**: C-02, C-03
- **Governance**: MEDIO
- **Leer antes**:
  - [03 — Actores y roles](knowledge-base/03_actores_y_roles.md) § «Rutas públicas».
  - [05 — Reglas de negocio](knowledge-base/05_reglas_de_negocio.md) § «Consulta comercial — RN-CO».
  - [06 — Funcionalidades](knowledge-base/06_funcionalidades.md) § «US-005 — Continuar por WhatsApp».
  - [08 — Arquitectura propuesta](knowledge-base/08_arquitectura_propuesta.md) § «Componentes y comportamiento» y «Seguridad y datos».

---

## FASE 2 — Experiencia y páginas del lanzamiento

### [C-06] `presentacion-y-el-parador`
- **Estado**: `[x]` implementado, verificado y archivado. Ver [evidencia de C-06](openspec/changes/archive/2026-11-20-presentacion-y-el-parador/verification.md).
- **Scope**:
  - Construir los componentes de presentación textual y El Parador: fortalezas, instalaciones y actividades, con estructura de contenido centralizada. Mantener la presentación después de portada y El Parador antes de propuestas.
  - Implementar la galería o recurso de scroll seleccionado en C-03 con fotografías optimizadas, rótulos y alternativas táctiles. Mantener información y contacto accesibles si el efecto no puede ejecutarse.
  - Mostrar habitaciones dentro de instalaciones y tratar el pernocte como posibilidad adicional. Identificar estacionalidad y excluir afirmaciones pendientes sobre fútbol, aptitud universal o personal.
  - Verificar la identificación de espacios, lectura y navegación en móvil/desktop y los estados de la interacción elegida. Entregar componentes aislados; la composición definitiva de la principal queda para C-11.
- **Dependencias**: C-04, C-05
- **Governance**: MEDIO
- **Leer antes**:
  - [01 — Visión y objetivos](knowledge-base/01_vision_y_objetivos.md) § «Alcance del lanzamiento».
  - [04 — Modelo de datos](knowledge-base/04_modelo_de_datos.md) § «Entidades propuestas».
  - [05 — Reglas de negocio](knowledge-base/05_reglas_de_negocio.md) § «Publicación y veracidad — RN-PU».
  - [06 — Funcionalidades](knowledge-base/06_funcionalidades.md) § «US-002 — Comprender el lugar y sus posibilidades».

### [C-07] `propuestas-y-paginas-de-detalle`
- **Estado**: `[ ]` pendiente
- **Scope**:
  - Implementar los cuatro previews y una estructura reutilizable de detalle que produzca las páginas de empresas, cumpleaños adultos, infantiles y encuentros de primaria organizados por padres.
  - Reutilizar registros TypeScript para resumen, descripción, incluidos, opcionales, condiciones, medios y FAQs de cada página. Preparar entradas directas comprensibles sin pasar por la principal.
  - Mantener adultos e infantiles separados y «Armá tu propuesta» como último bloque con WhatsApp, sin quinta página. Configurar nombres y slugs confirmados durante el trabajo; conservar los restantes pendientes para C-10.
  - Verificar las cuatro rutas, coherencia preview/detalle y correspondencia del mensaje de WhatsApp. Contemplar una propuesta/ruta desconocida y una salida útil, sin publicar datos ficticios para completar una ficha.
  - Entregar previews como componentes, sin disputar la composición de `index.astro`; ajustar las diferencias editoriales y visuales de cada oferta dentro del contrato común.
- **Dependencias**: C-04, C-05
- **Governance**: MEDIO
- **Leer antes**:
  - [03 — Actores y roles](knowledge-base/03_actores_y_roles.md) § «Rutas públicas».
  - [04 — Modelo de datos](knowledge-base/04_modelo_de_datos.md) § «Restricciones del contenido».
  - [05 — Reglas de negocio](knowledge-base/05_reglas_de_negocio.md) § «Oferta y público — RN-OF».
  - [06 — Funcionalidades](knowledge-base/06_funcionalidades.md) § «US-003 — Explorar propuestas desde la principal» y «US-004 — Consultar el detalle de una propuesta».

### [C-08] `nosotros-e-informacion-practica`
- **Estado**: `[ ]` pendiente
- **Scope**:
  - Construir Nosotros con el origen del nombre, experiencia familiar y retratos identificados; redactar borradores para revisión sin convertir quince años de experiencia en antigüedad del predio.
  - Implementar ubicación/acceso, FAQs generales, acceso a Instagram y contenido de cierre usando los módulos compartidos y el contacto de C-05.
  - Resolver con Franco el mecanismo de mapa/enlace y preparar dirección e indicaciones confirmables. Registrar textos o fotos que todavía requieren a la dueña, sin inventar datos.
  - Verificar lectura, controles de FAQ y enlaces en móvil/desktop; revisar coherencia con respuestas de propuestas. Entregar secciones independientes para integración posterior.
- **Dependencias**: C-04, C-05
- **Governance**: BAJO
- **Leer antes**:
  - [03 — Actores y roles](knowledge-base/03_actores_y_roles.md) § «Aprobación editorial».
  - [05 — Reglas de negocio](knowledge-base/05_reglas_de_negocio.md) § «Publicación y veracidad — RN-PU».
  - [06 — Funcionalidades](knowledge-base/06_funcionalidades.md) § «US-006 — Conocer al equipo y resolver información práctica».
  - [10 — Preguntas abiertas](knowledge-base/10_preguntas_abiertas.md) § «Preguntas abiertas priorizadas» — PA-07 a PA-10.

### [C-09] `portada-audiovisual-adaptativa`
- **Estado**: `[ ]` pendiente
- **Scope**:
  - Obtener y revisar las tomas nuevas H/V del pedido de C-04; preparar ambos montajes y respaldos coherentes con su encuadre. Esta entrada externa es necesaria para completar la portada, aunque pueda probarse con material provisional.
  - Medir primeras exportaciones: tamaño, resolución, calidad, reproducción y carga en los dispositivos acordados. Comparar distribución junto al sitio y un servicio gratuito si aporta valor; registrar la elección con Franco y sus cuotas, sin asumir uso ilimitado.
  - Integrar solo la versión apropiada al dispositivo, texto protagonista, montaje sin música, respaldo mientras carga o falla y pausa fuera de vista. Evitar descargar innecesariamente ambos videos.
  - Implementar la transición de salida seleccionada y alternativas cuando video o movimiento no se ejecuten. Verificar reproducción normal, fallo/restricción de reproducción y entrada/salida del viewport con pruebas significativas y dispositivos reales.
  - Mantener originales y edición fuera del repositorio; incorporar únicamente lo acordado tras decidir la distribución. No adoptar una tecnología 3D o una librería sin la prueba y decisión correspondientes.
- **Dependencias**: C-04, C-05
- **Governance**: MEDIO
- **Leer antes**:
  - [05 — Reglas de negocio](knowledge-base/05_reglas_de_negocio.md) § «Medios — RN-ME».
  - [06 — Funcionalidades](knowledge-base/06_funcionalidades.md) § «US-001 — Portada audiovisual».
  - [08 — Arquitectura propuesta](knowledge-base/08_arquitectura_propuesta.md) § «Tratamiento de medios».
  - [10 — Preguntas abiertas](knowledge-base/10_preguntas_abiertas.md) § «Preguntas abiertas priorizadas» — PA-01, PA-02 y PA-14.

---

## FASE 3 — Consolidación, aprobación y calidad

### [C-10] `revision-editorial-y-aprobacion-de-medios`
- **Estado**: `[ ]` pendiente
- **Scope**:
  - Preparar con Franco un paquete de revisión de los contenidos y medios de las cinco páginas y obtener la confirmación de la dueña sobre textos, servicios, personas y contexto de las imágenes. Puede revisarse mediante vistas de componentes y fichas antes de integrar la principal; un agente no sustituye esa aprobación humana.
  - Cerrar nombres/slugs, incluidos, extras, condiciones por propuesta, estacionalidad, historia, WhatsApp, ubicación y acceso. Resolver expresamente si se publican precios y bajo qué condiciones, sin imponer una respuesta.
  - Comprobar la fidelidad entre principal y detalles, la distinción pernocte/opcionales y la ausencia de afirmaciones provisionales publicables. Actualizar datos centrales y dejar trazabilidad de correcciones/aprobación.
  - Separar cualquier solicitud nueva fuera de alcance del lanzamiento; no incorporar agenda o analítica. Verificar que los medios finales y sus contextos coincidan con la revisión.
  - Cerrar los pendientes que bloquean publicación; otros pueden permanecer documentados con motivo. Se puede revisar parcialmente antes, pero el change no se completa con páginas o material final sin validar.
- **Dependencias**: C-06, C-07, C-08, C-09
- **Governance**: MEDIO
- **Leer antes**:
  - [03 — Actores y roles](knowledge-base/03_actores_y_roles.md) § «Aprobación editorial».
  - [05 — Reglas de negocio](knowledge-base/05_reglas_de_negocio.md) § «Oferta y público — RN-OF» y «Publicación y veracidad — RN-PU».
  - [07 — Flujos principales](knowledge-base/07_flujos_principales.md) § «Flujo 4: Producción y aprobación de contenido».
  - [10 — Preguntas abiertas](knowledge-base/10_preguntas_abiertas.md) § «Preguntas abiertas priorizadas».

### [C-11] `integracion-general-y-seo`
- **Estado**: `[ ]` pendiente
- **Scope**:
  - Integrar los componentes de la principal en su orden acordado y ajustar continuidad entre secciones, transiciones, navegación y las cuatro páginas de detalle. Centralizar aquí los cambios de composición de `src/pages/index.astro`.
  - Preparar títulos, descripciones, imágenes de presentación y URLs canónicas con datos aprobados; confirmar el dominio de PA-12 antes de generar el sitemap y configurar las indicaciones de indexación del entorno real.
  - Verificar contenido útil en HTML, enlaces entre páginas/anclas y una salida para rutas inexistentes. Mantener correcto el acceso directo a cada propuesta y la reutilización de información.
  - Comprobar que imágenes y videos sigan sus estrategias aprobadas y que el sitio no incorpore scripts de medición, feeds, formularios o servicios no acordados.
  - Registrar cómo se comprobará indexación después de publicar, sin prometer ranking ni añadir un servicio de analítica. Cubrir rutas, metadatos y enlaces con verificaciones pertinentes.
- **Dependencias**: C-10
- **Governance**: MEDIO
- **Leer antes**:
  - [01 — Visión y objetivos](knowledge-base/01_vision_y_objetivos.md) § «Alcance del lanzamiento».
  - [06 — Funcionalidades](knowledge-base/06_funcionalidades.md) § «US-007 — Disponer de páginas públicas preparadas para buscadores».
  - [07 — Flujos principales](knowledge-base/07_flujos_principales.md) § «Flujo 2: Entrada directa a una propuesta».
  - [08 — Arquitectura propuesta](knowledge-base/08_arquitectura_propuesta.md) § «Componentes y comportamiento» y «Despliegue y mantenimiento».

### [C-12] `verificacion-integral-y-ajustes`
- **Estado**: `[ ]` pendiente
- **Scope**:
  - Ejecutar recorridos completos desde principal y enlaces directos en los dispositivos acordados: propuesta, información, contacto general/contextual y navegación de retorno. Comprobar enlaces de WhatsApp reales en móvil y desktop.
  - Revisar carga inicial, encuadres, legibilidad, estabilidad, interacción táctil, foco, scroll y fluidez con medios finales; corregir causas concretas y registrar resultados respecto de los criterios definidos en C-03.
  - Probar alternativas ante video/imagen fallidos y movimiento no disponible, pausa fuera de vista y selección de una sola variante de video. Confirmar que no sea obligatorio completar el recorrido animado para consultar.
  - Ejecutar tipos, build y pruebas relevantes. Si se corrige comportamiento existente, capturar baseline y aplicar el ciclo TDD correspondiente; una corrección puramente editorial no exige un test que repita el texto.
  - Revalidar páginas afectadas por correcciones y la aprobación editorial cuando cambie un hecho o medio. Presentar el sitio integrado a Franco y la dueña y cerrar observaciones antes de publicar; preparar el candidato con pendientes bloqueantes resueltos, sin imponer puntuaciones técnicas inventadas.
- **Dependencias**: C-11
- **Governance**: MEDIO
- **Leer antes**:
  - [01 — Visión y objetivos](knowledge-base/01_vision_y_objetivos.md) § «Evaluación del resultado».
  - [05 — Reglas de negocio](knowledge-base/05_reglas_de_negocio.md) § «Experiencia y comunicación — RN-UX».
  - [06 — Funcionalidades](knowledge-base/06_funcionalidades.md) § «Épica 4: Publicar y mantener».
  - [08 — Arquitectura propuesta](knowledge-base/08_arquitectura_propuesta.md) § «Tratamiento de medios».
  - [10 — Preguntas abiertas](knowledge-base/10_preguntas_abiertas.md) § «Preguntas abiertas priorizadas» — PA-14.

---

## FASE 4 — Publicación y entrega

### [C-13] `publicacion-y-entrega`
- **Estado**: `[ ]` pendiente
- **Scope**:
  - Verificar dominio, accesos, configuración y condiciones vigentes del alojamiento previsto. Preparar el cambio concreto de publicación y su revisión antes de modificar DNS, accesos o configuración externa, conforme a la autorización y gobernanza aplicables.
  - Publicar el candidato validado, configurar dominio y HTTPS mediante el proveedor y comprobar las cinco páginas públicas, recursos y contacto. No comprar dominio ni contratar servicios por iniciativa del agente; el cliente gestiona su dominio.
  - Comprobar URLs canónicas, sitemap y acceso de buscadores en producción; realizar la preparación/solicitud de indexación contemplada usando accesos autorizados. No instalar analítica ni garantizar que Google indexe inmediatamente.
  - Registrar configuración, comandos, ubicación de medios, responsables y procedimiento para preparar, revisar y publicar cambios; mantener credenciales privadas fuera de la documentación versionada.
  - Entregar a Franco y la dueña el recorrido final y confirmar el inicio operativo del sitio. Conservar un procedimiento de reversión del despliegue acordado con el proveedor, sin mover o borrar datos ajenos ni originales.
- **Dependencias**: C-12
- **Governance**: ALTO
- **Leer antes**:
  - [02 — Descripción general](knowledge-base/02_descripcion_general.md) § «Integraciones externas».
  - [07 — Flujos principales](knowledge-base/07_flujos_principales.md) § «Flujo 5: Preparación de medios y publicación».
  - [08 — Arquitectura propuesta](knowledge-base/08_arquitectura_propuesta.md) § «Despliegue y mantenimiento» y «Seguridad y datos».
  - [10 — Preguntas abiertas](knowledge-base/10_preguntas_abiertas.md) § «Preguntas abiertas priorizadas» — PA-12.
