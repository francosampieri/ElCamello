# Parador El Camello — Instrucciones para Agentes

Instrucciones específicas del repositorio `web/`, con destino operativo Codex. `CLAUDE.md` conserva una copia idéntica por compatibilidad; modificar ambos juntos. La carpeta contenedora `ElCamello/` incluye los originales y herramientas externas al repositorio.

## Stack Tecnológico

| Capa | Tecnología aprobada | Versión |
|---|---|---|
| Páginas y generación del sitio | Astro, con contenido generado antes de la visita. | Se seleccionará y fijará al iniciar la implementación. |
| Datos y comportamiento | TypeScript. | Se fijará según compatibilidad del proyecto. |
| Estilos | CSS estándar, variables compartidas y estilos por componente. | Según soporte de los navegadores objetivo por definir. |
| Componentes interactivos | React cuando aporte una necesidad concreta. | Se fijará si se incorpora la integración. |
| Contenido | Archivos TypeScript compartidos entre principal y propuestas. | Sin motor de base de datos. |
| Fotografías | Selección dentro del repositorio, procesada con herramientas de imágenes de Astro. | Configuración por definir al implementar. |
| Videos y animación | Herramientas y distribución pendientes. | Sin proveedor ni librería elegidos. |

Detalle: [descripción general](knowledge-base/02_descripcion_general.md). El lanzamiento es una web pública de presentación: principal y cuatro páginas de propuestas, con venta personalizada mediante enlaces contextuales a WhatsApp. No incluye backend, base de datos, cuentas, CMS, agenda, reservas automáticas, pagos ni analítica.

## Base de Conocimiento

Leer los documentos relevantes antes de proponer o implementar. La KB distingue decisiones aprobadas, propuestas técnicas y pendientes; las confirmaciones posteriores prevalecen sobre antecedentes históricos.

| Archivo | Cuándo leerlo |
|---|---|
| [Índice y precedencia](knowledge-base/README.md) | Recuperar el contexto y localizar fuentes. |
| [01 — Visión y objetivos](knowledge-base/01_vision_y_objetivos.md) | Propósito, alcance e impacto visual. |
| [02 — Descripción general](knowledge-base/02_descripcion_general.md) | Stack e integraciones aprobadas. |
| [03 — Actores y roles](knowledge-base/03_actores_y_roles.md) | Públicos y responsabilidades comerciales/editoriales. |
| [04 — Modelo de datos](knowledge-base/04_modelo_de_datos.md) | Contenidos TypeScript y referencias a medios; no una base de datos. |
| [05 — Reglas de negocio](knowledge-base/05_reglas_de_negocio.md) | Oferta, comunicación, publicación y medios. |
| [06 — Funcionalidades](knowledge-base/06_funcionalidades.md) | Historias y criterios de aceptación. |
| [07 — Flujos principales](knowledge-base/07_flujos_principales.md) | Recorridos del visitante y revisión/publicación. |
| [08 — Arquitectura propuesta](knowledge-base/08_arquitectura_propuesta.md) | Estructura técnica, componentes y recursos. |
| [09 — Decisiones y supuestos](knowledge-base/09_decisiones_y_supuestos.md) | Decisiones cerradas y sus motivos. |
| [10 — Preguntas abiertas](knowledge-base/10_preguntas_abiertas.md) | Qué falta confirmar, quién decide y qué etapa bloquea. |

No exigir resolver todos los pendientes de prioridad Alta antes de C-01: respetar el momento indicado en cada fila. No publicar cifras, condiciones, precios, nombres, contactos ni contextos de imágenes sin la validación correspondiente. Franco redacta y la dueña confirma el contenido comercial.

## Skills Disponibles

Estos son roles de trabajo dentro de Codex, no agentes o servicios adicionales obligatorios. Cargar solo las skills pertinentes; los ejemplos y recomendaciones de una skill no cambian el stack ni autorizan instalaciones.

