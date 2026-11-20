# Tasks

## 1. Base de ejecución y presentación

- [x] 1.1 Verificar que la rama de ejecución incluya los commits dependientes de C-04 y C-05 antes de introducir código. Ejecutar `npm run verify` y registrar el baseline y las versiones verificadas sin alterar servidores existentes.
- [x] 1.2 Escribir primero pruebas de lectura de presentación y límites de la proyección editorial. Implementar el componente Astro y su ID estable con los roles visuales Aventura. Comprobar en HTML inicial exclusividad, personalización, paisaje y actividades, así como la distinción de lo confirmado y lo provisional en revisión. Documentar el contrato de composición.

## 2. El Parador y recorrido

- [x] 2.1 Escribir primero pruebas para grupos, habitaciones y estado editorial. Construir El Parador desde el catálogo y confirmar que instalaciones y actividades se distinguen, el pernocte queda como adicional, se identifica la temporada cuando se conoce y se omiten afirmaciones públicas pendientes. Registrar cada dato incorporado con su fuente.
- [x] 2.2 Escribir primero pruebas de selección de fotos y respaldo cuando no se resuelve un medio. Construir la galería de contexto con fotos optimizadas de C-04 y su variante estática. Verificar rótulos, `alt`, texto disponible para elementos sin fotos y exclusión de asignaciones sin contexto. Documentar qué vista prueba cada recurso y qué sigue pendiente.
- [x] 2.3 Probar el recorrido con teclado y tacto emulado en móvil y escritorio. Verificar señales de continuidad, foco visible, salida al contenido siguiente, uso sin JavaScript y con movimiento reducido y comportamiento ante una imagen que no carga. Registrar pruebas y tradeoffs de la variante; anotar dispositivos físicos no probados.

## 3. Revisión e integración

- [x] 3.1 Escribir primero el caso de revisión HTTP y de exclusión del build. Incorporar `/revision-parador/` con ambos componentes, anclas, layout y enlaces vigentes. Verificar orden, acceso directo por fragmento, ausencia de destinos inexistentes y CTA según la disponibilidad de C-05. Documentar el camino de revisión para Franco.
- [x] 3.2 Ejecutar `npm run verify` y confirmar que la ruta de revisión queda fuera del build mientras principal y vistas previas anteriores conservan sus contratos. Documentar evidencia TDD y visual, decisiones pendientes y handoff a C-11 con IDs y orden previstos. Actualizar la KB y el roadmap según lo verificado.
