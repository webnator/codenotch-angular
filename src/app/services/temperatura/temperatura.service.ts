import { Injectable } from '@angular/core';
import { Temperatura } from './temperatura';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {
  constructor() { }

  public obtenerTemperaturaCiudad(codigo: string): Temperatura {
    return {
      estado: 'lc',
      min: 1.626666666666667,
      max: 16.933333333333334,
      actual: 15.425
    };
  }
}
