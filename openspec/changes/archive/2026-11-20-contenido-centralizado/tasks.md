# Tasks

Franco aprobó la propuesta y autorizó apply. Estas tareas registran la implementación y su [verificación](verification.md).

## 1. Base verificable y contrato de lectura compartida

- [x] 1.1 Comprobar `feature/change_2`, inventario y staging previo; revisar las decisiones técnicas de esta propuesta y registrar el baseline con `npm run verify`. Si existen fallos previos, reportarlos antes de modificar código. Confirmar que los nuevos tests usan el runner y las rutas reales, sin extender la excepción TDD de C-01.
- [x] 1.2 Escribir primero un test de consulta de una propuesta conocida que falle por ausencia del comportamiento previsto; crear el mínimo de tipos, datos y consulta para obtener GREEN. Agregar el caso desconocido como triangulación y comprobar ausencia explícita sin fallback. Verificar nuevamente tras refactorizar y documentar en el README el contrato de lectura compartida y su diferencia frente a una página o ruta pública.

## 2. Unidades editoriales y revisión de provisionales

- [x] 2.1 Diseñar mediante tests el comportamiento de lectura de valores confirmados y provisionales, y de un pendiente sin valor; obtener RED, implementar las unidades editoriales necesarias y obtener GREEN sin filtrar ejemplos ni ocultar registros enteros. Triangular con una propuesta parcialmente confirmada y comprobar que ambas clases de valor conservan su estado.
- [x] 2.2 Escribir tests del inventario derivado: localizar un provisional con su valor y revisión necesaria; confirmar esa unidad y comprobar que sale de la lista mientras otro pendiente permanece. Implementar la derivación desde la misma fuente sin duplicar valores en otra lista. Documentar con un ejemplo cómo editar, sustituir y confirmar una unidad, y ejecutar sus tests después de cualquier refactor.

## 3. Catálogo inicial y referencias coherentes

- [x] 3.1 Completar los cuatro registros con IDs estables y los módulos de identidad/contacto, instalaciones, actividades y FAQs desde las fuentes disponibles, usando textos y valores provisionales registrados para lo no confirmado. Verificar cuatro públicos, separación de incluidos/opcionales y consulta general fuera del catálogo de detalle. Agregar primero los tests de los comportamientos nuevos: cambio de nombre sin perder ID y una actualización central leída igual por dos consumidores. Documentar que los ejemplos no resuelven nombres, rutas, precios ni condiciones definitivas.
- [x] 3.2 Escribir tests de validación para catálogo coherente, ID duplicado, referencia inexistente y selección de medios pendiente sin ID ficticio; implementar diagnósticos que identifiquen entidad y referencia, obteniendo GREEN y triangulación. Permitir catálogo de medios vacío hasta C-04 y no importar originales, miniaturas ni archivos inventados. Documentar cómo distinguir selección pendiente de referencia rota.
- [x] 3.3 Verificar con casos significativos que un contacto no validado quede representado sin destino inventado utilizable, y que un valor comercial provisional siga disponible y registrado como tal. Implementar el mínimo si falta comportamiento, sin crear enlaces, UI ni política de publicación; documentar cómo localizar y reemplazar estos ejemplos y conservar los pendientes comerciales del relevamiento.

## 4. Integración de la verificación y entrega

- [x] 4.1 Incorporar las pruebas de contenido al flujo de scripts con el runner nativo propuesto, manteniendo los smokes HTTP de C-01; documentar los comandos exactos en README y comprobar cada suite por separado y su integración en `npm test`. Comprobar que un fallo real de contenido produzca salida no cero y no se omita esa suite en `verify`; retirar la alteración temporal propia y verificar la restauración. No instalar dependencias nuevas sin necesidad y autorización.
- [x] 4.2 Ejecutar `npm run verify` sobre el catálogo real, revisar referencias y el inventario de provisionales, y registrar la evidencia TDD real por comportamiento. Comprobar que no cambió la página mínima, que no se incorporaron rutas, servicios ni medios fuera de alcance y que no quedaron defectos o procesos de prueba propios. Actualizar de forma autónoma KB, README y roadmap con el estado comprobado, manteniendo PA-04 a PA-10 abiertas donde corresponda; no marcar C-02 implementado ni archivar antes de completar sus criterios, y no hacer commit, push o merge sin permiso.
