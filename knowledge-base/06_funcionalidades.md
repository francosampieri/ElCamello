# Funcionalidades

Historias del lanzamiento y criterios propuestos para comprobar el alcance aprobado. Los criterios no seleccionan efectos concretos ni imponen puntuaciones de rendimiento. Las reglas citadas están en [05](05_reglas_de_negocio.md).

## Épica 1: Descubrir el parador

### US-001 — Portada audiovisual

**Como** visitante, **quiero** ver una presentación audiovisual del lugar **para** imaginar la experiencia y comprender su propuesta inicial.

**Criterios de aceptación**:
- [ ] Se utiliza el montaje adecuado al formato de pantalla y las tomas nuevas acordadas.
- [ ] La portada mantiene legible su texto, no reproduce música y dispone de una imagen de respaldo.
- [ ] El video se pausa cuando deja de ser visible; si no puede reproducirse, la presentación conserva información y acceso a navegación.
- [ ] La transición de salida elegida permite continuar el recorrido en celular y desktop.

**Reglas relacionadas:** RN-ME-01, RN-UX-01, RN-UX-02.

### US-002 — Comprender el lugar y sus posibilidades

**Como** organizador, **quiero** conocer fortalezas, instalaciones y actividades **para** evaluar si el predio sirve para mi grupo.

**Criterios de aceptación**:
- [ ] La presentación textual aparece después de portada y comunica exclusividad, personalización, paisaje y actividades.
- [ ] El Parador aparece antes de propuestas y muestra espacios y actividades con identificación comprensible.
- [ ] Las habitaciones se muestran como instalación; el pernocte no parece incluido automáticamente.
- [ ] La selección audiovisual tiene contexto confirmado y distingue actividades estacionales o futuras.

**Reglas relacionadas:** RN-OF-02, RN-OF-05, RN-ME-03, RN-PU-02.

## Épica 2: Encontrar una propuesta

### US-003 — Explorar propuestas desde la principal

**Como** visitante, **quiero** reconocer opciones para mi ocasión **para** entrar en la propuesta que me interesa.

**Criterios de aceptación**:
- [ ] Hay cuatro bloques con imagen, título, resumen y acceso a sus páginas propias.
- [ ] Adultos e infantiles se distinguen; primaria se dirige a padres organizadores.
- [ ] El último bloque es «Armá tu propuesta», o equivalente, y dirige a WhatsApp.
- [ ] La navegación permite encontrar propuestas sin completar una secuencia visual obligatoria.

**Reglas relacionadas:** RN-OF-01, RN-UX-01, RN-UX-02.

### US-004 — Consultar el detalle de una propuesta

**Como** organizador, **quiero** entender experiencia, incluidos, opcionales y condiciones **para** decidir si inicio una consulta.

**Criterios de aceptación**:
- [ ] Cada página explica la propuesta sin exigir pasar primero por la principal.
- [ ] Contiene imágenes pertinentes, descripción, incluidos, opcionales, condiciones confirmadas y FAQs propias.
- [ ] Utiliza los mismos datos centrales que su bloque en la principal.
- [ ] No publica límites universales, precios o servicios todavía pendientes como si estuvieran confirmados.

**Reglas relacionadas:** RN-OF-03, RN-OF-04, RN-OF-06, RN-TE-03.

## Épica 3: Resolver dudas y consultar

### US-005 — Continuar por WhatsApp

**Como** interesado, **quiero** abrir una conversación con contexto **para** consultar disponibilidad y organizar mi evento.

**Criterios de aceptación**:
- [ ] Los botones usan el número aprobado y abren un mensaje contextual con la propuesta correspondiente.
- [ ] Los contactos generales y «Armá tu propuesta» no atribuyen una propuesta específica incorrecta.
- [ ] No hay formulario previo, registro, confirmación automática de reserva ni seguimiento de clics.
- [ ] Los enlaces se verifican en celular y desktop; un fallo externo no genera una falsa confirmación dentro del sitio.

**Reglas relacionadas:** RN-CO-01, RN-CO-02, RN-TE-02.

### US-006 — Conocer al equipo y resolver información práctica

**Como** organizador, **quiero** conocer quién recibe al grupo, cómo llegar y las respuestas frecuentes **para** consultar con mayor confianza.

**Criterios de aceptación**:
- [ ] Nosotros presenta origen del nombre, experiencia familiar y retratos identificados por la dueña.
- [ ] Ubicación y acceso muestran datos verificados y el mecanismo de consulta del mapa que se acuerde.
- [ ] Hay FAQs generales y acceso al perfil oficial de Instagram.
- [ ] La historia y los límites se comunican conforme a las fuentes confirmadas.

**Reglas relacionadas:** RN-PU-01, RN-PU-03, RN-UX-03.

## Épica 4: Publicar y mantener

### US-007 — Disponer de páginas públicas preparadas para buscadores

**Como** responsable del parador, **quiero** páginas identificables y accesibles por enlace **para** compartir las propuestas y permitir su descubrimiento orgánico.

**Criterios de aceptación**:
- [ ] Las páginas contienen información útil en HTML y metadatos propios acordes a su contenido.
- [ ] Las rutas, enlaces internos, imágenes y títulos se verifican antes de publicar.
- [ ] Se prepara la indexación y se comprueba que la configuración de publicación no la impida involuntariamente.
- [ ] La publicación conserva el alcance sin agenda ni herramientas de analítica.

**Reglas relacionadas:** RN-PU-04, RN-TE-02.

### US-008 — Actualizar información de forma coherente

**Como** Franco, **quiero** mantener datos compartidos y componentes reutilizables **para** realizar los cambios acordados con la dueña sin contradicciones entre páginas.

**Criterios de aceptación**:
- [ ] Los datos comunes de propuestas se editan en los módulos TypeScript definidos.
- [ ] Los borradores o datos pendientes se distinguen de la información aprobada para publicación.
- [ ] Las fotografías finales están seleccionadas y preparadas; los originales permanecen fuera del repositorio.
- [ ] Los cambios pasan por revisión editorial y comprobación de las páginas afectadas.

**Reglas relacionadas:** RN-TE-01, RN-TE-03, RN-PU-01, RN-ME-02.

## Evolución posterior

La agenda y la analítica con posibles reportes mensuales no forman parte de estas historias de lanzamiento. Su eventual incorporación requiere definir comportamiento, costo y condiciones como trabajo posterior. Los pendientes de esta versión están en [10](10_preguntas_abiertas.md).
