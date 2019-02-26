import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Ciudad } from '../ciudades/ciudad';
import { ClimaCiudad } from '../services/info-clima/clima';
import { InfoClimaService } from '../services/info-clima/info-clima.service';
import { CiudadesService } from '../services/ciudades/ciudades.service';
import { Temperatura } from '../services/temperatura/temperatura';
import { TemperaturaService } from '../services/temperatura/temperatura.service';

@Component({
  selector: 'app-info-ciudad',
  templateUrl: './info-ciudad.component.html',
  styleUrls: ['./info-ciudad.component.scss']
})
export class InfoCiudadComponent implements OnInit {
  public ciudad: Ciudad;
  public clima: ClimaCiudad;
  public codigo: string;

  constructor(
    private infoClimaService: InfoClimaService,
    private route: ActivatedRoute,
    private ciudadesService: CiudadesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.codigo = this.route.snapshot.paramMap.get('codigo');
    this.ciudad = this.ciudadesService.obtenerCiudad(this.codigo);
    this.clima = this.infoClimaService.obtenerClima(this.codigo);
  }

  public volver(): void {
    this.location.back();
  }

}
