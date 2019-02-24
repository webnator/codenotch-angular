import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCiudadComponent } from './info-ciudad.component';

describe('InfoCiudadComponent', () => {
  let component: InfoCiudadComponent;
  let fixture: ComponentFixture<InfoCiudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCiudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
