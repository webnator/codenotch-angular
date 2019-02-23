import { Component, OnInit } from '@angular/core';
import { Ciudad } from './ciudad';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {
  ciudades: Ciudad[] = [
    { nombre: 'Sagres', pais: 'Portugal', codigo: 'SAG' },
    { nombre: 'Somo', pais: 'España', codigo: 'SOM' }
  ];

  constructor() { }

  ngOnInit() {
  }

  public cambiarNombre(indice: number, nombre: string): void {
    if (nombre !== 'Madrid') {
      this.ciudades[indice].nombre = nombre;
    }
  }

}
