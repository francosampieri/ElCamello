# El Camello - Selección inicial de material y faltantes

> Convención de rutas: `../fotos/Fotos` y `../tmp/` se interpretan desde la raíz del repositorio `web/`. Son recursos externos al repositorio. Los enlaces entre documentos se resuelven desde el documento que los contiene.

Revisión del 18 de noviembre de 2026. La estructura confirmada del sitio está en [estructura-web.md](<../estructura-web.md>).

## Alcance real

Fuente revisada: `../fotos/Fotos`.

- 236 archivos, 3.50 GiB: 169 imágenes y 67 archivos de video.
- Las 169 imágenes fueron revisadas visualmente por subagentes mediante hojas de contacto.
- Los videos se agruparon en 60 series de revisión después de detectar siete copias idénticas por nombre, tamaño y SHA-256. No se presupone que esta agrupación encuentre toda posible copia con otro nombre.
- Se extrajeron y revisaron tres fotogramas por serie, al 20 %, 50 % y 80 % de la duración: 180 muestras, sin errores de extracción. Los archivos representativos suman unos 20 minutos y 50 segundos, pero **no se vieron íntegramente ni se evaluó el audio**.
- Todas las series de video muestreadas se presentan en vertical. Varias tienen dimensiones codificadas horizontales y una rotación: hay que considerar el encuadre visible, no solo el ancho y alto del stream.
- Los originales permanecen sin modificar. Las miniaturas de revisión y los fotogramas de 480 píxeles de ancho no son las exportaciones finales para la web.

Franco confirmó que los 3.50 GiB corresponden a la selección ya filtrada de la entrega original de más de 30 GB: eliminó videos que no iban a resultar útiles. La diferencia de tamaño no implica que falten archivos de esta selección.

## Conclusión para empezar el diseño

Hay material suficiente para construir una primera selección de **El Parador, instalaciones, actividades y galerías internas**. También existen horizontales de buenas dimensiones para composiciones amplias: el material fotográfico no es exclusivamente vertical.

La necesidad principal es elegir bien y evitar repeticiones. Hay copias exactas, variantes del mismo encuadre, fotos de estaciones distintas y series de decoración que corresponden a un mismo evento. Más archivos no equivalen automáticamente a más variedad.

Las páginas de propuestas necesitan más contexto comercial que la sección de instalaciones: se puede mostrar un espacio o una actividad con claridad, pero la imagen de un grupo no demuestra que haya sido una empresa, una salida de primaria o una experiencia específica.

**Toda la portada se grabará nuevamente en horizontal y vertical**, con tomas consecutivas de cada escena para mantener el momento y la luz. Esta selección no reemplaza esa decisión.

## Primera selección fotográfica

Rutas relativas a `../fotos/Fotos`. Son candidatos para comenzar a componer; la selección final depende del espacio de diseño y de revisar el original al tamaño de salida.

| Uso | Archivo | Por qué priorizarlo |
|---|---|---|
| Presentar el predio | `Instalaciones/Paisaje/DSC_0080.jpg` | Horizontal de 6000 x 4000, exterior al atardecer con árboles, guirnaldas y espacios reconocibles. |
| Contexto de montaña | `Instalaciones/Paisaje/_DSC0119.jpg` | Horizontal de 6000 x 4000; permite mostrar el entorno. El cliente debe confirmar qué cerro aparece antes de nombrarlo. |
| Atmósfera y naturaleza | `Instalaciones/Paisaje/DSC_0028.jpg` | Horizontal de 6000 x 4000 con hamaca y árboles. Útil para variar el ritmo visual. |
| Pileta e instalaciones | `Instalaciones/Pileta/7fdbcac0-30c2-4fb6-afee-b97da6ad6dcc.jpg` | Horizontal de 4160 x 2773 que relaciona pileta, deck, vegetación y montaña. Tiene una copia exacta en Paisaje. |
| Espacios de encuentro | `Instalaciones/Quincho/IMG_5221.HEIC` | Horizontal con grupo usando las mesas; aporta escala. El tipo de evento necesita confirmación. |
| Living | `Instalaciones/Living/IMG_8935.HEIC` | Vertical con mesa, ventanas y ambiente interior. Complementar con una vista del sofá/pool. |
| Habitaciones | `Instalaciones/Dormitorios/20250417_120914_Original.JPG` | Vertical luminosa y descriptiva. Confirmar a qué habitación corresponde. |
| Actividad e interacción | `Actividades/Metegol-PingPong-Pool/_DSC0017.jpg` | Horizontal de 6000 x 4000 con personas jugando; buena escena de encuentro. |
| Palestra | `Actividades/Palestra/_DSC1632.jpg` | Horizontal de 6000 x 4000, muestra la actividad y su contexto. También hay verticales útiles en la misma serie. |
| Caminata | `Actividades/Caminata/DSC_0602.jpg` | Horizontal de 3872 x 2592, grupo y paisaje. No deducir dificultad o recorrido solo por la foto. |
| Vóley | `Actividades/Voley/_DSC0059.jpg` | Acción y entorno en un encuadre casi cuadrado, adaptable a tarjetas. |
| Cumpleaños | `Propuestas/Cumpleaños/IMG_5634.HEIC` | Torta y ambientación con el exterior al fondo. Elegir una variante principal, sin repetir toda la serie. |
| Cumpleaños infantiles | `Propuestas/Cumpleaños/IMG_5614.HEIC` | Decoración temática infantil con paisaje. Sirve como ejemplo de ambientación de un evento, no como prueba de un extra incluido. |

