import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  autor_nombre = environment.autor_nombre;
  autor_apellido = environment.autor_apellido;
  autor_bio = environment.autor_bio;

  constructor() { }

  ngOnInit() {
  }

}
