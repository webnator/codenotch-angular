import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../ciudades/ciudad';
import { CiudadesService } from '../services/ciudades/ciudades.service';
import { Clima } from '../services/info-clima/clima';
import { InfoClimaService } from '../services/info-clima/info-clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public ciudad: Ciudad;
  public clima: Clima;

  constructor(private ciudadesService: CiudadesService, private infoClimaService: InfoClimaService) { }

  ngOnInit() {
  }

  public eligeCiudad(codigo: string): void {
    this.ciudad = this.ciudadesService.obtenerCiudad(codigo);
    this.clima = this.infoClimaService.obtenerClima(this.ciudad.codigo).clima;
  }
}
