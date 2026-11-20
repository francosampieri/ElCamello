# estructura-navegable Specification

## Purpose
Proporcionar una estructura de página compartida y un recorrido adaptable para que visitantes de El Camello encuentren el contenido disponible en escritorio y celular.

## Requirements

### Requirement: Estructura compartida y entrada directa al contenido

Las páginas que usen la estructura compartida SHALL conservar título de página, encabezado, navegación identificable, una región principal, pie y un enlace de teclado para saltar a la región principal. La información SHALL conservar su lectura sin scripts o movimiento.

#### Scenario: Abrir la principal y saltar al contenido
- **WHEN** un visitante abre la página principal y activa «Saltar al contenido» con teclado
- **THEN** llega a la región principal y puede continuar desde allí con foco visible
- **AND** el nombre y la ubicación siguen disponibles en el HTML sin ejecutar scripts

### Requirement: Menú adaptable y recorrido continuo

La navegación SHALL ofrecer acceso legible a los destinos disponibles en escritorio y un menú desplegable operable con tacto y teclado en celular. El menú SHALL permitir continuar al contenido sin atrapar foco ni desplazamiento, respetar movimiento reducido y ofrecer navegación funcional cuando no se ejecute JavaScript.

#### Scenario: Usar y cerrar el menú en celular
- **WHEN** un visitante abre el menú con toque o teclado
- **THEN** puede alcanzar los enlaces y cerrarlo desde su control
- **AND** con scripts disponibles, Escape lo cierra y devuelve el foco al control cuando el foco estaba dentro del menú

#### Scenario: Continuar con JavaScript desactivado
- **WHEN** se desactiva JavaScript
- **THEN** el menú móvil permite abrirlo, alcanzar los destinos por teclado o toque y seguir al contenido

### Requirement: Destinos existentes y anclas compartidas

Cada enlace de navegación SHALL apuntar a un destino disponible en el entorno correspondiente. Los enlaces a secciones de la principal SHALL resolver tanto desde esa página como desde otra página que comparta la navegación. Una página o sección futura SHALL permanecer fuera de la navegación pública hasta que exista.

#### Scenario: Ir a una sección desde otra página
- **WHEN** alguien abre directamente otra página y activa un enlace a una sección disponible de la principal
- **THEN** llega a la principal con el fragmento correcto y encuentra el contenido correspondiente

#### Scenario: Mantener fuera un destino futuro
- **WHEN** una página o sección todavía no se implementó
- **THEN** el encabezado y el pie no emiten enlaces ni fragmentos que apunten a ese destino inexistente

### Requirement: Muestra de navegación acotada al desarrollo

El desarrollo local SHALL ofrecer una muestra identificada como interna para recorrer la estructura, comprobar la navegación entre páginas y revisar estados de contacto. Sus rutas, secciones de muestra y datos de ejemplo SHALL quedar fuera de la salida estática pública.

#### Scenario: Comparar la revisión local con el resultado generado
- **WHEN** se abre la ruta de revisión durante el desarrollo y después contra la salida del build
- **THEN** la muestra se puede recorrer en desarrollo y la misma ruta responde HTTP 404 en la vista previa del build
- **AND** la página pública principal conserva sus destinos válidos
