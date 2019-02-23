import { Pipe, PipeTransform } from '@angular/core';
import {ClimaCiudad, DireccionViento} from './services/info-clima/clima';

@Pipe({
  name: 'windDirection'
})
export class WindDirectionPipe implements PipeTransform {

  transform(clima: ClimaCiudad): any {
    if (!clima.clima.viento.velocidad) {
      return null;
    }
    let direccion = '↑';
    if (clima.clima.viento.direccion === DireccionViento.ONSHORE) {
      direccion = '↓';
    }
    return clima.clima.viento.velocidad + 'km ' + direccion;
  }

}
