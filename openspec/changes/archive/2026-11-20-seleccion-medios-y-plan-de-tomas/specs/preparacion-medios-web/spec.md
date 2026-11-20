# Spec Delta

## Purpose

Preparar material visual trazable y utilizable en las secciones del sitio, con un pedido de tomas que permita producir y evaluar después la portada definitiva.

## ADDED Requirements

### Requirement: Selección y revisión trazable de medios

La selección SHALL registrar origen, destino previsto y estado editorial. Las fotos elegidas SHALL revisarse al tamaño de uso. Los tramos de video elegidos SHALL reproducirse y sus limitaciones quedar asentadas. Personas y eventos SHALL validarse con la dueña antes de atribuirles contexto comercial.

#### Scenario: Revisar un candidato que solo tiene fotogramas de inventario
- **WHEN** un tramo se considera para clip o fotograma de uso web
- **THEN** se registra el tramo reproducido y se comprueba nitidez, movimiento y encuadre, además de audio cuando sea evaluable
- **AND** si la reproducción o parte de la evaluación no está disponible, el registro lo indica y conserva el tramo como candidato

#### Scenario: Revisar una foto grupal sin contexto confirmado
- **WHEN** un candidato muestra personas y su evento o contexto no está validado
- **THEN** la atribución permanece pendiente con responsable de confirmación
- **AND** se distingue una alternativa neutra o de revisión interna de una fotografía aprobada para la propuesta

### Requirement: Fotografías web resolubles y comprobadas

El sitio SHALL incorporar solo derivados de las fotografías seleccionadas, con identificadores resolubles y texto alternativo según su uso. Una prueba de salida SHALL comprobar que el recurso generado existe, conserva la orientación y las dimensiones adecuadas y se presenta en el encuadre previsto.

#### Scenario: Incorporar una fotografía seleccionada a una composición
- **WHEN** se añade una fotografía preparada al catálogo y a una composición de verificación
- **THEN** su referencia resuelve al derivado correcto y la salida optimizada muestra dimensiones, orientación y encuadre comprobados
- **AND** la fuente y la decisión editorial son rastreables sin copiar el original al repositorio

#### Scenario: Conservar una relación todavía pendiente
- **WHEN** una sección carece de un recurso validado para su uso
- **THEN** se documenta el faltante o la alternativa interna y el catálogo conserva el estado correspondiente sin introducir una referencia rota

### Requirement: Pedido de tomas de portada y faltantes por sección

El pedido SHALL enumerar escenas nuevas con pares horizontal y vertical grabados consecutivamente, indicaciones de luz y momento, planos tranquilos, espacio de lectura y respaldo estático. La lista de faltantes SHALL indicar sección, motivo, responsable y alternativa o decisión pendiente.

#### Scenario: Preparar el pedido que se llevará a producción
- **WHEN** Franco revisa el pedido de portada
- **THEN** puede identificar cómo componer cada par, dónde prever texto y qué respaldo estático capturar
- **AND** el pedido describe el tono y planos tranquilos y prevé una exportación sin música

#### Scenario: Priorizar material para Nosotros y propuestas
- **WHEN** una sección carece de fotos contextualizadas o material suficiente
- **THEN** Franco cuenta con una lista que indica qué confirmar primero y qué pedir si el material existente no alcanza
- **AND** la producción nueva queda diferenciada de una alternativa provisional de composición

### Requirement: Procedimiento para comparar exportaciones de portada

El traspaso a C-09 SHALL definir qué medir en horizontal y vertical para comparar legibilidad, encuadre, calidad, peso, carga y reproducción con respaldo. Los presupuestos de rendimiento y la distribución SHALL conservar su estado pendiente hasta tener evidencia y revisión.

#### Scenario: Evaluar más adelante el primer montaje
- **WHEN** C-09 recibe tomas y prepara exportaciones candidatas
- **THEN** puede repetir una comparación con condiciones, métricas y resultados anotados junto con ambos respaldos
- **AND** la evaluación distingue resultados de prueba de una decisión de alojamiento o de publicación
