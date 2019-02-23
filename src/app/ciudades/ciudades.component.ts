import { Component, OnInit } from '@angular/core';
import { Ciudad } from './ciudad';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {
  ciudades: Ciudad[] = [
    { nombre: 'Sagres', pais: 'Portugal', codigo: 'SAG' }
  ];

  constructor() { }

  ngOnInit() {
  }

  public cambiarNombre(nombre: string): void {
    if (nombre !== 'Madrid') {
      this.ciudades[0].nombre = nombre;
    }
  }

}
