# Design

## Context

[La propuesta](proposal.md) separa la creación de las secciones de su composición en la principal. C-02 mantiene identidad, instalaciones y actividades en un catálogo editorial compartido. C-04 aporta tres fotografías optimizadas y su resolución en `b98b04f`. C-05 incorpora `BaseLayout`, destinos habilitados y contacto condicionado en `49e3cc5`. Ambos commits están publicados en ramas distintas y todavía deben incorporarse a la base de ejecución de C-06. La propuesta se prepara leyendo sus contratos sin fusionar ramas.

La [revisión de C-03](../2026-11-20-direccion-visual-y-prototipo/revision-visual.md) comprobó galería horizontal con tacto emulado, teclado y variante estática. La [identidad Aventura](../../../../knowledge-base/11_identidad_visual.md) orienta color, composición y carácter tipográfico. PA-03 mantiene abierta la validación del efecto definitivo.

## Goals / Non-Goals

**Goals:** componentes componibles, datos con procedencia, una manera de probarlos hoy y un contrato simple de integración mañana.

**Non-Goals:** edición de la principal, activación de destinos inexistentes, portada, propuestas, contacto comercial nuevo, video, obtención de medios o bibliotecas de animación nuevas.

## Decisions

### D-01 — Dos secciones componibles con revisión aislada

Usar componentes Astro independientes con encabezados semánticos e IDs estables `presentacion` y `el-parador`. Identidad alimenta la presentación. Los grupos de instalaciones y actividades alimentan El Parador. Compartir variables de Aventura y la estructura de C-05. Elegir esta separación frente a un componente monolítico: permite ubicar cada bloque en C-11 sin duplicar datos ni arrastrar el contenedor de prueba. La alternativa monolítica reduce archivos al comienzo, pero acopla orden, navegación y contenido.

Proponer `/revision-parador/` como entrada de desarrollo, siguiendo el mecanismo de rutas de revisión ya usado. Mostrar ambos componentes en orden con acceso directo por fragmento, indicación de revisión y los destinos reales disponibles. Editar la principal ahora simplificaría encontrar la muestra, pero duplicaría la tarea de integración de C-11 y mezclaría otros changes en curso. El contrato de entrega es portada → presentación → El Parador → propuestas. El orden y los enlaces se probarán en la muestra sin simular que portada o propuestas ya están integradas.

### D-02 — Galería horizontal progresiva con alternativa estática

| Alternativa | Ventaja | Tradeoff |
| --- | --- | --- |
| Galería horizontal nativa | Reutiliza evidencia de C-03 y deja que un gesto táctil recorra imágenes mientras el scroll vertical continúa. Admite enlaces a vistas y poco código. | Requiere señalar que hay más vistas y comprobar medidas y foco en pantallas angostas. |
| Rejilla en escritorio y lista apilada en móvil | Muestra cada vista en orden sin pedir interacción para descubrir su contenido. | Reduce el gesto expresivo previsto y ocupa más altura. |
| Scroll secuenciado con animación | Puede conectar visualmente imágenes y texto. | Aumenta la complejidad del foco, el movimiento reducido y la salida. C-03 no lo evaluó para este contenido. |

Recomendar horizontal nativa para la primera prueba, con controles explícitos operables por teclado cuando haga falta para llegar a cada vista, anclas y foco visible. En escritorio aprovechar el espacio para mostrar varias vistas cuando entren. En móvil debe verse o explicarse que el recorrido continúa. Con movimiento reducido y ausencia de JavaScript se conserva acceso en orden lógico sin exigir desplazamiento animado. La rejilla o lista sirve si la evaluación con contenido real muestra problemas de descubrimiento o lectura. Una animación secuenciada solo entraría por decisión posterior basada en pruebas. Las secciones deben permitir seguir por scroll o por navegación vigente sin quedar atrapadas.

### D-03 — Catálogo editorial y fotos con asignación verificable

Derivar la vista pública de unidades confirmadas de identidad e instalaciones. La revisión puede mostrar texto provisional autorizado, trazado por sección y diferenciado de lo confirmado. Usar los textos de fortaleza y nombres verificados como base. Para temporada y pernocte, registrar el hecho con su fuente en el catálogo si el dato disponible consta únicamente dentro de un texto provisional. No promover el texto completo por conveniencia ni publicar cifras y condiciones que requieran aprobación.

Resolver fotos mediante el catálogo C-04 y optimización de Astro. El predio al atardecer y el relieve son vistas de contexto. La pileta con deck puede ilustrar el sector acuático cuando su uso y encuadre estén confirmados. Quinchos, habitaciones u otros elementos sin foto apta conservan el rótulo y el texto confirmado, sin tomar prestadas imágenes de un espacio distinto. Una galería de contexto separada permite mostrar las fotos ya seleccionadas sin simular una foto por elemento. Mantener `alt` para lo que muestra la foto y un rótulo útil para identificarla.

Reutilizar el contrato de C-05 para destinos y contacto. Los enlaces solo acompañan rutas y estados habilitados. PA-08 sigue controlando la habilitación de WhatsApp.

### D-04 — Evidencia del componente en HTML y en navegador

Agregar pruebas de comportamiento para salida inicial, grupos, proyección editorial, fotos faltantes y rutas de ensayo excluidas de la salida. Seguir la evidencia RED/GREEN y triangulación del repositorio. Con el navegador existente, comprobar foco, anclas, tacto emulado, contraste, reducción de movimiento, continuidad vertical, JavaScript desactivado y falla de imagen. Registrar el tamaño de pantalla y distinguir emulación de un dispositivo físico. La composición, los presupuestos de rendimiento y la aprobación comercial permanecen en sus respectivos changes.

## Risks / Trade-offs

- Galería difícil de descubrir en móvil → verificar señal de continuidad, anclas y una rejilla/lista de respaldo.
- Detalles comerciales parecen garantizados por una foto o descripción → resolver estado y contexto por unidad y mantener visible la diferencia en revisión.
- El contenido provisional de revisión llega al build → aislar la ruta y comprobar la salida estática.
- Las dependencias no están en la rama de ejecución → incorporar C-04 y C-05 con autorización antes de aplicar, evitando duplicar sus contratos durante C-06.

## Migration Plan

El apply parte de una base que contenga ambos cambios dependientes. Construir componentes y revisión local y verificar el build. C-11 incorpora los componentes en su orden y habilita las anclas que existan. Si se retira la muestra, la principal conserva su contrato porque C-06 no modifica su composición.

## Open Questions

- PA-03 mantiene abierta la elección definitiva tras probar la galería con contenido real.
- PA-07, PA-09 y PA-10 conservan sus responsables y decisiones pendientes. La disponibilidad fotográfica o editorial no bloquea la lectura de lo confirmado.
