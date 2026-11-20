# prototipo-visual Specification

## Purpose
Permitir la revisión navegable de una dirección visual y una interacción de El Camello antes de construir sus secciones definitivas.

## Requirements

### Requirement: Muestra local aislada

El proyecto SHALL ofrecer una vista de prototipo identificada como revisión interna durante el desarrollo local. La vista SHALL quedar fuera de la salida estática pública y sus recursos provisionales no SHALL formar parte del sitio publicado. La página inicial SHALL seguir respondiendo según el contrato de la base estática.

#### Scenario: Abrir la muestra durante el desarrollo
- **WHEN** Franco inicia el servidor de desarrollo y abre la dirección documentada
- **THEN** puede recorrer la portada, la presentación textual y la muestra de instalaciones en el navegador

#### Scenario: Comprobar la salida estática
- **WHEN** se genera y sirve la salida normal del sitio
- **THEN** la dirección de revisión responde HTTP 404 y el build no incluye los recursos dedicados al prototipo
- **AND** la página inicial conserva la identidad y la ubicación en el HTML

### Requirement: Dirección visual legible y medio adaptable

La muestra SHALL permitir revisar una dirección candidata de marca, tipos, colores y espacios en celular y escritorio. La portada SHALL mantener el título, el texto y una acción para continuar legibles desde el primer render. Si usa video, SHALL conservar la imagen de respaldo, reproducir sin sonido y suspender su reproducción al salir de vista.

#### Scenario: Revisar la composición con reproducción disponible
- **WHEN** se abre la dirección de desarrollo en celular o escritorio y hay medio representativo apto
- **THEN** el encuadre y la jerarquía permiten reconocer el parador y continuar al texto
- **AND** el video, cuando se haya incluido, queda en pausa fuera de vista

#### Scenario: Continuar sin reproducción o con movimiento reducido
- **WHEN** el video no está disponible, su reproducción falla, se desactiva JavaScript o se solicita movimiento reducido
- **THEN** la portada conserva su imagen o composición estática, con texto y acceso directo a la presentación
- **AND** con movimiento reducido no se inicia reproducción automática ni se impone la transición de portada

### Requirement: Interacción de imágenes con recorrido alternativo

La muestra SHALL presentar una interacción de instalaciones y mantener disponibles sus imágenes y textos con navegación táctil y por teclado. El avance vertical y los enlaces internos SHALL seguir disponibles sin completar el movimiento. La vista SHALL conservar sus enlaces, acceso a las imágenes y orden de lectura sin JavaScript.

#### Scenario: Explorar y salir de la galería
- **WHEN** se recorre la galería con gesto táctil o controles de teclado
- **THEN** se puede consultar cada imagen y su texto y seguir al contenido siguiente sin que el foco o el scroll queden atrapados

#### Scenario: Leer la muestra estática
- **WHEN** no se ejecutan scripts o se activa movimiento reducido
- **THEN** siguen accesibles todas las imágenes, los textos, los enlaces y la continuación
- **AND** el recorrido no depende de hover, animaciones ni gestos exclusivos

### Requirement: Revisión trazable de decisiones y medios

La entrega SHALL identificar las hipótesis de diseño, los recursos de muestra y los resultados por condición de prueba. SHALL distinguir una medición observada de un criterio pendiente de acordar y registrar las conclusiones para los changes siguientes sin atribuir aprobación comercial a los ejemplos.

#### Scenario: Entregar la revisión con evidencia parcial
- **WHEN** se revisa el prototipo y algún dispositivo real o clip apto aún no está disponible
- **THEN** quedan documentados los casos evaluados, su alternativa estática, las condiciones sin comprobar y los encuadres o tomas que requiere C-04
- **AND** las decisiones de marca, montaje y efecto conservan su estado real de revisión
