import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { TemperaturaService } from '../services/temperatura/temperatura.service';
import { Temperatura } from '../services/temperatura/temperatura';
import { Ciudad } from '../ciudades/ciudad';

@Component({
  selector: 'app-temperatura-ciudad',
  templateUrl: './temperatura-ciudad.component.html',
  styleUrls: ['./temperatura-ciudad.component.scss']
})
export class TemperaturaCiudadComponent implements OnInit {
  @Input() ciudad: string;
  public temperatura: Temperatura = {
    min: null,
    max: null,
    actual: null,
    estado: '-'
  };

  constructor(private temperaturaService: TemperaturaService) { }

  ngOnInit() {

  }

  ngOnChanges(changes) {
    this.ciudad = changes.ciudad.currentValue;
    this.getTemperature();
  }

  private getTemperature(): void {
    if (this.ciudad) {
      this.temperaturaService.obtenerTemperaturaCiudad(this.ciudad).subscribe({
        next: (apiResult) => this.temperatura = apiResult
      });
    }
  }

}
