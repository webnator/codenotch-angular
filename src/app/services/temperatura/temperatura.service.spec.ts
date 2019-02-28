import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TemperaturaService } from './temperatura.service';
import { Temperatura } from './temperatura';

const mockApiResponse = {
  "coord": {
    "lon": -5.61,
    "lat": 36.01
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "cielo claro",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 18.67,
    "pressure": 1025,
    "humidity": 63,
    "temp_min": 18,
    "temp_max": 19
  },
  "visibility": 10000,
  "wind": {
    "speed": 6.7,
    "deg": 200
  },
  "clouds": {
    "all": 0
  },
  "dt": 1551372600,
  "sys": {
    "type": 1,
    "id": 7026,
    "message": 0.0032,
    "country": "ES",
    "sunrise": 1551336811,
    "sunset": 1551377804
  },
  "id": 2510599,
  "name": "Tarifa",
  "cod": 200
};

describe('TemperaturaService', () => {
  let temperaturaService: TemperaturaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ TemperaturaService ]
    });
    temperaturaService = TestBed.get(TemperaturaService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('debe crearlo', () => {
    expect(temperaturaService).toBeTruthy();
  });

  it('debe retornar los valores esperados', (done) => {
    temperaturaService.obtenerTemperaturaCiudad('SAG').subscribe((res: Temperatura) => {
      expect(res.estado).toEqual(mockApiResponse.weather[0].icon);
      expect(res.min).toEqual(mockApiResponse.main.temp_min);
      expect(res.max).toEqual(mockApiResponse.main.temp_max);
      expect(res.actual).toEqual(mockApiResponse.main.temp);
      done();
    });
    let tempRequest = httpMock.expectOne('http://api.openweathermap.org/data/2.5/weather?APPID=0971b1971fcdf8441d98245f918bbad1&units=metric&lang=es&id=2263650');
    tempRequest.flush(mockApiResponse);
    httpMock.verify();

  });
});
