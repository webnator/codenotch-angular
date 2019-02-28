import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TemperaturaService } from './temperatura.service';

describe('TemperaturaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ TemperaturaService ]
  }));

  it('should be created', () => {
    const service: TemperaturaService = TestBed.get(TemperaturaService);
    expect(service).toBeTruthy();
  });
});