| Rol / tarea | Skills | Ubicación |
|---|---|---|
| Dirección visual y UI | `frontend-design` | [.agents/skills/frontend-design/SKILL.md](.agents/skills/frontend-design/SKILL.md) |
| Animaciones e interacción | `animate` | [.agents/skills/animate/SKILL.md](.agents/skills/animate/SKILL.md) |
| Revisión UX y accesibilidad | `web-design-guidelines` | [.agents/skills/web-design-guidelines/SKILL.md](.agents/skills/web-design-guidelines/SKILL.md) |
| Exploración y comprobación en navegador | `playwright-cli` | [.agents/skills/playwright-cli/SKILL.md](.agents/skills/playwright-cli/SKILL.md) |
| Explorar / proponer / implementar | `openspec-explore`, `openspec-propose`, `openspec-apply-change` | `.agents/skills/<nombre>/SKILL.md` |
| Revisar artifacts / sincronizar / archivar | `openspec-update-change`, `openspec-sync-specs`, `openspec-archive-change` | `.agents/skills/<nombre>/SKILL.md` |
| Fundación y documentación | `active-orchestrator`, `discovery-research`, `kb-creator`, `roadmap-generator` | Skills globales; resolver desde el catálogo y registro actuales. |
| Capacidades e instrucciones del proyecto | `find-skills`, `agents-md-generator` | Globales: carpetas `find-skill` y `agent-instruction`, respectivamente. |
| Utilidades puntuales | `openai-docs`, `review-agent`, `skill-installer` | Skills de sistema de Codex; comprobar disponibilidad actual. |

> Los compact rules de cada skill los resuelve el orquestador desde `.atl/skill-registry.md` (generado por `skill-registry`; no versionado — no está en el repo).

El registro es un cache local. Si falta después de clonar o cambiar de equipo, regenerarlo desde las skills y fuentes existentes; no copiar rutas absolutas de otra máquina ni asumir que las skills globales están instaladas.

**Herramientas:** Astro Docs MCP es la fuente principal para Astro; Context7, para las demás bibliotecas. Stitch apoya el diseño; Chrome DevTools, el diagnóstico. Playwright CLI y una suite de tests persistente son capacidades diferentes. Comprobar las herramientas expuestas en el chat: configuración, instalación y conexión verificada no garantizan disponibilidad actual. Ver [configuración MCP](documentacion/herramientas/configuracion-mcp.md), [Playwright local](documentacion/herramientas/playwright-cli-local.md) e [inventario de skills](documentacion/herramientas/instalacion-skills.md).

## Roadmap de Changes

El índice completo está en [CHANGES.md](CHANGES.md): **13 changes en cinco fases**. La dirección visual y el prototipo se trabajan temprano, como parte central del producto.

- C-01: cimientos.
- C-02 a C-05: contenido, dirección visual, medios y estructura.
- C-06 a C-09: secciones y páginas de la experiencia.
- C-10 a C-12: revisión, integración/SEO y verificación.
- C-13: publicación y entrega.

Cadena estructural de ocho changes: `C-01 → C-03 → C-04 → C-09 → C-10 → C-11 → C-12 → C-13`. No es una estimación temporal ni permite omitir las otras ramas. Consultar en el índice todas las dependencias y el ownership; C-11 integra la composición final de la principal.

**Primer change:** C-01, nombre CLI `foundation-setup`, rama `feature/change_1`. Los IDs documentales C-01, C-02, etc. corresponden a ramas `feature/change_1`, `feature/change_2`, etc.; no son los nombres kebab-case usados por OpenSpec.

