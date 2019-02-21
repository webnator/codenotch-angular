import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  autor_nombre = 'Williams';
  autor_apellido = 'Aguilera';
  autor_bio = 'Developer since 1989!';

  constructor() { }

  ngOnInit() {
  }

}
