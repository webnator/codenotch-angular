import { Pipe, PipeTransform } from '@angular/core';
import { DireccionViento, Viento } from '../services/info-clima/clima';

@Pipe({
  name: 'windDirection'
})
export class WindDirectionPipe implements PipeTransform {

  transform(viento: Viento): any {
    if (!viento.velocidad) {
      return null;
    }
    let direccion = '↑';
    if (viento.direccion === DireccionViento.ONSHORE) {
      direccion = '↓';
    }
    return viento.velocidad + 'km ' + direccion;
  }

}
