# Parador El Camello - Web

Repositorio del sitio web de Parador El Camello, Cacheuta, Mendoza. C-01 incorporó la base ejecutable de Astro con TypeScript estricto y CSS estándar. C-02 prepara el contenido compartido para las futuras secciones y páginas. La portada actual sigue siendo una comprobación técnica mínima. La dirección visual se trabajará en los siguientes changes.

## Organización

```text
ElCamello/
├── web/                         Este repositorio y carpeta principal de Codex
│   ├── documentacion/           Relevamiento, estructura, selección de medios y fuentes
│   ├── investigacion/           Investigación de referentes
│   ├── discovery/               Discovery aprobado
│   ├── knowledge-base/          Base de conocimiento consolidada
│   ├── openspec/               Propuestas, requisitos, tareas y verificaciones
│   ├── src/                    Página mínima, layout, estilos y datos editoriales
│   ├── tests/                  Pruebas de contenido y comprobaciones HTTP
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
| `npm run test:contenido` | Probar las consultas, los estados editoriales y la validación con Node. |
| `npm run test:smoke` | Verificar por HTTP el último build. Ejecutar `build` antes. |
| `npm test` | Ejecutar las pruebas de contenido y las comprobaciones HTTP. |
| `npm run verify` | Ejecutar tipos, build y tests en secuencia. El primer fallo detiene el comando. |

Para comprobar cambios, usar `npm run verify`. Los dos smokes verifican HTTP 200 e identidad semántica en español para `/`, y HTTP 404 para una ruta inexistente. Inician su propio servidor en un puerto libre y lo cierran al terminar. No acreditan diseño visual, comportamiento interactivo, accesibilidad integral, Safari real ni rendimiento del sitio final.

La [verificación de C-01](openspec/changes/archive/2026-11-19-foundation-setup/verification.md) registra instalación, reinstalación, controles negativos, resultados y la excepción TDD aceptada para este change. C-01 está archivado y su [especificación](openspec/specs/sitio-estatico-base/spec.md) forma parte del contrato vigente. `node_modules/`, `.astro/` y `dist/` son salidas locales ignoradas por Git.

## Fundación

- [Discovery aprobado](discovery/discovery.md).
- [Base de conocimiento e índice de documentos](knowledge-base/README.md).

## Contenido compartido

Los módulos de [src/data](src/data/) reúnen identidad, contacto, cuatro propuestas, consulta general, instalaciones, actividades, preguntas frecuentes y medios. La futura tarjeta y el detalle consultarán el mismo registro con `buscarPropuesta(id)`. El ID es interno y permanece estable aunque cambie el título o el slug. Un ID desconocido devuelve `undefined`. Estas consultas son funciones para el código del sitio y se pueden probar sin un servidor.

Un valor `confirmado` conserva su fuente. Un `provisional` aporta un texto o valor para composición y registra qué verificar. Un `pendiente` indica que aún falta un valor utilizable, como el número de WhatsApp validado. Para listar los campos que requieren revisión desde la raíz:

```powershell
node --input-type=module -e "import { listarPendientes } from './src/data/contenido.ts'; console.dir(listarPendientes(), { depth: null })"
```

Por ejemplo, la entrada `propuestas.empresas.titulo` apunta a la unidad `titulo` en [propuestas.ts](src/data/propuestas.ts). Al confirmar el título, sustituí la unidad por `confirmado('Nombre acordado', 'Validación de la dueña')`. La consulta devolverá su valor nuevo y el inventario dejará de mostrar esa entrada. El resto de las revisiones seguirá en el inventario. Los ejemplos de horarios, capacidades, contactos, precios y slugs conservan las validaciones comerciales y editoriales indicadas en [preguntas abiertas](knowledge-base/10_preguntas_abiertas.md).

`validarCatalogo()` informa IDs duplicados o referencias rotas con su ubicación. Una selección de medios `pendiente` carece de ID y figura en el inventario editorial. Una selección con IDs exige que cada uno exista en el catálogo. C-04 incorpora tres derivados WebP en `src/assets/medios/` y sus referencias en el catálogo. La distribución de videos se evaluará en C-09 con exportaciones H/V reales.

Con `npm run dev`, abrí `/revision-medios/` en la dirección que indique Astro para ver la salida optimizada de las fotos. El [pedido de portada](documentacion/revision-medios/pedido-portada.md), el [mapa de faltantes](documentacion/revision-medios/faltantes-c04.md) y la [ficha de C-09](documentacion/revision-medios/ficha-evaluacion-c09.md) documentan el material y sus próximas revisiones.

La [verificación de C-02](openspec/changes/archive/2026-11-20-contenido-centralizado/verification.md) registra las pruebas y el control negativo del flujo.

## Revisar las direcciones visuales

Ejecutá `npm run dev` y abrí `/prototipo-visual/` en la dirección que indique Astro. La página abre con **Aventura**, la dirección que eligió Franco. Podés seguir comparándola con **Encuentro** y **Paisaje** sobre las mismas fotos y el mismo texto. «Qué cambia» detalla el tratamiento de cada opción. La [identidad visual web](knowledge-base/11_identidad_visual.md) recoge los roles de color, la tipografía y los criterios para los próximos changes.

`npm run build` genera la página pública. La dirección de revisión devuelve HTTP 404 en la vista previa de ese build. `npm run verify` incluye la prueba de ese aislamiento, el estado del selector y la navegación básica por anclas.

Ver [registro de revisión de C-03](openspec/changes/archive/2026-11-20-direccion-visual-y-prototipo/revision-visual.md) para los criterios, las fotos de muestra y las decisiones que esperan revisión.

## Documentación de partida

- [Estructura del sitio](documentacion/estructura-web.md).
- [Selección audiovisual y faltantes](documentacion/revision-medios/seleccion-y-faltantes.md).
- [Relevamiento aportado por el cliente](documentacion/fuentes/relevamiento-parador.md).
- [Dirección visual investigada](documentacion/fuentes/direccion-visual.md).
- [Investigación de referentes](investigacion/2026-10-30-competidores-el-camello.md).

## Recursos fuera del repositorio

Las rutas `../fotos/Fotos` y `../tmp` se interpretan desde esta raíz `web/`. Al trabajar en otro dispositivo, esos recursos deben descargarse o sincronizarse por separado. El sitio final deberá disponer de sus recursos seleccionados y optimizados mediante el mecanismo que se acuerde durante el desarrollo.

Los originales audiovisuales y los documentos comerciales no se incorporan al repositorio por esta reorganización. Las miniaturas de inspección no son las imágenes finales de publicación.
