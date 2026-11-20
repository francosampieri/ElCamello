import type { Unidad } from './editorial.ts';
import { confirmado, provisional } from './editorial.ts';

type Medio = {
  id: string;
  recurso: { tipo: 'imagen' | 'video'; referencia: string };
  unidades: { textoAlternativo?: Unidad<string>; contexto?: Unidad<string> };
};

function foto(id: string, alternativo: string, origen: string, uso: string): Medio {
  return {
    id,
    recurso: { tipo: 'imagen', referencia: `${id}.webp` },
    unidades: {
      textoAlternativo: confirmado(alternativo, origen),
      contexto: provisional(uso, 'Comprobar el recorte y su aplicación en la sección definitiva.', {
        fuente: origen, responsable: 'Franco',
      }),
    },
  };
}

const originales = '../fotos/Fotos/Instalaciones/';
export const medios: readonly Medio[] = [
  foto('predio-atardecer', 'Árboles, guirnaldas y mesas del predio al atardecer', originales + 'Paisaje/DSC_0080.jpg', 'Vista general para El Parador.'),
  foto('pileta-deck', 'Pileta con deck de madera y árboles al pie de la montaña', originales + 'Pileta/7fdbcac0-30c2-4fb6-afee-b97da6ad6dcc.jpg', 'Vista general del sector acuático.'),
  foto('relieve-montana', 'Relieve montañoso y árboles bajo el cielo de Cacheuta', originales + 'Paisaje/_DSC0119.jpg', 'Entorno para El Parador, sin atribuir un nombre al cerro.'),
];

export function resolverFoto(id: string) {
  const medio = medios.find(item => item.id === id && item.recurso.tipo === 'imagen');
  const alt = medio?.unidades.textoAlternativo;
  if (medio && alt?.estado === 'confirmado') {
    return { referencia: medio.recurso.referencia, textoAlternativo: alt.valor };
  }
}
