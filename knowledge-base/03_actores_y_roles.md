# Actores y roles

## Actores del sistema

| Actor | Descripción | Interacción principal |
|---|---|---|
| Organizador empresarial | RR. HH. u otra persona que organiza el encuentro de una empresa. | Explora la propuesta empresarial y consulta por WhatsApp. |
| Organizador de cumpleaños adulto | Adulto que busca un festejo personalizado. | Compara posibilidades e inicia una consulta contextual. |
| Responsable de cumpleaños infantil | Padre, madre o responsable del festejo. | Consulta experiencia, instalaciones y opciones infantiles. |
| Padre organizador de primaria | Familia que organiza un encuentro de compañeros de primaria. | Comprende una propuesta recreativa organizada por padres. |
| Visitante general | Persona que descubre el lugar o tiene otra idea grupal. | Recorre El Parador o utiliza «Armá tu propuesta». |
| Franco | Desarrollador y responsable de generación y cambios de contenido. | Trabaja en archivos del repositorio y prepara publicaciones. |
| Dueña | Responsable de confirmar la fidelidad operativa y comercial. | Revisa y aprueba textos, condiciones y selección audiovisual. |
| Padre de Franco | Responsable de la venta personalizada. | Recibe consultas y cierra fuera de la web. |

El foco geográfico inicial es Mendoza. Los participantes de un evento no son necesariamente quienes lo organizan o pagan; los textos se dirigen al organizador confirmado de cada propuesta.

## RBAC — Matriz de permisos

No existe RBAC de aplicación, porque todas las páginas son públicas y no hay cuentas ni panel interno. Las responsabilidades de trabajo se distinguen del acceso a herramientas externas:

| Actor | Recurso | Capacidad en esta versión |
|---|---|---|
| Cualquier visitante | Contenido publicado | Leer, navegar y abrir enlaces. |
| Franco | Código y contenido fuente | Preparar cambios mediante el flujo de desarrollo; no es un permiso web. |
| Dueña | Borradores y contenido propuesto | Validar fuera de la aplicación; no necesita una cuenta en el sitio. |
| Responsable comercial | Conversaciones de WhatsApp | Atenderlas en la herramienta externa; la web no muestra conversaciones. |

Las cuentas y accesos de GitHub, dominio y alojamiento se definirán para operación; no implican un nuevo sistema de roles dentro del producto.

## Rutas públicas

La estructura aprobada contiene cinco páginas de contenido: principal y cuatro propuestas. Los nombres comerciales y slugs finales requieren confirmación.

| Destino | Ruta técnica propuesta, no definitiva |
|---|---|
| Principal | `/` |
| Empresas | `/propuestas/empresas/` |
| Cumpleaños de adultos | `/propuestas/cumpleanos-adultos/` |
| Cumpleaños infantiles | `/propuestas/cumpleanos-infantiles/` |
| Encuentros de primaria | `/propuestas/encuentros-primaria/` |

«Armá tu propuesta» abre WhatsApp y no agrega otra página. El Parador, Nosotros, ubicación y FAQs se encuentran como secciones de la principal; sus anclas se definirán junto a la navegación. Una respuesta técnica para rutas inexistentes se diseñará durante implementación sin agregar una propuesta comercial.

## Aprobación editorial

Franco prepara y presenta el contenido; la dueña confirma hechos, servicios y contexto de las imágenes; Franco incorpora las correcciones y publica. El responsable comercial aporta información útil para la consulta, sin reemplazar a la dueña como validadora final.

Los pendientes y dudas se conservan en [10](10_preguntas_abiertas.md) hasta confirmarse. No se identifican personas, empresas o edades de un grupo por su apariencia en una fotografía.
