# Spec Delta

## Purpose

Permitir al organizador conocer el carácter del predio, identificar las instalaciones y actividades, y evaluar su interés para continuar hacia las propuestas o el contacto.

## ADDED Requirements

### Requirement: Presentación breve y reutilizable

La presentación SHALL comunicar exclusividad para grupos, personalización, paisaje y variedad de actividades con contenido de la fuente central, legible desde el primer render. El contrato de integración SHALL ubicarla después de portada y ubicar «El Parador» antes de propuestas.

#### Scenario: Leer la presentación del lugar
- **WHEN** el visitante llega al bloque de presentación
- **THEN** puede leer la propuesta de valor y reconocer sus fortalezas sin ejecutar una animación
- **AND** los dos bloques ofrecen destinos propios para la futura composición de la principal

### Requirement: Instalaciones y actividades con contexto preciso

El Parador SHALL distinguir instalaciones y actividades, identificar cada elemento y conservar su información textual aunque falte una foto. Las habitaciones SHALL figurar entre las instalaciones y el pernocte SHALL describirse como adicional, sujeto a consulta. El componente público SHALL señalar la estacionalidad confirmada y excluir afirmaciones sin confirmar sobre fútbol operativo, aptitud universal o personal. La revisión interna SHALL diferenciar los aportes provisionales autorizados de los datos confirmados.

#### Scenario: Explorar habitaciones y una instalación estacional
- **WHEN** el visitante consulta habitaciones y sector acuático
- **THEN** puede distinguir las habitaciones del pernocte adicional y el uso estacional de lo que ofrece la temporada

#### Scenario: Consultar una instalación sin fotografía validada
- **WHEN** un elemento del catálogo carece de una foto seleccionada o de contexto apto
- **THEN** su identificación y la información disponible siguen accesibles en texto
- **AND** no se le atribuye una imagen de otro espacio o evento

### Requirement: Recorrido accesible y resiliente de las imágenes

La sección SHALL mostrar solo fotos optimizadas que correspondan al uso adecuado, con rótulo identificable y alternativa textual pertinente. El recorrido SHALL ser operable por tacto y teclado sin atrapar el foco o el desplazamiento vertical. SHALL permitir leer, continuar hacia destinos habilitados y acceder a las imágenes sin JavaScript, con movimiento reducido o ante falla de un recurso.

#### Scenario: Recorrer y salir de la galería
- **WHEN** el visitante recorre las fotos con tacto o teclado
- **THEN** identifica las vistas y puede seguir hacia el contenido o contacto habilitado con foco visible

#### Scenario: Usar la sección con menos movimiento o una imagen fallida
- **WHEN** JavaScript está desactivado, se solicita reducir movimiento o falla una imagen
- **THEN** siguen legibles los rótulos, la información de instalaciones y actividades y los enlaces vigentes
- **AND** el acceso al resto de la página no depende de completar un recorrido animado

### Requirement: Revisión local y composición posterior

El proyecto SHALL ofrecer en desarrollo una vista interna con los componentes de C-06 y la estructura de C-05. SHALL mantener la vista y su contenido de ensayo fuera de la salida estática. C-06 SHALL entregar sus componentes para C-11 y conservar la página principal existente durante esta etapa.

#### Scenario: Revisar los componentes antes de integrarlos
- **WHEN** Franco abre la vista documentada en el servidor de desarrollo
- **THEN** puede recorrer la presentación y El Parador con los datos compartidos y sus fotos disponibles

#### Scenario: Generar la salida pública
- **WHEN** se sirve el build de C-06
- **THEN** la ruta interna responde HTTP 404 y la página principal conserva su composición
