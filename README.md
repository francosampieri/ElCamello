# Parador El Camello - Web

Repositorio del sitio web de Parador El Camello, Cacheuta, Mendoza. La documentación del proyecto se mantiene en español. El stack aprobado es Astro con TypeScript, CSS estándar y React cuando sea necesario. La fundación sigue en curso; la aplicación todavía no está implementada.

## Organización

```text
ElCamello/
├── web/                         Este repositorio y carpeta principal de Codex
│   ├── documentacion/           Relevamiento, estructura, selección de medios y fuentes
│   ├── investigacion/           Investigación de referentes
│   ├── discovery/               Discovery aprobado
│   ├── knowledge-base/          Base de conocimiento consolidada
│   └── README.md
├── fotos/Fotos/                 Selección audiovisual original, fuera del repositorio
├── administracion/presupuestos/ Documentos comerciales, fuera del repositorio
└── tmp/                         Herramientas y derivados de inspección, fuera del repositorio
```

El Discovery y la base de conocimiento se encuentran aquí. Las especificaciones y las instrucciones del proyecto se completarán durante la fundación antes de desarrollar la web.

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