**Antes de proponer o iniciar C-01:** recordar a Franco conectar correctamente Stitch según [el procedimiento de activación](documentacion/herramientas/configuracion-mcp.md#activar-stitch-cuando-corresponda). La conexión sigue aplazada: no pedir la clave en el chat ni activarlo por cuenta propia. Cuando Franco esté listo, guardar `STITCH_API_KEY` fuera de Git, habilitar el servidor, recargar y verificar `initialize` y `tools/list`. Es preparación de diseño, no una dependencia del build de Astro.

## Reglas Duras (específicas del proyecto)

Estas reglas fueron confirmadas con Franco. Complementan las instrucciones activas del agente; no se presupone la existencia de un archivo global de Claude.

1. **Una rama por change.** NUNCA trabajar un change en otra rama → usar `feature/change_x`, con su número sin cero inicial. Comprobar rama y estado de Git antes de modificar; no trasladar, descartar ni mezclar trabajo ajeno para cambiar de rama. Consultar cualquier conflicto con cambios existentes.
2. **Control humano de Git.** NUNCA commitear, pushear ni mergear sin pedido o confirmación explícita para esa operación. Aprobar un diseño, una propuesta o su implementación no concede ese permiso. Presentar el resultado revisable antes de solicitarlo.
3. **Consultar e inferir lo mínimo.** Ante decisiones abiertas de alcance, diseño, tecnología o datos, explicar opciones, recomendar una y esperar la respuesta. Agrupar preguntas relacionadas. Las tareas mecánicas dentro de decisiones ya aprobadas pueden avanzar; no reabrir decisiones cerradas ni inventar hechos para completar huecos.
4. **TypeScript estricto.** Usar modo estricto y evitar `any`. Ante una excepción necesaria, explicar el motivo y consultarlo antes de introducirla.
5. **Interactividad justificada.** Partir de Astro, CSS estándar y JavaScript puntual. Consultar antes de incorporar React o una biblioteca adicional, explicando qué necesidad concreta resuelve. No instalar frameworks sugeridos por referencias o skills por rutina.
6. **Movimiento accesible.** Respetar la preferencia de movimiento reducido. Mantener texto, navegación y contacto utilizables cuando una animación no se ejecute; no obligar a completar una secuencia de scroll para acceder a la información.
7. **Calidad visual y móvil.** El impacto visual y la comprensión de la oferta son centrales. Verificar composición e interacción en móvil y desktop; una captura o composición de Stitch no prueba fluidez. Adaptar referencias a la identidad cálida de El Camello y validar las decisiones visuales con Franco.
8. **Recursos gratuitos y medios protegidos.** Usar únicamente recursos gratuitos. NUNCA comprar recursos. No contratar servicios sin autorización explícita. Incorporar al repo solo fotografías seleccionadas y preparadas; conservar originales y archivos de edición fuera, sin modificarlos. La distribución de videos sigue pendiente y requiere decisión basada en pruebas.
9. **Alcance y contenido confirmados.** Mantener las cuatro propuestas y el último bloque «Armá tu propuesta», sin quinta página. Centralizar contenido en TypeScript. No añadir seguimiento, formularios, sistemas o promesas comerciales fuera del alcance aprobado. Registrar las dudas y resolverlas en la etapa correspondiente antes de publicar.
10. **Documentación en español.** Redactar instrucciones y artifacts en español; conservar encabezados estructurales y términos normativos que exija el esquema OpenSpec activo.
11. **Recordatorio de actualización documental.** Al finalizar una sesión, un change, una corrección u otro trabajo que amerite actualizar la KB o documentación pertinente, revisar su impacto documental y recordárselo explícitamente a Franco: indicar qué documentos se actualizaron o cuáles requieren actualización y por qué. Realizar las actualizaciones necesarias que ya estén autorizadas; el recordatorio no las reemplaza. Si faltan datos o decisiones por confirmar, señalar el pendiente y consultarlo sin inventar información.

## Flujo de Trabajo

1. Recuperar el contexto y leer la KB pertinente, estas reglas y [CHANGES.md](CHANGES.md). Si corresponde C-01, dar primero el recordatorio de Stitch.
2. Consultar `openspec list --json` y, para un change existente, `openspec status --change "<nombre>" --json`. El CLI es la fuente de estado; los checks del roadmap no lo sustituyen. Revisar dependencias y pendientes aplicables.
3. Comprobar Git y trabajar en la rama `feature/change_x` correspondiente antes de escribir artifacts o implementación del change. Con trabajo previo que impida hacerlo sin mezclar cambios, consultar cómo proceder; no crear commits para despejarlo.
4. Usar la skill OPSX correspondiente. Por ejemplo, `/opsx:propose foundation-setup` prepara artifacts revisables; no autoriza automáticamente `/opsx:apply foundation-setup`. Crear estructuras y obtener instrucciones mediante el CLI, no manualmente.
5. Resolver las skills del dominio y las decisiones pendientes con Franco. Implementar y verificar el alcance autorizado según la gobernanza y las instrucciones de pruebas activas, sin tests vacíos ni afirmaciones de calidad sin evidencia.
6. Presentar cambios, comprobaciones y pendientes. Commits, pushes y merges necesitan autorización explícita. Archivar mediante `/opsx:archive <nombre>` cuando se solicite y se cumplan sus instrucciones; archivar no implica autorización para Git.
7. Actualizar documentación y estado que realmente correspondan, comunicar su situación según la regla 11, mantener sincronizados `AGENTS.md`/`CLAUDE.md` y conservar en memoria las decisiones y el próximo paso.

Este documento no inicia un change, no crea ramas y no autoriza publicar el sitio. La configuración externa de publicación se prepara para revisión antes de ejecutarla, conforme a C-13 y la gobernanza aplicable.
