import { Component, Input, OnInit } from '@angular/core';
import { Ciudad } from '../ciudades/ciudad';
import { InfoClimaService } from '../services/info-clima/info-clima.service';
import { ClimaCiudad } from '../services/info-clima/clima';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})
export class CiudadComponent implements OnInit {
  @Input() ciudad: Ciudad;
  public clima: ClimaCiudad;
  public mostrarEdicion = false;

  constructor(private infoClimaService: InfoClimaService) { }

  ngOnInit() {
    this.clima = this.infoClimaService.obtenerClima(this.ciudad.codigo);
  }

  public cambiarNombre(nombre: string): void {
    if (nombre.trim() !== '') {
      this.ciudad.nombre = nombre;
      this.editar();
    }
  }

  public editar(): void {
    this.mostrarEdicion = !this.mostrarEdicion;
  }

}
