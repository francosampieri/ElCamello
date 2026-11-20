# Spec Delta

## Purpose

Proporcionar una fuente única de contenido para las futuras secciones y páginas, permitiendo componer con datos confirmados y ejemplos provisionales trazables sin convertirlos en afirmaciones comerciales aprobadas.

## ADDED Requirements

### Requirement: Catálogo coherente de las cuatro propuestas y contenido común

El catálogo SHALL representar identidad, contacto, cuatro propuestas, instalaciones, actividades, preguntas frecuentes y referencias a medios. Las propuestas SHALL tener identificadores internos únicos y estables para empresas, cumpleaños adultos, cumpleaños infantiles y encuentros de primaria organizados por padres. Los nombres y slugs provisionales SHALL permanecer independientes de esos identificadores y no confirmar rutas definitivas. «Armá tu propuesta» SHALL mantenerse como contenido de consulta general separado, sin constituir una quinta propuesta con página propia. Incluidos y opcionales SHALL conservar su clasificación por propuesta.

#### Scenario: Consultar el catálogo de propuestas
- **WHEN** un consumidor solicita las propuestas iniciales
- **THEN** obtiene los cuatro registros de los públicos acordados, con identificadores únicos y sin una quinta propuesta de detalle
- **AND** puede distinguir los incluidos de los opcionales sin heredar automáticamente condiciones generales a todos los cumpleaños

#### Scenario: Cambiar el nombre representativo de una propuesta
- **WHEN** se sustituye un nombre o slug provisional de un registro
- **THEN** su identificador interno permanece estable y las referencias al registro siguen resolviéndose
- **AND** el cambio de ejemplo no se registra como aprobación de una ruta pública definitiva

### Requirement: Lectura compartida sin duplicar la información

Las futuras previews y páginas de detalle SHALL poder consultar una única fuente del contenido compartido y obtener los valores y su estado editorial. La consulta por un identificador desconocido SHALL indicar ausencia inequívoca, sin sustituirlo por otra propuesta ni crear un registro ficticio.

#### Scenario: Reutilizar un dato actualizado
- **WHEN** cambia un valor de una propuesta en la fuente central y dos consumidores consultan ese registro
- **THEN** ambos reciben el mismo valor actualizado y el mismo estado, sin mantener copias independientes del dato

#### Scenario: Solicitar una propuesta inexistente
- **WHEN** se consulta un identificador que no pertenece al catálogo
- **THEN** el resultado indica que la propuesta no existe y no devuelve por defecto la primera u otra propuesta

### Requirement: Contenido provisional disponible y registrado

La lectura para composición SHALL incluir tanto los valores confirmados como los textos y valores provisionales autorizados por Franco, conservando una distinción explícita entre ellos. Cada unidad provisional SHALL registrar su ubicación, valor representativo y motivo o dato por confirmar; SHALL incluir fuente y responsable de confirmación cuando sean conocidos. Los datos sin un valor utilizable SHALL poder seguir pendientes. Un inventario derivado de la misma fuente SHALL permitir identificar todos los provisionales y pendientes que requieren revisión, sin una segunda lista manual de valores.

#### Scenario: Componer con información todavía no confirmada
- **WHEN** una propuesta contiene un texto confirmado y una duración representativa provisional
- **THEN** la consulta devuelve ambos valores con su estado correspondiente, sin ocultar el provisional ni toda la propuesta
- **AND** el inventario de revisión identifica dónde está la duración provisional, su valor y qué debe confirmarse

#### Scenario: Sustituir un ejemplo por un valor confirmado
- **WHEN** una unidad provisional se reemplaza por su valor confirmado y se actualiza su estado en la fuente central
- **THEN** las consultas devuelven el valor confirmado y el inventario deja de enumerarla como provisional
- **AND** otras unidades todavía pendientes del mismo registro permanecen identificadas

### Requirement: Validación de identidad y referencias del catálogo

La validación del contenido SHALL informar identificadores duplicados y referencias a registros o medios inexistentes, identificando el elemento y la referencia afectados. Una referencia pendiente de selección, representada sin un identificador ficticio, SHALL distinguirse de una referencia rota. El catálogo SHALL admitir que todavía no haya medios finales seleccionados, conservando las relaciones reales que sí existan.

#### Scenario: Detectar identidades o referencias incoherentes
- **WHEN** un catálogo contiene dos elementos con el mismo identificador en su colección o un vínculo a un medio que no existe
- **THEN** la validación informa la incoherencia y los elementos afectados, en lugar de declarar el catálogo válido o escoger un elemento silenciosamente

#### Scenario: Mantener una selección audiovisual pendiente
- **WHEN** no hay todavía medios finales seleccionados y los registros dejan su selección pendiente sin IDs inventados
- **THEN** esa ausencia no se trata como una referencia rota y figura como pendiente cuando requiere revisión
- **AND** al incorporar una referencia a un medio existente, la relación se valida correctamente

### Requirement: Límites de los valores representativos

Los ejemplos provisionales SHALL facilitar composición interna sin aprobar decisiones comerciales, contenido final, rutas, política de precios ni publicación. Un contacto o destino no confirmado SHALL usar una representación claramente provisional sin un número o destino inventado utilizable para contactar a terceros. Las referencias a medios SHALL corresponder a medios reales o permanecer pendientes; no SHALL inventarse archivos, identidades de personas ni contexto de eventos para completar el catálogo.

#### Scenario: Representar un contacto todavía no validado
- **WHEN** el catálogo no dispone del número de WhatsApp aprobado
- **THEN** permite identificar ese pendiente y usar una representación de desarrollo, sin suministrar un número inventado como destino real
- **AND** el registro no se considera contacto confirmado

#### Scenario: Incluir un valor comercial representativo
- **WHEN** se incorpora un precio, capacidad, horario o texto creado como ejemplo de desarrollo
- **THEN** su valor está disponible para composición y está registrado como provisional con su revisión pendiente
- **AND** su presencia no aprueba que un componente definitivo lo muestre ni resuelve la decisión comercial correspondiente
