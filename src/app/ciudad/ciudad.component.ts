import { Component, Input, OnInit, Output } from '@angular/core';
import { Ciudad } from '../ciudades/ciudad';
import { InfoClimaService } from '../services/info-clima/info-clima.service';
import { ClimaCiudad } from '../services/info-clima/clima';
import { CiudadesService } from '../services/ciudades/ciudades.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})
export class CiudadComponent implements OnInit {
  @Input() ciudad: Ciudad;
  public clima: ClimaCiudad;
  public mostrarEdicion = false;

  constructor(private infoClimaService: InfoClimaService, private ciudadesService: CiudadesService) { }

  ngOnInit() {
    this.clima = this.infoClimaService.obtenerClima(this.ciudad.codigo);
  }

  public cambiarNombre(nombre: string): void {
    if (nombre.trim() !== '') {
      this.ciudad.nombre = nombre;
    }
  }

  public editar(): void {
    this.mostrarEdicion = !this.mostrarEdicion;
  }

}
