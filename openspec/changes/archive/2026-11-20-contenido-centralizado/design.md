# Design

## Context

Ver [la motivación](proposal.md) y [el contrato de contenido](specs/contenido-compartido/spec.md). C-01 dejó una aplicación Astro estática, TypeScript estricto y dos pruebas HTTP con Node; no existen módulos de datos, catálogos ni fotografías finales dentro de `src/`.

El 20/11/2026 Franco eligió explícitamente completar lo desconocido con textos y valores inventados para desarrollo y registrar qué hay que cambiar. Las restricciones anteriores sobre publicar datos no confirmados siguen distinguiendo hechos de ejemplos; no impiden esta composición provisional autorizada.

## Goals / Non-Goals

**Goals:** una fuente editorial fácil de editar, lectura reutilizable con todos los valores disponibles y un inventario de revisión que no pueda desincronizarse por duplicación manual. Los errores de referencias deben ser identificables con tests de comportamiento.

**Non-Goals:** no crear un CMS, panel, usuarios, workflow de aprobación, filtro de publicación, UI, rutas ni enlaces comerciales. El catálogo prepara esos consumidores posteriores; no fija su diseño ni decide publicar precios. No incorporar archivos audiovisuales para rellenar ejemplos.

## Decisions

### D-01 — Composición completa con provisionales registrados: elegida por Franco

| Alternativa | Ventajas | Costes y límites |
|---|---|---|
| A. Datos con estados; cada consumidor decide qué filtrar | Flexible, poca infraestructura central. | Puede duplicar filtros y producir vistas incoherentes; no define por sí sola qué mostrar. |
| B. Acceso editorial completo y proyección pública solo de datos aprobados | Evita filtrar en cada componente y reduce publicación accidental de borradores. | Más tipos y transformaciones; ocultaría ejemplos útiles para componer. Fue recomendación inicial, no la elección del usuario. |
| C. Mostrar únicamente propuestas completamente aprobadas | Regla sencilla de disponibilidad de registros. | Un solo pendiente ocultaría toda una propuesta y frenaría diseño y contenido parcial. |
| **D. Devolver confirmados y provisionales, con registro central derivado** | Permite componer experiencias completas ahora y localizar después cada reemplazo necesario. | Requiere revisar el inventario para no confundir ejemplos con condiciones finales; los consumidores deben conservar acceso al estado. |

**Elección:** D, por instrucción explícita de Franco. No existe filtrado automático de provisionales ni ocultamiento de registros completos en C-02. El tratamiento visual y la revisión editorial posterior conservan su alcance del roadmap; no se introduce un nuevo gate automatizado de publicación.

### D-02 — Estado por unidad con aprobación independiente

Proponer una unión discriminada de unidad editorial con `estado` y `valor` disponible en confirmados/provisionales. El provisional contiene motivo y revisión esperada; el pendiente puede carecer de valor cuando no hay un ejemplo utilizable, como un archivo de imagen aún no seleccionado. Fuente y responsable se añaden cuando se conocen, sin inventarlos. La ubicación del dato se deriva al recorrer el catálogo, no se repite como una ruta escrita manualmente dentro de cada objeto.

No envolver IDs internos, tipos técnicos o cada literal. La unidad puede ser un texto, un bloque de presentación coherente o una condición concreta según qué se revisa junto. Contacto, slug, información comercial y medios pueden confirmarse de forma independiente. Incluidos y opcionales mantienen su clasificación, aunque un texto o valor siga siendo provisional.

| Granularidad | Ventaja | Trade-off |
|---|---|---|
| Estado único por propuesta | Menos metadatos. | No identifica qué cambiar cuando solo falta una condición; confunde partes confirmadas y provisionales. |
| Estado por cada literal | Máxima precisión posible. | Mucho ruido y carga de edición sin utilidad para IDs o elementos que se confirman juntos. |
| **Unidades editoriales independientes** | Trazabilidad concreta con complejidad proporcionada. | Hay que mantener un criterio coherente al agrupar; se documentará con un ejemplo de edición. |

Una fuente operativa documentada no acredita que toda una redacción esté aprobada: la metadata distinguirá el origen usado y el estado del valor exacto representado. La información inventada será siempre provisional. No se añaden historial de versiones editorial, permisos o estados de workflow.

### D-03 — Módulos TypeScript y consultas puras

Organizar los tipos compartidos en `src/types/` si evitan duplicación y los datos por dominio en `src/data/`: identidad/contacto, propuestas, instalaciones/actividades, FAQs y medios. Mantener un punto de lectura coherente que reúna el catálogo y las consultas, evitando importaciones cruzadas circulares. La lista concreta de archivos se ajustará al tamaño real, sin crear carpetas vacías.

Los cuatro IDs internos propuestos son `empresas`, `cumpleanos-adultos`, `cumpleanos-infantiles` y `primaria-padres`. Son claves técnicas, no slugs ni nombres comerciales aprobados. La consulta devuelve ausencia explícita para un ID desconocido; no ofrece un fallback a otro evento. Previews y detalles futuros leerán la misma unidad, sin copiar sus valores en dos módulos.

El inventario de revisión se deriva de los estados del catálogo e informa entidad, campo/unidad, estado, valor provisional cuando exista, motivo y fuente/responsable conocidos. No crear otra lista manual que vuelva a escribir estos valores. Al confirmar una unidad, deja de figurar como provisional en la siguiente consulta del inventario.

