import { destinosHabilitados } from '../data/navegacion.ts';

export const ruta = '/revision-navegacion/';
export const enlaces = destinosHabilitados([
  { id: 'inicio', etiqueta: 'Inicio', ruta },
  { id: 'propuestas', etiqueta: 'Propuestas', ruta, fragmento: 'propuestas' },
  { id: 'consulta', etiqueta: 'Consulta', ruta, fragmento: 'consulta' },
], ['inicio', 'propuestas', 'consulta']);
