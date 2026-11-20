import type { Unidad } from './editorial.ts';
import { contacto } from './parador.ts';
import { propuestas } from './propuestas.ts';

export type AmbitoConsulta = { tipo: 'general' } | { tipo: 'personalizado' } | { tipo: 'propuesta'; id: string };

type FuenteContacto = {
  numero: Unidad<string>;
  general: Unidad<string>;
  personalizado: Unidad<string>;
  propuestas: readonly { id: string; unidades: { mensajeWhatsApp: Unidad<string> } }[];
};

const datos: FuenteContacto = {
  numero: contacto.unidades.whatsapp,
  general: contacto.unidades.mensajeGeneral,
  personalizado: contacto.unidades.mensajePersonalizado,
  propuestas,
};

export function mensajeDeConsulta(ambito: AmbitoConsulta, fuente: FuenteContacto = datos): Unidad<string> | undefined {
  if (ambito.tipo === 'propuesta') {
    return fuente.propuestas.find(propuesta => propuesta.id === ambito.id)?.unidades.mensajeWhatsApp;
  }
  return fuente[ambito.tipo];
}

export function resolverWhatsApp(ambito: AmbitoConsulta, fuente: FuenteContacto = datos) {
  const mensaje = mensajeDeConsulta(ambito, fuente);
  if (ambito.tipo === 'propuesta' && !mensaje) {
    return { estado: 'no-disponible', motivo: 'propuesta-desconocida' } as const;
  }
  const numero = fuente.numero;
  if (numero.estado !== 'confirmado') return { estado: 'no-disponible', motivo: 'numero-pendiente' } as const;
  if (!/^[1-9]\d{7,14}$/.test(numero.valor)) return { estado: 'no-disponible', motivo: 'numero-invalido' } as const;
  if (mensaje?.estado !== 'confirmado' || !mensaje.valor.trim()) {
    return { estado: 'no-disponible', motivo: 'mensaje-pendiente' } as const;
  }
  return { estado: 'disponible', href: 'https://wa.me/' + numero.valor + '?text=' + encodeURIComponent(mensaje.valor) } as const;
}
