# consulta-whatsapp-contextual Specification

## Purpose
Permitir que cada consulta abra una conversación de WhatsApp con el destinatario aprobado y el mensaje que corresponde al punto de origen.

## Requirements

### Requirement: Contacto directo con contexto explícito

El sitio SHALL crear el enlace a WhatsApp a partir del número internacional aprobado y del mensaje aprobado para el ámbito solicitado. La consulta general, «Armá tu propuesta» y cada propuesta SHALL conservar su mensaje. El texto SHALL llegar íntegro, con sus espacios y caracteres especiales. El enlace SHALL abrir un borrador de conversación sin formulario, registro, rastreo de clics, confirmación de envío ni confirmación de reserva.

#### Scenario: Consultar por una propuesta concreta
- **WHEN** un visitante activa la consulta de una propuesta conocida con número y mensaje aprobados
- **THEN** el enlace apunta al destinatario aprobado y el mensaje identifica esa propuesta, incluidos sus acentos y caracteres especiales

#### Scenario: Usar el contacto general o personalizado
- **WHEN** un visitante activa el contacto general o «Armá tu propuesta» con los datos respectivos aprobados
- **THEN** se abre el texto correspondiente a esa acción sin incorporar el nombre ni el ID de otra propuesta

### Requirement: Destino y mensajes pendientes sin enlace activo

El sitio SHALL omitir la acción de WhatsApp cuando el número o mensaje requerido esté pendiente, sea provisional, sea inválido o falte la propuesta solicitada. La revisión local SHALL identificar el estado pendiente y mostrar texto de ejemplo solo como muestra no accionable.

#### Scenario: Faltan confirmaciones o la propuesta no existe
- **WHEN** el número todavía no está confirmado o el mensaje del ámbito es provisional, vacío o inexistente
- **THEN** no se emite un enlace a WhatsApp ni se sustituye su texto por el de otro ámbito
- **AND** en revisión se puede identificar qué dato falta confirmar sin abrir un destino inventado

#### Scenario: El servicio externo no está disponible
- **WHEN** el navegador no consigue abrir WhatsApp
- **THEN** el sitio no muestra ninguna confirmación de conversación, envío ni reserva
