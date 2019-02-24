import { Injectable } from '@angular/core';
import { Ciudad } from '../../ciudades/ciudad';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {
  private ciudades: Ciudad[] = [
    { nombre: 'Sagres', pais: 'Portugal', codigo: 'SAG' },
    { nombre: 'Somo', pais: 'España', codigo: 'SOM' },
    { nombre: 'Ericeira', pais: 'Portugal', codigo: 'ERI' },
    { nombre: 'Cadiz', pais: 'España', codigo: 'CAD' },
    { nombre: 'Tarifa', pais: 'España', codigo: 'TAR' },
    { nombre: 'Sidney', pais: 'Australia', codigo: 'SID' },
    { nombre: 'Mundaka', pais: 'España', codigo: 'MUN' },
    { nombre: 'Rabat', pais: 'Marruecos', codigo: 'RAB' }
  ];
  constructor() { }

  public obtenerTodas(): Ciudad[] {
    return this.ciudades;
  }

  public obtenerCiudades(): Observable<Ciudad> {
    return new Observable((observer) => {
      let index = 0;
      const int = setInterval(() => {
        if (this.ciudades[index]) {
          console.log('Obs', 'Sending', index);
          observer.next(this.ciudades[index]);
          index += 1;
        } else {
          console.log('Obs', 'Completed');
          observer.complete();
          clearInterval(int);
        }
      }, 100);
      // this.ciudades.forEach(ciudad => observer.next(ciudad));
      // observer.complete();

      // unsubscribe function doesn't need to do anything in this
      // because values are delivered synchronously
      return { unsubscribe() { } };
    });
  }

  public obtenerCiudad(codigo: string): Ciudad {
    return this.ciudades.find(ciudad => ciudad.codigo === codigo);
  }
}
