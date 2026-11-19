# Flujos principales

Los recorridos se apoyan en las [funcionalidades](06_funcionalidades.md). No hay flujo de autenticación, pago o reserva automática.

## Flujo 1: Descubrimiento desde Instagram o un enlace general

**Disparador:** abrir la dirección principal. **Actor:** visitante, prioritariamente desde celular.

1. El navegador muestra la portada y su respaldo mientras prepara el video correspondiente al formato.
2. El visitante puede navegar o continuar con la presentación textual y El Parador.
3. Explora espacios, actividades y los bloques de las cuatro propuestas.
4. Entra al detalle de una propuesta o utiliza el contacto disponible.
5. Si elige «Armá tu propuesta», pasa a una consulta general por WhatsApp.

**Casos de error o alternativas:** si el video no carga o no se reproduce, el respaldo y la información permiten continuar. El visitante puede usar navegación directa sin completar las animaciones. La carga de una galería no debe bloquear el contacto.

## Flujo 2: Entrada directa a una propuesta

**Disparador:** enlace compartido por el responsable comercial, redes o buscador. **Actor:** organizador.

1. La página específica presenta la propuesta con contexto suficiente por sí misma.
2. El visitante consulta imágenes, descripción, incluidos, extras, condiciones y FAQs.
3. Puede explorar otras propuestas o volver a la principal.
4. El botón de consulta abre WhatsApp con el mensaje de esa propuesta.

**Casos de error:** si una imagen falla, el texto debe conservar la información necesaria. Una ruta inexistente necesita una salida hacia principal o propuestas durante implementación. No se sustituyen datos faltantes por condiciones inventadas.

## Flujo 3: Consulta y cierre comercial

**Disparador:** pulsar un enlace de WhatsApp. **Actores:** interesado y responsable comercial.

```text
Visitante → Página o bloque → Enlace con mensaje contextual → WhatsApp
                                                           ↓
                                             Atención y cotización humana
                                                           ↓
                                             Acuerdo o reserva fuera de web
```

La web prepara el enlace, pero el visitante puede modificar o no enviar el mensaje. La atención completa fecha, tamaño de grupo, servicios, disponibilidad y condiciones. El sitio no lee la conversación ni confirma su resultado. Si WhatsApp o el dispositivo no pueden abrir el enlace, no se muestra una reserva confirmada ni se retiene al visitante en un formulario alternativo no acordado.

## Flujo 4: Producción y aprobación de contenido

**Disparador:** crear una página o recibir una modificación. **Actores:** Franco y dueña.

1. Franco consulta la base aprobada y registra las dudas en [10](10_preguntas_abiertas.md).
2. Prepara textos y selecciona medios; identifica incluidos, extras y afirmaciones pendientes.
3. La dueña valida hechos, condiciones e identidades del material.
4. Franco actualiza los módulos TypeScript y revisa los lugares donde se reutilizan.
5. Comprueba presentación y contacto en móvil y desktop antes de publicar el cambio.

**Casos de error:** una corrección contradictoria vuelve a validación; un dato pendiente no pasa a público como confirmado. El contexto comercial se toma de la dueña y del relevamiento, no del nombre de una carpeta o la apariencia de un grupo.

## Flujo 5: Preparación de medios y publicación

**Disparador:** material elegido para una composición. **Actor:** Franco, con validación de la dueña.

1. Selecciona desde originales externos, sin alterarlos; reproduce los clips antes de elegirlos.
2. Prepara imágenes para el repositorio y genera versiones adecuadas mediante Astro.
3. Para portada, integra las nuevas tomas horizontal y vertical y sus respaldos; decide distribución de video al medir las exportaciones.
4. Genera y revisa el sitio, enlaces, textos, recursos y preparación SEO.
5. Publica en el alojamiento previsto y comprueba el dominio y las páginas públicas.

Los accesos, versiones y comandos concretos se documentarán al crear la aplicación. Una publicación no incorpora analítica ni agenda de forma implícita. El despliegue no está realizado por esta KB.
