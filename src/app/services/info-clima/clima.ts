export class ClimaCiudad {
  codigo: string;
  clima: Clima;
}

export class Clima {
  oleaje: number;
  periodo: number;
  viento: Viento;
}

export class Viento {
  velocidad: number;
  direccion: DireccionViento;
}

export enum DireccionViento {
  OFFSHORE = 'OFFSHORE',
  ONSHORE = 'ONSHORE'
}
