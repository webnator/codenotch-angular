export class ClimaCiudad {
  codigo: string;
  clima: Clima;
}

class Clima {
  oleaje: number;
  periodo: number;
  viento: Viento;
}

class Viento {
  velocidad: number;
  direccion: DireccionViento;
}

export enum DireccionViento {
  OFFSHORE = 'OFFSHORE',
  ONSHORE = 'ONSHORE'
}
