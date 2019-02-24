import { Injectable } from '@angular/core';
import { Temperatura } from './temperatura';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {
  private url: string = 'http://api.openweathermap.org/data/2.5/weather?APPID=0971b1971fcdf8441d98245f918bbad1&units=metric&lang=es';
  private cityIds = {
    SAG: '2263650',
    SOM: '3122452',
    ERI: '2268563',
    CAD: '2520600',
    TAR: '2510599',
    SID: '5677735',
    MUN: '6362411',
    RAB: '2538474'
  };
  constructor(private http: HttpClient) { }

  public obtenerTemperaturaCiudad(codigo: string): Observable<Temperatura> {
    return this.http.get(`${this.url}&id=${this.cityIds[codigo]}`)
      .pipe(
        map(this.extractData)
      );
  }

  private extractData(apiResult: any): Temperatura {
    return {
      estado: apiResult.weather[0].icon,
      min: apiResult.main.temp_min,
      max: apiResult.main.temp_max,
      actual: apiResult.main.temp
    };
  }
}
