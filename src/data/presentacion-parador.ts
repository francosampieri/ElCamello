import type { Unidad } from './editorial.ts';
import { actividades, instalaciones } from './experiencias.ts';
import { resolverFoto } from './medios.ts';
import { identidad } from './parador.ts';

function paraLectura<T>(unidad: Unidad<T>, revision: boolean) {
  if (unidad.estado === 'confirmado' || (revision && unidad.estado === 'provisional')) return unidad;
}

export function leerPresentacion(revision = false) {
  const { presentacion, fortalezas } = identidad.unidades;
  return {
    fortalezas: paraLectura(fortalezas, revision)?.valor ?? [],
    introduccion: paraLectura(presentacion, revision),
  };
}

function proyectar(espacios: typeof instalaciones, revision: boolean) {
  return espacios.flatMap(({ id, unidades }) => {
    const titulo = paraLectura(unidades.titulo, revision);
    if (!titulo) return [];
    return [{
      id,
      titulo: titulo.valor,
      descripcion: paraLectura(unidades.descripcion, revision),
      temporada: unidades.temporada && paraLectura(unidades.temporada, revision)?.valor,
    }];
  });
}

export function leerEspacios(revision = false) {
  return {
    instalaciones: proyectar(instalaciones, revision),
    actividades: proyectar(actividades, revision),
  };
}

const vistas = [
  { id: 'predio-atardecer', rotulo: 'El predio al atardecer' },
  { id: 'relieve-montana', rotulo: 'El entorno de montaña' },
];

export function fotosDeContexto(existe: (referencia: string) => boolean) {
  return vistas.flatMap(vista => {
    const foto = resolverFoto(vista.id);
    return foto && existe(foto.referencia) ? [{ ...vista, ...foto }] : [];
  });
}
