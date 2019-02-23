import { Injectable } from '@angular/core';
import { ClimaCiudad, DireccionViento } from './clima';

@Injectable({
  providedIn: 'root'
})
export class InfoClimaService {
  private clima: ClimaCiudad[] = [{
    codigo: 'SOM',
    clima: {
      oleaje: 1.5,
      periodo: 15,
      viento: {
        velocidad: 4,
        direccion: DireccionViento.ONSHORE
      }
    }
  }, {
    codigo: 'ERI',
    clima: {
      oleaje: 2.5,
      periodo: 10,
      viento: {
        velocidad: 7,
        direccion: DireccionViento.OFFSHORE
      }
    }
  }, {
    codigo: 'TAR',
    clima: {
      oleaje: 5,
      periodo: 5,
      viento: {
        velocidad: 7,
        direccion: DireccionViento.OFFSHORE
      }
    }
  }];
  private climaDefault: ClimaCiudad = {
    codigo: null,
    clima: {
      oleaje: null,
      periodo: null,
      viento: {
        velocidad: null,
        direccion: null
      }
    }
  };

  constructor() { }

  public obtenerClima(codigo: string): ClimaCiudad {
    const climaCiudad = this.clima.find(clima => clima.codigo === codigo);
    if (climaCiudad) {
      return climaCiudad;
    } else {
      return this.climaDefault;
    }
  }

  public agregarClima(clima: ClimaCiudad): void {
    this.clima.push(clima);
  }
}
