import {Component, Input, OnInit} from '@angular/core';
import {Ciudad} from '../ciudades/ciudad';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})
export class CiudadComponent implements OnInit {
  @Input() ciudad: Ciudad;

  constructor() { }

  ngOnInit() {
  }

  public cambiarNombre(nombre: string): void {
    if (nombre.trim() !== '') {
      this.ciudad.nombre = nombre;
    }
  }

}
