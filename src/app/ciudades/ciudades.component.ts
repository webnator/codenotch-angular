import { Component, OnInit } from '@angular/core';
import { Ciudad } from './ciudad';
import { ClimaCiudad, DireccionViento } from '../services/info-clima/clima';
import { InfoClimaService } from '../services/info-clima/info-clima.service';

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
    { nombre: 'Sidney', pais: 'Australia', codigo: 'SID' },
    { nombre: 'Mundaka', pais: 'España', codigo: 'MUN' },
    { nombre: 'Rabat', pais: 'Marruecos', codigo: 'RAB' }
  ];

  constructor(private infoClimaService: InfoClimaService) { }

  ngOnInit() {
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
