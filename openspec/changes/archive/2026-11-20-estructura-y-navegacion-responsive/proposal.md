# Proposal

## Why

La principal actual solo muestra el nombre y la ubicación. Antes de sumar las secciones y las cuatro páginas de propuestas, hace falta una estructura visual, de navegación y de contacto que todas puedan reutilizar.

## What Changes

- Incorporar una estructura Astro compartida con encabezado, navegación, enlace para saltar al contenido, región principal y pie, a partir de la identidad Aventura elegida en C-03.
- Preparar navegación de escritorio y un menú móvil operable con teclado y tacto, con destinos que existen en esa versión del sitio y acceso directo a las secciones disponibles.
- Construir un generador reutilizable de enlaces a WhatsApp con número y texto controlados, distinto para consulta general, «Armá tu propuesta» y el ID de una propuesta concreta. Los datos pendientes quedan identificados en la revisión local.
- Ofrecer una muestra aislada en desarrollo para revisar navegación, enlaces y estados pendientes mientras se construyen las secciones y páginas futuras.

## Capabilities

### New Capabilities

- `estructura-navegable`: estructura común y navegación adaptable con destinos disponibles y revisión local.
- `consulta-whatsapp-contextual`: contacto reutilizable por WhatsApp con datos aprobados y contexto preciso.

### Modified Capabilities

## Impact

C-05 depende de C-02 para identidad, contacto y propuestas y de C-03 para la dirección visual. Afecta la base Astro, los estilos compartidos, la configuración de revisión local y las pruebas de navegación y contacto. Se conserva el contrato estático de la principal y el aislamiento de la muestra visual de C-03. C-06, C-07 y C-08 construirán contenidos y rutas. C-11 compone la principal y conecta la navegación con los destinos que ya existan. Los slugs comerciales definitivos y PA-08 permanecen pendientes.
