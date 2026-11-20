import { origenComercial, provisional } from './editorial.ts';
import type { Unidad, Vínculos } from './editorial.ts';

type Pregunta = Vínculos & {
  id: string;
  unidades: {
    contenido: Unidad<{ pregunta: string; respuesta: string }>;
    medios?: Unidad<readonly string[]>;
  };
};

function pregunta(id: string, texto: string, respuesta: string, referencias?: Pregunta['referencias']): Pregunta {
  return {
    id,
    referencias,
    unidades: {
      contenido: provisional({ pregunta: texto, respuesta }, 'Validar pregunta y respuesta antes de publicar.', origenComercial),
    },
  };
}

export const faqs = [
  pregunta('exclusividad', '¿Compartimos el parador con otros grupos?', 'Cada grupo disfruta el predio en exclusiva durante su reserva.'),
  pregunta('tamano-grupo', '¿Cuántas personas pueden asistir?', 'Las condiciones se coordinan según la cantidad de personas y el tipo de encuentro.'),
  pregunta('como-reservar', '¿Cómo consulto por una fecha?', 'Contanos qué tipo de encuentro querés organizar y para cuántas personas.'),
  pregunta('verano', '¿Cuándo está disponible la pileta?', 'El sector acuático funciona en temporada de verano.'),
  pregunta('pernocte', '¿Podemos quedarnos a dormir?', 'Hay posibilidad de pernocte. Consultá por disponibilidad y condiciones para tu grupo.'),
  pregunta('dinamica-empresas', '¿Podemos conversar la dinámica del encuentro?', 'Contanos cómo es tu equipo y qué tipo de jornada está buscando.', { propuestas: ['empresas'] }),
];
