# Descripción general

## Stack tecnológico

| Capa | Tecnología aprobada | Versión |
|---|---|---|
| Páginas y generación del sitio | Astro, con contenido generado antes de la visita. | `7.4.13`, fijada en C-01. |
| Datos y comportamiento | TypeScript, configuración estricta. | `6.0.3`, fijada en C-01. |
| Verificación de tipos Astro | `@astrojs/check`. | `0.9.12`, fijada en C-01. |
| Entorno de desarrollo verificado | Node.js y npm. | Node `24.19.0`; npm `11.17.0`. |
| Estilos | CSS estándar, variables compartidas y estilos por componente. | Según soporte de los navegadores objetivo por definir. |
| Componentes interactivos | React cuando aporte una necesidad concreta. | Se fijará si se incorpora la integración. |
| Contenido | Archivos TypeScript compartidos entre principal y propuestas. | Sin motor de base de datos. |
| Fotografías | Selección dentro del repositorio, procesada con herramientas de imágenes de Astro. | Configuración por definir al implementar. |
| Videos y animación | Herramientas y distribución pendientes. | Sin proveedor ni librería elegidos. |

Las herramientas y recursos del proyecto deben ser gratuitos. C-01 creó y verificó la base estática: una página técnica mínima, layout, CSS estándar y dos smokes HTTP con el runner integrado de Node. El diseño visual, el contenido y las secciones comerciales se desarrollan en los changes siguientes; esta base no representa la dirección visual de C-03.

Las versiones directas están fijadas en [package.json](../package.json) y el árbol de dependencias en [package-lock.json](../package-lock.json). La instalación limpia con `npm ci` y el flujo `npm run verify` pasaron con el entorno indicado. Los comandos y requisitos reproducibles se mantienen en el [README raíz](../README.md); la evidencia de C-01 está en [su verificación](../openspec/changes/archive/2026-11-19-foundation-setup/verification.md).

## Arquitectura general

```text
Contenidos TypeScript + fotografías seleccionadas + componentes Astro/CSS
                              ↓ generación del sitio
                    Páginas HTML, CSS y recursos
                              ↓ alojamiento/CDN
                 Navegador móvil o desktop del visitante
                              ↓ enlace contextual
                   WhatsApp y atención comercial
```

Astro organiza las páginas y componentes; las partes que necesitan comportamiento incorporan JavaScript o React de forma selectiva. El HTML generado puede contener animaciones e interacciones: «estático» describe la generación del contenido, no su apariencia.

No hay backend propio, datos de clientes persistidos ni consultas a una base de datos. La cotización, la disponibilidad y el cierre se gestionan fuera de la web. Es un sitio público de una sola marca; el volumen de tráfico y sus picos todavía son desconocidos.

## Integraciones externas

| Servicio | Propósito | Tipo y alcance |
|---|---|---|
| WhatsApp | Continuar la consulta según la propuesta. | Enlace directo; sin API, bot, formulario ni tracking. |
| Instagram | Acceso al perfil y canal de llegada. | Enlace al perfil; no requiere feed automático. |
| Ubicación | Ayudar a llegar a Cacheuta y al predio. | Datos e indicaciones; mapa o enlace concreto pendiente. |
| Buscadores | Permitir descubrir e interpretar el contenido público. | HTML, metadatos y preparación de indexación. |
| Alojamiento | Publicar el sitio con dominio y distribuir archivos. | Vercel previsto por acuerdo previo; configuración y límites a verificar al desplegar. |

La compra y renovación del dominio corresponden al cliente. El alojamiento de los videos sigue abierto; Cloudinary fue evaluado, no aprobado. Las fotografías aprobadas se incorporan al repositorio y se sirven como parte del despliegue, no desde enlaces de GitHub.

## API REST

No aplica al lanzamiento. Los enlaces salientes no requieren desarrollar endpoints. Tampoco hay autenticación ni integración de pagos.

## Lecturas relacionadas

- [Arquitectura propuesta](08_arquitectura_propuesta.md): organización técnica revisable y tratamiento de medios.
- [Decisiones](09_decisiones_y_supuestos.md): contexto de las elecciones aprobadas.
- [Pendientes y resoluciones](10_preguntas_abiertas.md): videos, dominio, efectos y validaciones antes de publicar; PA-11 registra las versiones y comandos ya resueltos.
