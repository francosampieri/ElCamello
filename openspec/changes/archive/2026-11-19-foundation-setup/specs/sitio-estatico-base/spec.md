# Spec Delta

## Purpose

Proporcionar una base de sitio estático que permita comprobar la identidad de El Camello y desarrollar las siguientes secciones mediante una instalación y verificación reproducibles.

## ADDED Requirements

### Requirement: Página mínima servida como contenido estático

El sitio SHALL ofrecer en `/` una página HTML en español que identifique a Parador El Camello mediante título y encabezado principal, incluya una región principal y sea legible sin ejecutar JavaScript. Una ruta inexistente SHALL devolver estado HTTP 404, sin presentar la página inicial como respuesta exitosa de esa ruta.

#### Scenario: Acceso a la página inicial generada
- **WHEN** se genera el sitio y un visitante solicita `/` desde la vista previa del resultado
- **THEN** recibe HTTP 200 y un documento con idioma español, título, región principal y encabezado que identifican a Parador El Camello
- **AND** la identidad está presente en el HTML recibido sin ejecutar scripts

#### Scenario: Acceso a una ruta que no existe
- **WHEN** un visitante solicita una ruta que no fue generada por el sitio
- **THEN** recibe HTTP 404 y no una respuesta HTTP 200 que simule una página existente

### Requirement: Flujo reproducible de trabajo

El repositorio SHALL permitir instalar las dependencias fijadas y ejecutar desarrollo, comprobación de tipos, generación estática y vista previa mediante comandos documentados, sin credenciales ni servicios externos de aplicación. Una reinstalación desde el lockfile SHALL conservar las resoluciones de dependencias registradas.

#### Scenario: Preparación desde un checkout sin dependencias instaladas
- **WHEN** una persona usa las versiones de entorno documentadas e instala desde el lockfile
- **THEN** puede comprobar los tipos, generar el sitio y servir su salida siguiendo el README, sin configurar credenciales

#### Scenario: Reinstalación desde el mismo lockfile
- **WHEN** se repite la instalación limpia con el mismo entorno y lockfile
- **THEN** se conservan las resoluciones registradas y la verificación vuelve a terminar correctamente

### Requirement: Verificación con resultado significativo

El flujo de verificación SHALL comprobar tipos, generación del sitio y el comportamiento HTTP especificado. SHALL finalizar con un código distinto de cero si falla cualquiera de esas comprobaciones y no comunicar éxito completo.

#### Scenario: Verificación satisfactoria
- **WHEN** la aplicación cumple los contratos de tipos, generación y respuesta HTTP
- **THEN** el comando de verificación termina con código cero

#### Scenario: Fallo durante la verificación
- **WHEN** una comprobación de tipos, generación o comportamiento detecta un error
- **THEN** el flujo termina con código distinto de cero e identifica la comprobación que falló
