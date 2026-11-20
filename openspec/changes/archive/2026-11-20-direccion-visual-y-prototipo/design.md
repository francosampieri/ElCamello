# Design

## Context

La página `/` es una base Astro con nombre y ubicación. C-02 aporta datos de identidad, instalaciones y propuestas con estados editoriales, aunque todavía no se presentan en la página. El inventario local ofrece fotografías horizontales candidatas y videos muestreados en formato vertical. La producción de portada definitiva requiere tomas nuevas H/V y cuenta con una etapa propia. Las referencias visuales proceden del [Discovery](../../../../discovery/discovery.md) y del [documento de dirección visual](../../../../documentacion/fuentes/direccion-visual.md).

## Goals / Non-Goals

**Goals:** revisar en navegador una composición real a dos escalas y decidir, con evidencia, si una interacción añade contexto sin perjudicar lectura o navegación. El resultado entrega criterios para diseño, adquisición de medios e implementación posterior.

**Non-Goals:** composición final de la principal, rutas comerciales, navegación global, contactos reales, selección editorial definitiva, alojamiento audiovisual, montaje final H/V, adopción de una biblioteca o comprobación integral de lanzamiento.

## Decisions

### D-01 — Ruta de desarrollo separada

Proponemos `/prototipo-visual/` bajo `npm run dev`. La página y sus recursos se habilitan únicamente en desarrollo local. Usar un registro de ruta condicionado al entorno de desarrollo o un mecanismo equivalente sencillo que permita verificar ausencia de HTML y medios de prueba en `dist/`. Evitar colocar recursos del prototipo en `public/`, que se copia a la salida estática. Mantener el CSS específico bajo su propio contenedor para poder extraer solo las decisiones que se aprueben.

| Opción | Qué permite | Coste o límite |
|---|---|---|
| Ruta local dedicada, recomendada | Conservar la home y probar DOM, carga y navegación en el stack real | Hay que señalar la URL y comprobar el aislamiento del build |
| Home temporal | Abrir la muestra directamente desde `/` | Mezcla prototipo con el sitio y genera trabajo de reversión y conflictos con la integración final |
| Maqueta remota | Compartir composición con facilidad si se autoriza | La captura no demuestra teclado, tacto o fluidez local y requiere decidir qué material puede salir del equipo |

Un boceto local basta para avanzar. Stitch puede asistir la composición si su acceso funciona y se autoriza la operación remota pertinente. La consulta directa ya comprobada no se presupone equivalente a herramientas nativas en el chat ni a permiso de subir fotos. El prototipo navegable local es la evidencia para decidir comportamiento.

### D-02 — Identidad candidata y medios reemplazables

Probar una portada con tipografía, escala, contraste y encuadre coherentes con el tono cercano del parador. Usar marca aprobada si está disponible, o componer con el nombre del catálogo. Ofrecer una presentación breve basada en las unidades editoriales existentes, con provisionales identificables durante la revisión. Definir variables por rol, como fondo, texto, acento y espacios, para que se puedan ajustar sin cambiar cada bloque. Probar una familia de sistema o una fuente gratuita con licencia comprobada. La primera facilita una prueba sin descargas y la segunda puede dar carácter propio a cambio de verificar legibilidad, origen y peso. Proponer las muestras en el apply y registrar la devolución de Franco y de la dueña.

La portada funcionará desde el primer HTML con una foto preparada o un respaldo estático. Un clip corto y silencioso puede probar reproducción si existe un tramo representativo revisado y apto para uso interno. Esa opción permite observar política de autoplay y encuadre, pero agrega transferencia y puede falsear conclusiones si el plano es inadecuado. La foto sola es suficiente para decidir jerarquía y lectura, y deja la reproducción como comprobación no realizada. Si se usa un clip, montarlo como mejora opcional, mantener la foto ante error o bloqueo y pausar al salir de vista. En móvil, usar recorte deliberado para revisión, registrar qué pierde y traducirlo a un pedido de plano para C-04. Los originales se conservan fuera de Git. No atribuir una propuesta o tipo de evento a personas que aparezcan sin contexto confirmado.

