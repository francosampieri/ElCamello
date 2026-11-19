# Proposal

## Why

La fundación documental está completa, pero el repositorio todavía no contiene una aplicación ejecutable. Necesitamos una base Astro reproducible y verificable para desarrollar el contenido y la experiencia visual sin alterar la documentación ni los medios originales.

## What Changes

- Crear la aplicación Astro con TypeScript estricto y CSS estándar directamente en `web/`, preservando los archivos existentes.
- Incorporar una página mínima en español que identifique a Parador El Camello y permita comprobar el ciclo completo de desarrollo, generación estática y vista previa.
- Fijar versiones compatibles y un lockfile; documentar instalación limpia, desarrollo, comprobación de tipos, build y verificación.
- Proponer una comprobación automatizada mínima del sitio generado y la estrategia para futuras pruebas, sin instalar herramientas de funcionalidades posteriores.
- Establecer las carpetas que use esta base y documentar la organización prevista de contenido, componentes y fotografías.

Las versiones exactas, npm como gestor y el mecanismo de smoke tests se presentan para revisión de Franco en `design.md`. Esta propuesta no los considera aprobados ni autoriza la implementación.

## Capabilities

### New Capabilities

- `sitio-estatico-base`: una página inicial mínima, generable y servible como sitio estático, junto con un flujo reproducible de desarrollo y verificación.

### Modified Capabilities

Ninguna: el inventario principal de especificaciones está vacío.

## Impact

La implementación añadirá archivos de aplicación y configuración de Astro/TypeScript, dependencias de desarrollo, lockfile, una comprobación mínima y comandos en el README. No requiere backend, base de datos, secretos, cambios en servicios externos ni un nuevo repositorio.

No incluye diseño visual definitivo, textos comerciales, las cuatro páginas de propuestas, selección o traslado de medios, portada, animaciones, React, Tailwind, analítica, despliegue ni configuración adicional de MCP. Esas tareas conservan su lugar en el roadmap.

Se trabajará en `feature/change_1`. Este flujo produce únicamente artifacts de planificación; no realiza commits, pushes, merges ni apply.
