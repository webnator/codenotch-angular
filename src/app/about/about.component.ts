import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Autor } from './autor';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  private autorInfo: Autor = {
    nombre: environment.autor_nombre,
    apellido: environment.autor_apellido,
    bio: environment.autor_bio,
  }

  constructor() { }

  ngOnInit() {
  }

  autor(): Autor {
    return this.autorInfo;
  }

  nombreCompleto(autor: Autor): String {
    return autor.nombre + ' ' + autor.apellido;
  }


}
