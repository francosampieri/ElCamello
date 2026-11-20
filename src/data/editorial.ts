type Origen = { fuente?: string; responsable?: string };

export const relevamiento = 'documentacion/fuentes/relevamiento-parador.md';
export const estructura = 'documentacion/estructura-web.md';
export const origenComercial = { fuente: relevamiento, responsable: 'La dueña' };

export type Unidad<T> = Origen & (
  | { estado: 'confirmado'; valor: T }
  | { estado: 'provisional'; valor: T; revisar: string }
  | { estado: 'pendiente'; revisar: string }
);

export function confirmado<T>(valor: T, fuente: string): Unidad<T> {
  return { estado: 'confirmado', valor, fuente };
}

export function provisional<T>(valor: T, revisar: string, origen: Origen = {}): Unidad<T> {
  return { ...origen, estado: 'provisional', valor, revisar };
}

export function pendiente(revisar: string, origen: Origen = {}): Unidad<never> {
  return { ...origen, estado: 'pendiente', revisar };
}

export type RegistroEditorial = {
  id: string;
  unidades: Record<string, Unidad<unknown>>;
};

export const coleccionesReferenciables = ['propuestas', 'instalaciones', 'actividades', 'faqs', 'medios'] as const;
type ColeccionReferenciable = typeof coleccionesReferenciables[number];

export type Vínculos = {
  referencias?: Partial<Record<Exclude<ColeccionReferenciable, 'medios'>, readonly string[]>>;
};

export type CatalogoReferenciable = Record<ColeccionReferenciable, readonly RegistroReferenciable[]>;

type RegistroReferenciable = RegistroEditorial & Vínculos & {
  unidades: RegistroEditorial['unidades'] & { medios?: Unidad<readonly string[]> };
};

type ProblemaCatalogo =
  | { tipo: 'id-duplicado'; ubicacion: string }
  | { tipo: 'referencia-inexistente'; ubicacion: string; destino: string };

export function revisarReferencias(catalogo: CatalogoReferenciable): ProblemaCatalogo[] {
  const problemas: ProblemaCatalogo[] = [];
  const indices = new Map<ColeccionReferenciable, Set<string>>();

  for (const coleccion of coleccionesReferenciables) {
    const ids = new Set<string>();
    for (const { id } of catalogo[coleccion]) {
      if (ids.has(id)) problemas.push({ tipo: 'id-duplicado', ubicacion: `${coleccion}.${id}` });
      ids.add(id);
    }
    indices.set(coleccion, ids);
  }

  function revisar(ubicacion: string, coleccion: ColeccionReferenciable, ids: readonly string[]) {
    for (const id of ids) {
      if (!indices.get(coleccion)?.has(id)) {
        problemas.push({ tipo: 'referencia-inexistente', ubicacion, destino: `${coleccion}.${id}` });
      }
    }
  }

  for (const coleccion of coleccionesReferenciables) {
    for (const { id, unidades, referencias } of catalogo[coleccion]) {
      const ubicacion = `${coleccion}.${id}`;
      if (unidades.medios && 'valor' in unidades.medios) {
        revisar(`${ubicacion}.medios`, 'medios', unidades.medios.valor);
      }
      for (const destino of coleccionesReferenciables) {
        if (destino === 'medios') continue;
        const ids = referencias?.[destino];
        if (ids) revisar(`${ubicacion}.referencias.${destino}`, destino, ids);
      }
    }
  }
  return problemas;
}

type PendienteEditorial = Exclude<Unidad<unknown>, { estado: 'confirmado' }> & { ubicacion: string };

export function inventarioEditorial(colecciones: Record<string, readonly RegistroEditorial[]>): PendienteEditorial[] {
  const inventario: PendienteEditorial[] = [];
  for (const [coleccion, registros] of Object.entries(colecciones)) {
    for (const { id, unidades } of registros) {
      for (const [campo, unidad] of Object.entries(unidades)) {
        if (unidad.estado !== 'confirmado') {
          inventario.push({ ...unidad, ubicacion: `${coleccion}.${id}.${campo}` });
        }
      }
    }
  }
  return inventario;
}
