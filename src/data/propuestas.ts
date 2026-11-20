import { confirmado, estructura, origenComercial, pendiente, provisional, relevamiento } from './editorial.ts';
import type { Unidad, Vínculos } from './editorial.ts';

export type Propuesta = Vínculos & {
  id: string;
  unidades: {
    titulo: Unidad<string>;
    slug: Unidad<string>;
    publico: Unidad<string>;
    resumen: Unidad<string>;
    descripcion: Unidad<string>;
    incluidos: Unidad<string[]>;
    opcionales: Unidad<string[]>;
    duracion: Unidad<string>;
    capacidad: Unidad<string>;
    precio?: Unidad<{ importe: number; moneda: 'ARS'; por: 'persona' }>;
    mensajeWhatsApp: Unidad<string>;
    medios: Unidad<string[]>;
  };
};

function ejemplo<T>(valor: T, revisar: string) {
  return provisional(valor, revisar, origenComercial);
}

const medios = () => pendiente('Seleccionar medios en C-04.', { responsable: 'Franco' });

export const propuestas: readonly Propuesta[] = [
  {
    id: 'empresas',
    unidades: {
      titulo: ejemplo('Team building en la montaña', 'Confirmar el nombre comercial.'),
      slug: ejemplo('eventos-para-empresas', 'Confirmar el slug público.'),
      publico: confirmado('Recursos Humanos de empresas', relevamiento),
      resumen: ejemplo('Una jornada al aire libre para compartir y jugar en equipo.', 'Revisar el texto de la tarjeta.'),
      descripcion: ejemplo('El grupo tiene el parador para sí y participa en actividades deportivas organizadas. La jornada puede cerrar con una entrega de premios y una comida compartida.', 'Revisar la presentación y el alcance comercial.'),
      incluidos: confirmado(['Actividades deportivas organizadas', 'Cierre con entrega de premios'], relevamiento),
      opcionales: confirmado(['Gastronomía', 'Traslado', 'DJ'], relevamiento),
      duracion: ejemplo('De 10 a 20 h', 'Validar el horario de la jornada.'),
      capacidad: ejemplo('De 10 a 35 personas', 'Validar límites para eventos empresariales.'),
      precio: provisional({ importe: 25000, moneda: 'ARS', por: 'persona' }, 'Sustituir el precio de ejemplo y decidir si se muestran precios.', { responsable: 'La dueña y el responsable comercial' }),
      mensajeWhatsApp: ejemplo('Hola, quiero consultar por una jornada para mi equipo.', 'Validar el mensaje contextual.'),
      medios: medios(),
    },
  },
  {
    id: 'cumpleanos-adultos',
    unidades: {
      titulo: ejemplo('Cumpleaños entre montañas', 'Confirmar el nombre comercial.'),
      slug: ejemplo('cumpleanos-adultos', 'Confirmar el slug público.'),
      publico: confirmado('Adultos que organizan su cumpleaños', estructura),
      resumen: ejemplo('Festejá con tu gente en un lugar exclusivo, de día o al atardecer.', 'Revisar el texto de la tarjeta.'),
      descripcion: ejemplo('Armá un día recreativo, un encuentro al atardecer o una fiesta a medida. La propuesta se ajusta al plan de tu grupo.', 'Validar las modalidades y el texto de detalle.'),
      incluidos: ejemplo(['Uso exclusivo del parador', 'Espacios para reunirse y comer'], 'Confirmar la base incluida según modalidad.'),
      opcionales: confirmado(['Traslados', 'Torta', 'DJ', 'Iluminación', 'Barra', 'Show', 'Gastronomía', 'Juegos de living', 'Cotillón', 'Decoración'], relevamiento),
      duracion: ejemplo('Jornada de 6 horas como ejemplo', 'Acordar la duración según la modalidad.'),
      capacidad: ejemplo('Capacidad a conversar con cada grupo', 'Validar condiciones por evento sin trasladar el rango general.'),
      mensajeWhatsApp: ejemplo('Hola, quiero consultar por un cumpleaños de adultos.', 'Validar el mensaje contextual.'),
      medios: medios(),
    },
  },
  {
    id: 'cumpleanos-infantiles',
    unidades: {
      titulo: ejemplo('Cumpleaños infantiles al aire libre', 'Confirmar el nombre comercial.'),
      slug: ejemplo('cumpleanos-infantiles', 'Confirmar el slug público.'),
      publico: confirmado('Familias que organizan cumpleaños infantiles', estructura),
      resumen: ejemplo('Un festejo de día con espacio para jugar y disfrutar en familia.', 'Revisar el texto de la tarjeta.'),
      descripcion: ejemplo('Una jornada con lugar para juegos, una mesa para la torta y opciones de entretenimiento según la edad del grupo.', 'Validar las actividades adecuadas y el texto de detalle.'),
      incluidos: ejemplo(['Uso exclusivo del parador', 'Espacio para la mesa del festejo'], 'Confirmar los incluidos de la jornada.'),
      opcionales: confirmado(['Pelotero', 'Gastronomía', 'Traslado', 'Cotillón', 'Decoración', 'Mago o payaso', 'Animación y entretenimiento'], relevamiento),
      duracion: ejemplo('Festejo de día, con horario a coordinar', 'Confirmar horarios disponibles.'),
      capacidad: ejemplo('Capacidad a conversar con cada familia', 'Validar límites y condiciones por grupo.'),
      mensajeWhatsApp: ejemplo('Hola, quiero consultar por un cumpleaños infantil.', 'Validar el mensaje contextual.'),
      medios: medios(),
    },
  },
  {
    id: 'primaria-padres',
    unidades: {
      titulo: ejemplo('Día de campo para compañeros de primaria', 'Confirmar el nombre comercial.'),
      slug: ejemplo('dia-de-campo-primaria', 'Confirmar el slug público.'),
      publico: confirmado('Familias que organizan encuentros de compañeros de primaria', estructura),
      resumen: ejemplo('Un día de juegos y recreación en la montaña para compartir con compañeros.', 'Revisar el texto de la tarjeta.'),
      descripcion: ejemplo('Las familias organizan el encuentro y el grupo comparte una jornada recreativa con coordinadores.', 'Validar la dinámica, las condiciones y el texto de detalle.'),
      incluidos: confirmado(['Recreación con coordinadores'], relevamiento),
      opcionales: confirmado(['Gastronomía', 'Traslados'], relevamiento),
      duracion: ejemplo('De 10 a 19 h', 'Validar el horario de la jornada.'),
      capacidad: ejemplo('Grupo de 20 personas como ejemplo de composición', 'Validar límites y condiciones para encuentros de primaria.'),
      mensajeWhatsApp: ejemplo('Hola, somos familias de primaria y queremos consultar por un día de campo.', 'Validar el mensaje contextual.'),
      medios: medios(),
    },
  },
];
