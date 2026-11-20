import { propuestas } from './propuestas.ts';
import type { Propuesta } from './propuestas.ts';
import { inventarioEditorial, revisarReferencias } from './editorial.ts';
import type { CatalogoReferenciable } from './editorial.ts';
import { contacto, consultaGeneral, identidad } from './parador.ts';
import { instalaciones, actividades } from './experiencias.ts';
import { faqs } from './preguntas.ts';
import { medios } from './medios.ts';

export const catalogo = {
  identidad,
  contacto,
  consultaGeneral,
  propuestas,
  instalaciones,
  actividades,
  faqs,
  medios,
};

export function buscarPropuesta(id: string, fuente: readonly Propuesta[] = catalogo.propuestas) {
  return fuente.find((propuesta) => propuesta.id === id);
}

export function listarPendientes() {
  return inventarioEditorial({
    identidad: [catalogo.identidad],
    contacto: [catalogo.contacto],
    consultaGeneral: [catalogo.consultaGeneral],
    propuestas: catalogo.propuestas,
    instalaciones: catalogo.instalaciones,
    actividades: catalogo.actividades,
    faqs: catalogo.faqs,
    medios: catalogo.medios,
  });
}

export function validarCatalogo(fuente: CatalogoReferenciable = catalogo) {
  return revisarReferencias(fuente);
}
