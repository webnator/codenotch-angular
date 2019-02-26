import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturaCiudadComponent } from './temperatura-ciudad.component';

describe('TemperaturaCiudadComponent', () => {
  let component: TemperaturaCiudadComponent;
  let fixture: ComponentFixture<TemperaturaCiudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturaCiudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturaCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
