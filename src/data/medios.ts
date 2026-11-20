import type { Unidad } from './editorial.ts';

type Medio = {
  id: string;
  recurso: { tipo: 'imagen' | 'video'; referencia: string };
  unidades: { textoAlternativo?: Unidad<string>; contexto?: Unidad<string> };
};

// C-04 completará el catálogo con exportaciones web seleccionadas.
export const medios: readonly Medio[] = [];
