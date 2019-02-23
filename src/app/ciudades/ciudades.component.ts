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
    { nombre: 'Somo', pais: 'España', codigo: 'SOM' },
    { nombre: 'Ericeira', pais: 'Portugal', codigo: 'ERI' },
    { nombre: 'Cadiz', pais: 'España', codigo: 'CAD' },
    { nombre: 'Tarifa', pais: 'España', codigo: 'TAR' },
    { nombre: 'Sidney', pais: 'Australia', codigo: 'SID' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
