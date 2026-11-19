# Design

## Context

Ver [la motivación y el alcance](proposal.md) y [el contrato observable](specs/sitio-estatico-base/spec.md). El repositorio contiene documentación, OpenSpec, skills y configuración MCP; no contiene `package.json`, lockfile, aplicación ni tests del producto. El entorno observado es Windows con Node `24.19.0` y npm `11.17.0`.

Astro, TypeScript estricto y CSS estándar ya están aprobados. Las elecciones siguientes son recomendaciones de esta propuesta, pendientes de revisión de Franco antes de apply. No se instala ningún paquete durante propose.

## Goals / Non-Goals

**Goals:** disponer de una base pequeña, reproducible y compatible con el entorno existente; comprobar tanto tipos como el HTML realmente generado; preservar el repositorio y los originales.

**Non-Goals:** fijar la dirección visual, crear arquitectura de funciones futuras o elegir librerías de animación y proveedores de video. La página mínima es una comprobación técnica, no una aprobación estética.

## Decisions

### D-01 — npm y versiones explícitas compatibles

Se propone npm con `package-lock.json`, dependencias directas exactas y `npm ci` para reinstalaciones. Ya está disponible; pnpm o Yarn agregarían una herramienta sin una necesidad de este sitio identificada.

| Elemento | Candidato propuesto | Motivo / evidencia consultada el 19/11/2026 |
|---|---|---|
| Node / npm | `24.19.0` / `11.17.0` | Versiones observadas; cumplen los mínimos declarados por Astro. Documentarlas para reproducibilidad, sin actualizar el entorno global. |
| Astro | `7.4.13` | Versión estable consultada en el registro del editor; requiere Node `>=22.23.4` y npm `>=9.6.5`. |
| TypeScript | `6.0.3` | Versión publicada compatible con el peer declarado de `@astrojs/check`. |
| `@astrojs/check` | `0.9.12` | Comprobación de archivos Astro y TypeScript; declara TypeScript `^5.0.0 || ^6.0.0`. |

TypeScript `latest` consultado es `7.0.2` y queda fuera de ese peer: no se propone instalar `latest` indiscriminadamente. La compatibilidad de metadatos todavía debe confirmarse con instalación y ejecución reales durante apply; si falla, presentar una alternativa antes de cambiar versiones.

Fuentes primarias: [Astro publicado](https://registry.npmjs.org/astro/latest), [TypeScript publicado](https://registry.npmjs.org/typescript/latest), [instalación oficial](https://docs.astro.build/en/install-and-setup/) y metadatos de npm comprobados mediante `npm view @astrojs/check@latest version peerDependencies dependencies engines --json`, `npm view astro@7.4.13 version engines --json` y `npm view typescript@6.0.3 version engines --json`.

### D-02 — Bootstrap mínimo en la raíz existente

Crear explícitamente los pocos archivos necesarios, sin ejecutar un generador con sobrescritura sobre una carpeta ya poblada. Usar módulos ESM, salida estática, `astro/tsconfigs/strict`, CSS estándar y una página `/` con título, `lang="es"`, `main` y encabezado de identidad. No agregar un adaptador de hosting: este change genera archivos estáticos locales.

La base usará `src/pages/`, un layout común y `src/styles/`; `public/` solo si existe un archivo que lo necesite. La organización futura de datos, tipos, componentes e imágenes sigue [KB 08](../../../../knowledge-base/08_arquitectura_propuesta.md); no se llenan carpetas con `.gitkeep` o ejemplos ficticios. React se evaluará cuando aparezca una interacción concreta.

Alternativa descartada: importar una plantilla visual completa. Agregaría decisiones de diseño y dependencias antes del prototipo C-03.

### D-03 — Comandos separados y una verificación conjunta

| Comando propuesto | Responsabilidad |
|---|---|
| `npm ci` | Instalar las resoluciones del lockfile. |
| `npm run dev` | Servidor local de desarrollo. |
| `npm run check` | `astro check`; fallo de tipos con salida distinta de cero. |
| `npm run build` | `astro build`; producir `dist/`. |
| `npm run preview` | Servir el resultado estático localmente. |
| `npm test` | Comprobación HTTP mínima contra el resultado ya generado. |
| `npm run verify` | Ejecutar `check`, `build` y `test` secuencialmente, propagando errores. |

`build` no sustituye a la comprobación de tipos. Esas responsabilidades separadas permiten identificar qué falla. Ver [TypeScript en Astro](https://docs.astro.build/en/guides/typescript/) y [CLI oficial](https://docs.astro.build/en/reference/cli-reference/).

### D-04 — Pruebas proporcionales sin un framework nuevo en C-01

Se propone el runner nativo `node:test` en `tests/smoke.test.mjs`, con peticiones HTTP reales a `astro preview` sobre el build. Casos mínimos: `/` devuelve 200 con identidad y estructura semántica en español presentes en el HTML; una ruta inexistente devuelve 404. La suite administra el servidor que inicia, espera su disponibilidad con un límite y lo cierra también si falla; no reutiliza ni mata servidores ajenos.

El runner existe en el entorno actual: durante apply se escribe primero el contrato ejecutable y se comprueba el fallo por ausencia del sitio. Después se crea la base mínima, se genera y se obtiene GREEN. Los casos de página válida y ruta inexistente proporcionan triangulación del servicio HTTP; se conservan las evidencias reales, sin fabricar un baseline de tests inexistentes. Las verificaciones de instalación limpia y propagación de fallos de comandos se ejecutan como comprobaciones operativas documentadas.

No se incorporan ahora Vitest, DOM simulado ni `@playwright/test`. La documentación de [pruebas de Astro](https://docs.astro.build/en/guides/testing/) contempla Vitest y Playwright, pero el contrato inicial no necesita sus capacidades. C-02 revisará la necesidad de pruebas unitarias para lógica de contenido; C-03 y los cambios interactivos revisarán pruebas persistentes de navegador. Playwright CLI ya disponible puede apoyar la inspección manual; no equivale a una suite del producto.

## Risks / Trade-offs

- **Metadatos compatibles no prueban que el conjunto funcione** → verificar instalación limpia, tipos, build y HTTP antes de cerrar C-01; no usar prereleases para sortear un fallo sin revisión.
- **Bootstrap en una raíz existente** → inventariar los archivos previos y revisar el diff; preservar documentación, skills, MCP y medios externos. Si hace falta reemplazar información vigente, consultar antes.
- **Smokes sin navegador no prueban diseño, movimiento ni interacción** → C-01 solo valida su contrato técnico; mantener las pruebas visuales y de dispositivos en sus changes.
- **Pocos tests podrían dar una falsa impresión de cobertura** → documentar exactamente qué se verifica; no agregar tests de constantes, de archivos vacíos o de implementaciones futuras.

## Migration Plan

No hay despliegue ni migración de datos. Tras la aprobación de esta propuesta, aplicar C-01 en `feature/change_1`, comprobar el inventario previo, obtener RED, crear la base y ejecutar la verificación. Reinstalar desde el lockfile y repetirla. Actualizar README con comandos y evidencia; proponer la actualización de PA-11 y de las tablas de versiones de KB/AGENTS/CLAUDE, retirando pendientes anteriores solo con confirmación de Franco.

Un rollback retiraría únicamente archivos y cambios propios del bootstrap que se identifiquen en el diff; no se borran originales, documentación previa ni trabajo ajeno, y no se ejecutan operaciones Git de cierre sin permiso.
