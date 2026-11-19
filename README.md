# Parador El Camello - Web

Repositorio del sitio web de Parador El Camello, Cacheuta, Mendoza. La documentación del proyecto se mantiene en español. La fundación documental está completa y C-01 incorpora una base ejecutable de Astro con TypeScript estricto y CSS estándar. La página actual es una comprobación técnica mínima; el contenido comercial y la dirección visual se desarrollarán en los siguientes changes. React se incorporará solo cuando una interacción lo justifique.

## Organización

```text
ElCamello/
├── web/                         Este repositorio y carpeta principal de Codex
│   ├── documentacion/           Relevamiento, estructura, selección de medios y fuentes
│   ├── investigacion/           Investigación de referentes
│   ├── discovery/               Discovery aprobado
│   ├── knowledge-base/          Base de conocimiento consolidada
│   ├── openspec/               Propuestas, requisitos, tareas y verificaciones
│   ├── src/                    Página mínima, layout y estilos
│   ├── tests/                  Comprobaciones HTTP de la salida generada
│   ├── package.json            Dependencias y comandos
│   ├── package-lock.json       Resoluciones reproducibles
│   └── README.md
├── fotos/Fotos/                 Selección audiovisual original, fuera del repositorio
├── administracion/presupuestos/ Documentos comerciales, fuera del repositorio
└── tmp/                         Herramientas y derivados de inspección, fuera del repositorio
```

El Discovery, la base de conocimiento y las instrucciones de agentes se encuentran aquí. [CHANGES.md](CHANGES.md) organiza el desarrollo y [AGENTS.md](AGENTS.md) fija las reglas del proyecto.

## Entorno y desarrollo

Entorno comprobado: Node `24.19.0` y npm `11.17.0`. Dependencias directas fijadas: Astro `7.4.13`, TypeScript `6.0.3` y `@astrojs/check` `0.9.12`. El lockfile registra sus resoluciones; no usar `latest` para reinstalar.

Desde esta raíz `web/`:

```powershell
npm ci
npm run dev
```

Abrir la URL que muestra Astro en la consola. La aplicación no requiere claves, variables de entorno ni recursos externos para ejecutar esta base; las credenciales de herramientas MCP son independientes del sitio.

| Comando | Función |
|---|---|
| `npm ci` | Instalar las dependencias resueltas en el lockfile. |
| `npm run dev` | Iniciar el servidor de desarrollo. |
| `npm run check` | Comprobar tipos de Astro y TypeScript. |
| `npm run build` | Generar el sitio estático en `dist/`. |
| `npm run preview` | Servir localmente el último build; ejecutar `build` antes. |
| `npm test` | Verificar por HTTP el último build; no lo recompila. |
| `npm run verify` | Ejecutar tipos, build y tests en secuencia; detenerse si falla una etapa. |

Para comprobar cambios, usar `npm run verify`. Los dos smokes verifican HTTP 200 e identidad semántica en español para `/`, y HTTP 404 para una ruta inexistente. Inician su propio servidor en un puerto libre y lo cierran al terminar. No acreditan diseño visual, comportamiento interactivo, accesibilidad integral, Safari real ni rendimiento del sitio final.

La [verificación de C-01](openspec/changes/archive/2026-11-19-foundation-setup/verification.md) registra instalación, reinstalación, controles negativos, resultados y la excepción TDD aceptada para este change. C-01 está archivado y su [especificación](openspec/specs/sitio-estatico-base/spec.md) forma parte del contrato vigente. `node_modules/`, `.astro/` y `dist/` son salidas locales ignoradas por Git.

## Fundación

- [Discovery aprobado](discovery/discovery.md).
- [Base de conocimiento e índice de documentos](knowledge-base/README.md).

Los contenidos se centralizarán en archivos TypeScript. Las fotografías seleccionadas y preparadas para la web se incorporarán al repositorio; la distribución de videos sigue pendiente de evaluar las primeras exportaciones. Todos los recursos serán gratuitos.

## Documentación de partida

- [Estructura del sitio](documentacion/estructura-web.md).
- [Selección audiovisual y faltantes](documentacion/revision-medios/seleccion-y-faltantes.md).
- [Relevamiento aportado por el cliente](documentacion/fuentes/relevamiento-parador.md).
- [Dirección visual investigada](documentacion/fuentes/direccion-visual.md).
- [Investigación de referentes](investigacion/2026-10-30-competidores-el-camello.md).

## Recursos fuera del repositorio

Las rutas `../fotos/Fotos` y `../tmp` se interpretan desde esta raíz `web/`. Al trabajar en otro dispositivo, esos recursos deben descargarse o sincronizarse por separado. El sitio final deberá disponer de sus recursos seleccionados y optimizados mediante el mecanismo que se acuerde durante el desarrollo.

Los originales audiovisuales y los documentos comerciales no se incorporan al repositorio por esta reorganización. Las miniaturas de inspección no son las imágenes finales de publicación.
