import { confirmado, origenComercial, pendiente, provisional, relevamiento } from './editorial.ts';
import type { Unidad, Vínculos } from './editorial.ts';

const medios = () => pendiente('Seleccionar medios en C-04.', { responsable: 'Franco' });

type Espacio = Vínculos & {
  id: string;
  unidades: { titulo: Unidad<string>; descripcion: Unidad<string>; medios: Unidad<readonly string[]> };
};

function espacio(id: string, titulo: string, descripcion: string): Espacio {
  return {
    id,
    unidades: {
      titulo: confirmado(titulo, relevamiento),
      descripcion: provisional(descripcion, 'Revisar la descripción para la web.', origenComercial),
      medios: medios(),
    },
  };
}

export const instalaciones = [
  espacio('sector-acuatico', 'Pileta y sector acuático', 'Pileta, toboganes y jacuzzi de agua fría para la temporada de verano.'),
  espacio('quinchos-y-parrillas', 'Parrillas y espacios para comer', 'Dos parrillas, mesas y sillas para compartir la comida del grupo.'),
  espacio('cocina', 'Cocina equipada', 'Horno, horno pizzero, heladeras, vajilla y utensilios.'),
  espacio('habitaciones', 'Habitaciones', 'Cuatro habitaciones con 16 camas como referencia del relevamiento. El pernocte se consulta por separado.'),
  espacio('servicios', 'Servicios del predio', 'Espacios cubiertos, baños y estacionamiento.'),
];

export const actividades = [
  espacio('caminata', 'Caminata a la cueva', 'Un recorrido detrás del parador. Las condiciones del paseo se coordinan según el grupo.'),
  espacio('palestra', 'Palestra', 'Un espacio para sumar escalada a la jornada recreativa.'),
  espacio('juegos-de-mesa', 'Ping pong, metegol y pool', 'Juegos para compartir durante el encuentro.'),
  espacio('deportes', 'Beach vóley y tejo', 'Opciones al aire libre para armar partidos en grupo.'),
  espacio('cama-elastica', 'Cama elástica', 'Una de las opciones recreativas del predio.'),
];
