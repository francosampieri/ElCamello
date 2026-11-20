# Proposal

## Why

La base Astro ya funciona, pero las futuras secciones todavía no tienen una fuente compartida de contenido. Necesitamos organizar información confirmada y completar lo faltante con contenido provisional trazable para poder diseñar sin duplicar datos ni confundir ejemplos con decisiones comerciales definitivas.

## What Changes

- Definir tipos y módulos TypeScript para identidad, contacto, cuatro propuestas, instalaciones, actividades, FAQs y referencias a medios.
- Crear cuatro registros con IDs internos estables, incluidos y opcionales separados, independientes de sus nombres y rutas públicas definitivas.
- Registrar en la misma fuente el estado de cada unidad editorial: confirmada, provisional o pendiente sin valor utilizable. La lectura para composición devolverá todos los valores disponibles, incluidos los provisionales, junto con su estado.
- Incorporar una consulta derivada que enumere qué contenido provisional o pendiente hay que reemplazar, dónde está y por qué; no mantener una segunda lista manual de valores.
- Validar identidad y referencias del catálogo, y preparar pruebas de selección, reutilización y trazabilidad con el runner existente.

Franco eligió explícitamente mostrar todo lo confirmado y completar lo desconocido con textos y valores inventados para desarrollo, registrados como provisionales. Esta decisión reemplaza el filtrado de borradores considerado inicialmente; no aprueba esos valores como hechos comerciales ni su publicación definitiva.

## Capabilities

### New Capabilities

- `contenido-compartido`: catálogo editorial único, consultas reutilizables, contenido provisional trazable y validación de referencias.

### Modified Capabilities

Ninguna. El contrato de sitio estático de C-01 se conserva; se ampliará su verificación para incluir el comportamiento del contenido, sin cambiar la página mínima.

## Impact

La implementación añadirá módulos en `src/data/` y tipos compartidos cuando aporten claridad, consultas puras, validaciones y tests. Se ampliarán los comandos documentados para ejecutar pruebas de contenido junto con los smokes HTTP existentes, sin nuevas dependencias previstas.

No incluye UI, páginas de propuestas, rutas definitivas, enlaces activos a WhatsApp, aprobación del copy final, selección o traslado de fotos, alojamiento de video, CMS, backend, analítica ni despliegue. Los medios sin selección real podrán permanecer pendientes y sin referencia; no se inventarán fotografías, identidades de personas ni números de contacto utilizables.
