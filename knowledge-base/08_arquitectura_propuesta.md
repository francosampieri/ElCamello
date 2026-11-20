# Arquitectura propuesta

Las tecnologías y versiones verificadas están en [02](02_descripcion_general.md). C-01 creó la base técnica estática y C-02 implementó el catálogo editorial reutilizable. La organización siguiente distingue archivos existentes de carpetas previstas para changes posteriores.

## Patrones aplicados

| Patrón | Dónde se usa | Propósito |
|---|---|---|
| Generación de páginas | Principal y propuestas Astro. | Publicar contenido informativo preparado y compartible. |
| Componentes reutilizables | Navegación, tarjetas, botones, FAQs y estructuras de propuesta. | Mantener consistencia y facilitar cambios. |
| Datos separados de presentación | Módulos TypeScript. | Reutilizar una fuente de contenido entre principal y detalle. |
| Interactividad selectiva | Componentes que requieran JavaScript o React. | Incorporar comportamiento donde aporte valor. |
| Variables de diseño | Colores, espacios y tipografías compartidos. | Aplicar los roles de la [identidad visual aprobada por Franco](11_identidad_visual.md) con CSS estándar. |

## Estructura de directorios propuesta

```text
web/
├── knowledge-base/            Documentación consolidada
├── discovery/                 Discovery aprobado
├── documentacion/             Fuentes y revisión de medios
├── investigacion/             Antecedentes de referentes
├── openspec/                  Especificaciones del proyecto
├── package.json               Versiones directas y comandos actuales
├── package-lock.json          Árbol reproducible de dependencias
├── tests/smoke.test.mjs        Dos comprobaciones HTTP de la base
├── tests/contenido.test.mjs    Consultas, edición y referencias del catálogo
├── src/                       Base creada en C-01
│   ├── pages/index.astro       Página técnica mínima; propuestas futuras
│   ├── layouts/BaseLayout.astro Layout base compartido
│   ├── styles/global.css      CSS estándar inicial
│   ├── components/            Previsto: componentes de la experiencia
│   ├── data/                  C-02: datos editoriales y consultas compartidas
│   ├── types/                 Previsto cuando sean útiles tipos compartidos
│   ├── scripts/               Previsto: comportamiento sin React
│   └── assets/images/         Previsto: fotografías seleccionadas
└── public/                    Previsto: archivos sin procesamiento
```

Desde la raíz `web/`, `../fotos/Fotos` contiene originales y `../tmp` derivados auxiliares. No se incluyen en el build ni se trasladan íntegros al repositorio. No se crea todavía una carpeta definitiva de videos: su distribución está pendiente.

## Componentes y comportamiento

Los componentes Astro organizan contenido y estructura. El CSS de cada componente describe su presentación, con variables compartidas para decisiones visuales comunes. React se incorpora solo cuando simplifique una interacción concreta o permita adaptar un componente adecuado; no es obligatorio para portada, texto o cada animación.

Las galerías, transiciones y recursos de scroll se seleccionarán mediante pruebas con el material real. La arquitectura debe permitir adaptar encuadre e interacción para móvil y desktop. No se elige todavía librería de animación, navegación con transiciones especiales ni tecnología 3D.

## Tratamiento de medios

Las fotografías seleccionadas se importan desde `src/assets/medios` y Astro prepara las salidas. Los archivos de `public` se sirven sin ese procesamiento automático. C-04 verificó los primeros tres derivados y los enlazó al catálogo con detalles de contexto y revisión. Ver [faltantes por sección](../documentacion/revision-medios/faltantes-c04.md) y [pedido de portada](../documentacion/revision-medios/pedido-portada.md).

Los videos requieren exportación y compresión específicas; Astro no sustituye esa preparación. Se evaluarán peso, calidad, carga móvil y cuotas del proveedor antes de fijar alojamiento. El diseño de portada elegirá la versión horizontal o vertical apropiada y mantendrá un respaldo estático.

**Propuesta de verificación técnica:** observar carga inicial, estabilidad visual, fluidez de scroll, comportamiento táctil, uso de recursos y alternativas cuando el movimiento o video no puedan ejecutarse. Los dispositivos y presupuestos cuantitativos se acordarán al implementar; no se inventan umbrales de aceptación.

## Seguridad y datos

No hay autenticación, autorización de aplicación ni almacenamiento de clientes. Los datos de contacto publicados son contenido público aprobado. No se incluyen credenciales privadas en componentes ni en archivos de contenido versionados.

Los enlaces externos se construyen desde valores controlados; WhatsApp utiliza un mensaje correctamente codificado y el número validado. No se necesita una API key para abrir ese enlace. Los permisos de las cuentas de desarrollo, alojamiento y dominio pertenecen a la operación externa.

C-05 aplica la estructura compartida a la principal y deja el contenido de sección en el slot de `BaseLayout`. Los destinos habilitados se vinculan a rutas y fragmentos existentes. El menú móvil funciona como desplegable nativo y conserva el scroll. La revisión local permite probar anclas entre páginas y consultar borradores. La salida pública incluye la acción de WhatsApp cuando están confirmados el destinatario y el mensaje de ese contexto. Ver [operación y ubicación de datos](../README.md#navegación-y-mensajes-de-consulta).

## Variables de entorno

No hay variables de entorno obligatorias cerradas en esta fase. Dominio canónico y contacto necesitarán una configuración central, cuyo formato definitivo se decidirá al implementar. No se crearán nombres ficticios de secretos ni credenciales de servicios todavía no elegidos.

## Despliegue y mantenimiento

Vercel es el alojamiento previsto por el acuerdo anterior. La publicación requiere configurar dominio, build y distribución de archivos según las condiciones y límites vigentes del servicio; no se asume capacidad gratuita ilimitada. Esto representa infraestructura simple de publicación, sin backend, contenedores ni base de datos propios.

Las versiones de la base quedaron fijadas en C-01 y se registran en [02](02_descripcion_general.md). Los scripts actuales son `npm run dev`, `npm run check`, `npm run build`, `npm run preview`, `npm test` y `npm run verify`; sus instrucciones están en el [README raíz](../README.md). `verify` ejecuta tipos, build y dos smokes HTTP con `node --test`: portada técnica con HTTP 200 e identidad en español, y ruta inexistente con HTTP 404. No se instaló `@playwright/test`.

Las verificaciones de instalación limpia, servidor local y propagación de errores están documentadas en [la evidencia de C-01](../openspec/changes/archive/2026-11-19-foundation-setup/verification.md). Las pruebas de contenido comercial, navegación e interacción se ampliarán con las funcionalidades correspondientes; esta verificación de base no acredita el diseño visual ni las experiencias de C-03 en adelante.

Las futuras agenda y analítica se tratarán mediante un alcance posterior, sin reservar ahora infraestructura innecesaria para ellas.