### D-03 — Galería táctil con mejora progresiva

| Opción | Ventaja | Coste o riesgo |
|---|---|---|
| Galería horizontal, recomendada | Swipe nativo, controles claros y bajo coste técnico con pocas fotos. Permite seguir bajando en cualquier momento | Puede pasar desapercibida si no se anuncia el avance. Requiere probar el gesto diagonal |
| Secuencia vinculada al scroll | Las imágenes pueden ilustrar el texto en el momento de lectura | Es más sensible a velocidad, alturas y disponibilidad de encuadres. Requiere trabajar el recorrido y la variante estática |
| Scroll con sección fija | Crea una escena más marcada y una progresión controlada | Introduce mayor riesgo de atrapar el desplazamiento, alargar el recorrido y forzar ajustes por dispositivo |

Empezar con una lista semántica accesible, elementos con anclas o desplazamiento nativo y mejoras de avance puntuales. Los controles explícitos, cuando aporten, serán enlaces nativos operables por teclado o botones inicializados junto con su comportamiento. Con JavaScript desactivado quedarán disponibles las anclas, la lectura y el gesto nativo. Permitir recorrer el resto por scroll vertical. Reducir transiciones y evitar pasos de navegación obligatorios con `prefers-reduced-motion`. Las observaciones archivadas sobre Casa Angelina y Bellevoire orientan el contraste entre gesto y avance por scroll. No establecen adopción de componentes, efecto de portada ni necesidad de 3D/React. Si un fallo concreto justifica otra técnica o dependencia, presentar el análisis y la evidencia antes de incorporarla.

### D-04 — Comprobación y traspaso

Durante el apply, proponer a Franco dispositivos representativos y criterios observables para distribuir la eventual prueba en dispositivo real. Comenzar en navegador de escritorio con viewport amplio y emulación móvil táctil, registrar navegador, dimensiones y condiciones. Revisar avance con toque y teclado, foco, gesto vertical, anclas, movimiento reducido, fallo de medio, JS desactivado y salida estática. Si hay video apto incluido, probar pausa al salir del viewport. Registrar evidencia de carga y fluidez cuando se mida, con red y hardware, y distinguir cualquier medición emulada de la validación en dispositivos reales. No dar un umbral cuantitativo por aprobado. Mantener el baseline de C-01/C-02 y usar TDD para el comportamiento verificable nuevo, complementado por observación visual para encuadre, ritmo y legibilidad. La revisión describe qué trasladar a C-04 (encuadres y tomas), C-05 (variables y navegación), C-09 (respaldo y efecto) y C-12 (pruebas de calidad).

## Risks / Trade-offs

- Un fotograma provisional puede funcionar en escritorio y recortar el punto de interés en celular → revisar ambos encuadres y documentar qué repetir en la nueva toma.
- Un efecto puede verse correcto en captura y entorpecer el uso → comprobar interacción, teclado, gesto y movimiento reducido en ejecución.
- Un recurso de prueba puede quedar en el build → excluir sus rutas y archivos por construcción y comprobar el resultado generado.
- Confundir prueba interna con validación de marca o contenido → conservar estados editoriales y registrar las confirmaciones pendientes.

## Migration Plan

El prototipo se prueba en desarrollo y no requiere despliegue ni migración de datos. Se puede retirar su variante local y sus recursos de ensayo sin afectar el contenido compartido. Los changes posteriores adoptarán únicamente las decisiones de diseño aprobadas, con los medios definitivos preparados en su etapa.

## Open Questions

- PA-03: decidir si la galería candidata y la transición de portada aportan suficiente claridad e impacto una vez revisada la muestra.
- PA-13: confirmar marca, escala, tipografía y adaptación con Franco y la dueña después de ver el prototipo.
- PA-14: confirmar disponibilidad de dispositivos reales y presupuestos de carga/fluidez para la verificación del sitio final. El prototipo registra lo que haya podido medir y cómo.
