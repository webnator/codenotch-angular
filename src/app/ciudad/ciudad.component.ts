import { Component, Input, OnInit } from '@angular/core';
import { Ciudad } from '../ciudades/ciudad';
import { InfoClimaService } from '../services/info-clima/info-clima.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})
export class CiudadComponent implements OnInit {
  @Input() ciudad: Ciudad;

  constructor(private infoClimaService: InfoClimaService) { }

  ngOnInit() {
  }

  public cambiarNombre(nombre: string): void {
    if (nombre.trim() !== '') {
      this.ciudad.nombre = nombre;
    }
  }

  public mostrarClima(codigo: string): void {
    const infoClima = this.infoClimaService.obtenerClima(codigo);
    alert(JSON.stringify(infoClima));
  }

}