**Alternativas:** datos dentro de componentes simplifican una primera maqueta, pero contradicen la centralización ya aprobada. Un único archivo grande minimiza importaciones pero mezcla dominios y complica revisión. Módulos pequeños por dominio mantienen edición localizada; su coste es definir el punto común de lectura. CMS o base de datos no son alternativas dentro del alcance acordado.

### D-04 — Referencias verificables y medios todavía pendientes

Separar identidad de los medios de su contenido final: las relaciones usan IDs del catálogo y su metadata indica la selección pendiente cuando no hay referencia. El catálogo inicial puede estar vacío; no inventar imágenes ni copiar la biblioteca original. Las entradas reales futuras deberán referenciar exportaciones web, compatibles con el procesamiento de Astro que se concrete en C-04. No fijar proveedor ni URLs ficticias de video.

Las consultas y validaciones de contenido deben ser módulos puros, sin necesitar arrancar Astro ni cargar archivos `.astro`, imágenes o un proveedor externo para testear su comportamiento. Un adaptador de medios podrá resolver los imports concretos cuando existan archivos seleccionados. Esto evita mezclar la lógica del catálogo con la carga de assets; el coste es conservar una frontera explícita entre referencia editorial y recurso real.

La validación comprobará unicidad por colección y existencia de las referencias usadas por propuestas, instalaciones, actividades y FAQs. Devolverá diagnósticos localizables; no solucionará vínculos escogiendo otro registro ni confundirá ausencia intencional con un ID roto. Los tests usarán catálogos pequeños controlados para cubrir referencias válidas y errores, sin convertir sus fixtures en contenido del sitio.

Para WhatsApp o destinos desconocidos se usará un marcador no accionable o ausencia acompañada de una etiqueta provisional; no un número aleatorio. C-02 no genera enlaces. Un precio o capacidad representativo sí puede existir como valor provisional registrado, sin decidir si la web final lo mostrará.

### D-05 — Tests con el runner existente y TypeScript nativo

Se recomienda conservar `node:test` y añadir pruebas de contenido que importen los módulos `.ts` puros en el Node `24.19.0` documentado. Usar imports relativos con extensión `.ts`, `import type` y sintaxis TypeScript eliminable; evitar aliases de `tsconfig`, enums o APIs de Astro en el núcleo de contenido. La configuración heredada de Astro ya admite imports `.ts` y exige imports de tipos explícitos.

| Alternativa | Aporta | Coste / limitación para C-02 |
|---|---|---|
| **Node nativo** | Runner existente y soporte estable para eliminar tipos, sin paquete nuevo. | No verifica tipos ni usa aliases de `tsconfig`; requiere módulos de contenido puros. |
| `tsx` con `node:test` | Soporte más amplio de transformación TypeScript. | Nueva dependencia y launcher; no hay una necesidad actual que los justifique. |
| Vitest | Integración con bundler y capacidades útiles para componentes o assets. | Framework y configuración adicionales para funciones puras pequeñas. |
| Compilar primero con TypeScript y ejecutar JavaScript | Aprovecha TypeScript ya instalado y permite un paso de emisión explícito. | Configuración de emisión y salidas adicionales; complica el ciclo RED y la preparación sin aportar una necesidad de C-02. |

Mantener `astro check` para los tipos, porque el runtime de Node no los comprueba. Separar `test:contenido` y `test:smoke`, y hacer que `npm test` ejecute ambos; `verify` conserva tipos, build y pruebas con propagación de fallos. Los nombres finales de archivos se elegirán con el contrato probado, no mediante descubrimiento de tests que pueda omitir una suite silenciosamente.

Fuentes primarias consultadas: [TypeScript en Node 24.19.0](https://nodejs.org/download/release/v24.19.0/docs/api/typescript.html) y [runner de tests de esa versión](https://nodejs.org/download/release/v24.19.0/docs/api/test.html). La ejecución real de estos módulos nuevos se verificará durante apply; no se ha instalado ni ejecutado código del producto en propose.

## Risks / Trade-offs

- **Ejemplos confundidos con oferta final** → marcar su estado en la fuente, conservarlo en lectura y derivar un inventario consultable; no dar por resueltas PA-04 a PA-10 por tener valores representativos.
- **Metadata excesiva** → agrupar unidades que se confirman juntas; no modelar permisos, versiones editoriales ni panel de gestión.
- **Pruebas que solo cuentan textos** → comprobar búsqueda existente/desconocida, actualización compartida, inclusión de provisionales, inventario después de confirmar y referencias válidas/rotas. No testear cada frase como constante.
- **Incompatibilidad entre Node y imports futuros de Astro** → núcleo de contenido puro y frontera de medios explícita; revisar la estrategia si un change futuro necesita bundler, sin instalar dependencias preventivas.

## Migration Plan

No hay despliegue ni migración de datos. Apply requiere una nueva solicitud tras revisar esta propuesta. Sobre `feature/change_2`, registrar baseline de las pruebas existentes antes de modificar scripts y crear primero un test fallido por ausencia del comportamiento de contenido, no por una configuración incorrecta del harness. Implementar el mínimo, triangular escenarios y verificar tras refactorizar; la excepción TDD de C-01 no se extiende.

Actualizar README y KB con las decisiones realmente implementadas y comprobadas. Conservar las decisiones comerciales pendientes y el carácter provisional de sus ejemplos. Un rollback afectaría solo los módulos, pruebas y scripts propios de C-02 identificados en el diff, sin retirar trabajo ajeno ni originales audiovisuales. No hacer commit, push, merge ni archivo sin permiso explícito.
