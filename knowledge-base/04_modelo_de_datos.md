# Modelo de datos

## Dominios

El modelo representa contenido editorial centralizado en archivos TypeScript, una decisión aprobada. No representa tablas de una base de datos ni datos de clientes. Los nombres y campos siguientes son una **propuesta técnica revisable** al implementar.

- **Identidad del parador:** presentación, fortalezas, historia y contacto público.
- **Propuestas:** cuatro experiencias con información propia y referencias a servicios y medios.
- **Instalaciones y actividades:** espacios, equipamiento, recreación y su disponibilidad informativa.
- **Medios:** fotografías y videos con contexto, encuadre y estado de aprobación.
- **Preguntas frecuentes:** respuestas generales o específicas de una propuesta.

## ERD — Relaciones de contenido

```text
Parador 1 ── N Propuesta
Parador 1 ── N Instalación / Actividad
Propuesta N ── N Medio
Instalación / Actividad N ── N Medio
Propuesta 1 ── N Pregunta frecuente
Parador 1 ── N Pregunta frecuente general
```

Son referencias entre objetos o módulos del proyecto. No requieren SQL, migraciones, índices ni un motor de persistencia.

## Entidades propuestas

| Entidad | Atributos principales y tipos orientativos | Relaciones y condiciones |
|---|---|---|
| Parador | `nombre: string`, `presentacion: string`, `fortalezas: string[]`, `historia: string`, `contacto: Contacto`, `ubicacion: Ubicacion` | Contenido común reutilizado en páginas y metadatos. |
| Propuesta | `id: string`, `slug: string`, `titulo: string`, `resumen: string`, `descripcion: string`, `incluidos: string[]`, `opcionales: string[]`, `condiciones: Condicion[]`, `medios: string[]`, `faqs: FAQ[]`, `mensajeWhatsApp: string` | Cuatro registros; `id` estable y único. Slugs y nombres públicos pendientes. |
| Instalación | `id: string`, `titulo: string`, `descripcion: string`, `medios: string[]`, `estado: string` | Puede referenciar varias fotos; una capacidad debe describir qué uso mide. |
| Actividad | `id: string`, `titulo: string`, `descripcion: string`, `temporada?: string`, `condiciones: Condicion[]`, `medios: string[]` | La estacionalidad y las condiciones se validan; no se deducen de imágenes. |
| Medio | `id: string`, `tipo: 'imagen' o 'video'`, `referencia: string`, `textoAlternativo?: string`, `contexto?: string`, `aprobado: boolean` | Para imágenes locales, la referencia podrá ser una importación compatible con Astro. El tipo exacto se decidirá al implementar. |
| Condición | `etiqueta: string`, `valor?: string`, `estado: 'pendiente' o 'confirmado'` | Permite distinguir un dato desconocido de una condición confirmada. Los pendientes no se publican como hechos. |
| FAQ | `pregunta: string`, `respuesta: string`, `estado: string` | General o vinculada a una propuesta. Evitar respuestas contradictorias duplicadas. |
| Contacto / Ubicación | `numeroWhatsApp: string`, `instagram: string`, `direccion?: string`, `indicaciones?: string`, `enlaceMapa?: string` | Número, acceso y enlace final deben validarse antes de publicar. |

Los videos podrán necesitar referencias separadas para horizontal, vertical e imágenes de respaldo. Esos campos describen el contenido; no fijan un proveedor de distribución.

## Restricciones del contenido

- La principal y la página específica utilizan el mismo registro de propuesta; no se mantienen dos versiones de sus incluidos o extras.
- Las referencias a medios deben existir y apuntar a exportaciones para web, no a miniaturas de revisión.
- El estado de aprobación es editorial, no un flujo de usuarios dentro del sitio. Puede mantenerse en la documentación o en datos auxiliares durante desarrollo.
- No se crean entidades de reserva, cliente, pago, usuario, agenda o evento de analítica.
- Una descripción de precio sigue pendiente de decisión comercial. No se añade un importe de ejemplo como dato inicial real.

## Datos iniciales y base operativa

Los cuatro registros de propuestas son empresas, cumpleaños adultos, cumpleaños infantiles y encuentros de primaria por padres. El relevamiento contiene una base a revisar con la dueña:

| Ámbito | Información de partida | Precisión necesaria antes de publicar |
|---|---|---|
| General | Grupos desde 10; orientación hasta 35, mayores a consultar. | No trasladar automáticamente este rango a cumpleaños. |
| Pernocte | 16 camas en cuatro habitaciones: una matrimonial, dos de cinco y una de cuatro. | Confirmar distribución final y condiciones del servicio adicional. |
| Comidas | Dos parrillas para hasta 30; mesas/sillas para unas 30–40 personas. | Expresar capacidades por uso y confirmar cifras finales. |
| Empresas | Recreación deportiva organizada y premios; extras gastronomía, traslado y DJ; referencia 10–20 h. | Precisar alcance y nombre comercial sin prometer facilitación especializada. |
| Cumpleaños adultos | Día recreativo, sunset o fiesta a medida; extras de gastronomía, ambientación y entretenimiento. | Confirmar incluidos, duración y condiciones de cada modalidad. |
| Cumpleaños infantiles | Jornada con opcionales de animación, gastronomía, traslado y ambientación. | Confirmar base incluida y condiciones. |
| Primaria por padres | Recreación con coordinadores; extras gastronomía y traslado; referencia 10–19 h. | Confirmar condiciones, capacidades y redacción definitiva. |

No se copian todos los archivos audiovisuales al repositorio como datos iniciales. La selección disponible y sus límites están en [selección y faltantes](../documentacion/revision-medios/seleccion-y-faltantes.md). Las condiciones de publicación se codifican en [05](05_reglas_de_negocio.md).
