import { confirmado, origenComercial, pendiente, provisional, relevamiento } from './editorial.ts';
import type { Unidad, Vínculos } from './editorial.ts';

const medios = () => pendiente('Seleccionar medios en C-04.', { responsable: 'Franco' });

type Espacio = Vínculos & {
  id: string;
  unidades: { titulo: Unidad<string>; descripcion: Unidad<string>; medios: Unidad<readonly string[]>; temporada?: Unidad<string> };
};

function espacio(id: string, titulo: string, descripcion: string | Unidad<string>, fotos?: readonly string[], temporada?: string): Espacio {
  return {
    id,
    unidades: {
      titulo: confirmado(titulo, relevamiento),
      descripcion: typeof descripcion === 'string'
        ? provisional(descripcion, 'Revisar la descripción para la web.', origenComercial)
        : descripcion,
      medios: fotos ? provisional(fotos, 'Comprobar el encuadre en las instalaciones.', { responsable: 'Franco' }) : medios(),
      ...(temporada ? { temporada: confirmado(temporada, relevamiento) } : {}),
    },
  };
}

export const instalaciones = [
  espacio('sector-acuatico', 'Pileta y sector acuático', 'Pileta, toboganes y jacuzzi de agua fría.', ['pileta-deck'], 'Temporada de verano'),
  espacio('quinchos-y-parrillas', 'Parrillas y espacios para comer', 'Dos parrillas, mesas y sillas para compartir la comida del grupo.'),
  espacio('cocina', 'Cocina equipada', 'Horno, horno pizzero, heladeras, vajilla y utensilios.'),
  espacio('habitaciones', 'Habitaciones', confirmado('El pernocte es una posibilidad adicional para consultar por separado.', 'knowledge-base/05_reglas_de_negocio.md#rn-of-05')),
  espacio('servicios', 'Servicios del predio', 'Espacios cubiertos, baños y estacionamiento.'),
];

export const actividades = [
  espacio('caminata', 'Caminata a la cueva', 'Un recorrido detrás del parador. Las condiciones del paseo se coordinan según el grupo.'),
  espacio('palestra', 'Palestra', 'Un espacio para sumar escalada a la jornada recreativa.'),
  espacio('juegos-de-mesa', 'Ping pong, metegol y pool', 'Juegos para compartir durante el encuentro.'),
  espacio('deportes', 'Beach vóley y tejo', 'Opciones al aire libre para armar partidos en grupo.'),
  espacio('cama-elastica', 'Cama elástica', 'Una de las opciones recreativas del predio.'),
];
