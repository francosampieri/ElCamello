export type Destino = { id: string; etiqueta: string; ruta: string; fragmento?: string };
export type EnlaceNavegacion = Pick<Destino, 'id' | 'etiqueta'> & { href: string };

export function destinosHabilitados(destinos: readonly Destino[], habilitados: readonly string[]): EnlaceNavegacion[] {
  const ids = new Set(habilitados);
  return destinos.filter(destino => ids.has(destino.id)).map(({ id, etiqueta, ruta, fragmento }) => ({
    id,
    etiqueta,
    href: fragmento ? ruta + '#' + encodeURIComponent(fragmento) : ruta,
  }));
}

export const inicio = { id: 'inicio', etiqueta: 'Inicio', ruta: '/' } satisfies Destino;
