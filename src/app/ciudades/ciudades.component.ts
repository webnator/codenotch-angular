import { Component, OnInit } from '@angular/core';
import { Ciudad } from './ciudad';
import { ClimaCiudad, DireccionViento } from '../services/info-clima/clima';
import { InfoClimaService } from '../services/info-clima/info-clima.service';
import { CiudadesService } from '../services/ciudades/ciudades.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {
  public ciudades: Ciudad[] = [];

  constructor(private infoClimaService: InfoClimaService, private ciudadesService: CiudadesService) { }

  ngOnInit() {
    let index = 0;
    const sub = this.ciudadesService.obtenerCiudades().subscribe({
      next: (ciudad) => {
        if (index === 3) {
          return sub.unsubscribe();
        }
        this.ciudades.push(ciudad);
        index += 1;
      }
    });
  }

  public guardarClima(codigo: string, oleaje: number, periodo: number, velocidad: number, direccion: DireccionViento): void {
    const clima: ClimaCiudad = {
      codigo,
      clima: {
        oleaje,
        periodo,
        viento: {
          velocidad,
          direccion
        }
      }
    };
    this.infoClimaService.agregarClima(clima);
  }

}