## Videos y fotogramas para revisar primero

Los tiempos son puntos inspeccionados, no cortes definitivos. Antes de elegir un clip hay que reproducir el tramo; antes de usar una foto fija hay que extraerla del original a resolución adecuada y comprobar nitidez y color.

| Archivo | Puntos de inspección | Aplicación |
|---|---|---|
| `Instalaciones/Living/IMG_8934.MOV` | 4.535 s y 7.256 s | Interior, pool, mesa y ventanas. Buen candidato a fotogramas verticales y galería del living. |
| `Instalaciones/Paisaje/IMG_0056(1).MOV` | 8.400 s | Vista de pileta para complementar la fotografía fija. |
| `Instalaciones/Pileta/IMG_5214.MOV` | 5.315 s | Escena grupal en el agua; confirmar contexto antes de asignarla a una propuesta. |
| `Actividades/Cama Elastica/IMG_0128.MOV` | 5.482 s, 13.705 s y 21.928 s | Actividad con cama elástica; ayuda a cubrir una actividad sin fotos independientes. Confirmar la modalidad/equipamiento vigente. |
| `Actividades/Tobogan/IMG_5222.MOV` | 2.224 s, 5.560 s y 8.896 s | Vista de contexto, descenso y llegada. Probar fotogramas antes de pedir fotos nuevas de esta actividad. |
| `Actividades/Dron/DJI_20250223195603_0008_D.MP4` | 15.382 s, 38.455 s y 61.528 s | Perspectivas del predio para internas o referencia para la nueva producción, sin sustituir la nueva portada. |
| `Propuestas/Escolares/EB47EAFA-583E-4F75-9ED9-7CD9461640F5 Copy.mov` | 4.020 s | Escena grupal de movimiento al aire libre. Puede acompañar experiencias de grupo; confirmar el contexto antes de asignarla a primaria o empresas. |
| `Propuestas/Escolares/IMG_2674.MOV` | 2.085 s | Explicación frente a un grupo sentado. Apoyo posible para una experiencia coordinada, sin deducir edades, institución o rol de la persona que habla. |

## Cobertura por página o sección

| Destino | Estado de la base visual | Qué falta resolver |
|---|---|---|
| El Parador | Suficiente para una primera composición. | Selección coherente de luz y estación; evitar repetir copias. |
| Instalaciones | Bien representadas pileta, quinchos e interiores. | Generales de habitaciones/living si el diseño las necesita; cocina completa, acceso y baños. |
| Actividades | Buena serie de juegos, palestra, vóley y caminata. Los videos amplían tobogán y cama elástica. | Elegir fotogramas nítidos a tamaño final; confirmar contexto de actividad y disponibilidad. |
| Cumpleaños de adultos | Hay celebración, decoración y apoyo de espacios/actividades. | Identificar eventos y obtener variedad de experiencia, no solo torta/decoración. |
| Cumpleaños infantiles | Hay decoración específica y actividades que pueden acompañar. | Escenas del cumpleaños y su dinámica, identificadas por el cliente. |
| Empresas | No se identificó material específicamente acreditado como jornada empresarial. | Primero pedir contexto de lo existente; si no alcanza, solicitar escenas propias de la experiencia. |
| Compañeros de primaria | La carpeta Escolares y las escenas de grupos requieren contexto. | Confirmar correspondencia con primaria y con la propuesta organizada por familias. |
| Nosotros | Hay personas y fotos de grupos, sin identificación del equipo confirmada. | Retrato elegido por la dueña y una imagen familiar identificada por el cliente. |

## Pedido de material, por prioridad

1. **Portada:** nueva producción completa en ambos formatos, según la decisión acordada. Preparar una lista de escenas antes de grabar.
2. **Nosotros:** retrato principal de la dueña y foto familiar identificada, adecuados al tono cercano de la sección.
3. **Contexto de propuestas:** preguntar qué eventos aparecen en los archivos seleccionados. No hace falta repetir una producción si el material correcto ya existe y solo falta identificarlo.
4. **Empresas y primaria:** completar únicamente si, después de esa identificación, no hay escenas específicas suficientes.
5. **Instalaciones:** generales ordenadas de habitaciones, living y cocina si las composiciones actuales no explican el espacio. Buscar acceso/estacionamiento y baños en otras fuentes antes de pedir nuevas tomas.
6. **Actividades:** revisar los clips seleccionados antes de volver a grabar tobogán, cama elástica y otros espacios ya documentados en video.

Los puntos 2 a 6 pueden resolverse durante el desarrollo; no impiden comenzar con la estructura y las primeras composiciones. Los incluidos y las condiciones de cada servicio se toman del relevamiento confirmado, no se deducen de lo que aparece en una imagen.

## Informes detallados y trazabilidad

- [Instalaciones: fotos, clips y faltantes](<instalaciones.md>).
- [Actividades: fotos, clips y faltantes](<actividades.md>).
- [Propuestas y reels](<propuestas-reels.md>).
- [Inventario completo de archivos](<inventario-archivos.csv>).

Los metadatos y fotogramas de inspección están en `../tmp/media-review/global-videos`. Las hojas de contacto se llaman `Actividades-01.jpg`, `Instalaciones-01.jpg`, `Propuestas-01.jpg`, `Reels-01.jpg`, etc. Estas vistas son auxiliares; la web debe trabajar desde las fuentes.

Hay archivos HEIC y un NEF cuya firma real es JPEG. También hay PNG que son capturas con bandas negras. La extensión y el número de píxeles, por sí solos, no certifican la calidad del original.
