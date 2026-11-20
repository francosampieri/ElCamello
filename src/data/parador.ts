import { confirmado, estructura, origenComercial, pendiente, provisional, relevamiento } from './editorial.ts';
import type { Unidad } from './editorial.ts';

const validarContacto = { responsable: 'La dueña y el responsable comercial' };

export const identidad = {
  id: 'el-camello',
  unidades: {
    nombre: confirmado('Parador El Camello', relevamiento),
    localidad: confirmado('Cacheuta, Mendoza', relevamiento),
    presentacion: provisional('Un parador de montaña para disfrutar en grupo. El predio es exclusivo para cada reserva y la jornada se adapta a lo que quieren compartir.', 'Revisar el texto de presentación.', origenComercial),
    fortalezas: confirmado(['Exclusividad', 'Paisaje de montaña', 'Variedad de actividades', 'Personalización'], relevamiento),
    historia: provisional('La familia que lleva El Camello tiene más de 15 años de experiencia en complejos recreativos. Hoy recibe grupos en Cacheuta para compartir la montaña.', 'Validar el texto de historia y el origen del nombre.', origenComercial),
  },
};

export const contacto: {
  id: string;
  unidades: {
    whatsapp: Unidad<string>;
    mensajeGeneral: Unidad<string>;
    mensajePersonalizado: Unidad<string>;
    instagram: Unidad<string>;
    direccion: Unidad<string>;
  };
} = {
  id: 'canales',
  unidades: {
    whatsapp: provisional('+54 261 659-3964', 'Comprobar el destinatario en WhatsApp y registrar su formato internacional validado.', {
      ...validarContacto,
      fuente: 'Número proporcionado por Franco durante C-05',
    }),
    mensajeGeneral: provisional('¡Hola! Quisiera conocer las actividades y opciones para visitar El Camello con mi grupo.', 'Revisar con la dueña antes de habilitar el enlace.', validarContacto),
    mensajePersonalizado: provisional('¡Hola! Quisiera armar una propuesta a medida para mi grupo. ¿Podemos conversar sobre la fecha y las actividades?', 'Revisar con la dueña antes de habilitar el enlace.', validarContacto),
    instagram: confirmado('https://www.instagram.com/parador_elcamello/', 'Perfil compartido por Franco en el chat del proyecto'),
    direccion: pendiente('Confirmar dirección, indicaciones de acceso y mapa.', validarContacto),
  },
};

export const consultaGeneral = {
  id: 'arma-tu-propuesta',
  unidades: {
    titulo: confirmado('Armá tu propuesta', estructura),
    descripcion: provisional('Contanos qué querés festejar y cómo te imaginás el encuentro.', 'Revisar el texto del bloque de consulta.', origenComercial),
  },
};
