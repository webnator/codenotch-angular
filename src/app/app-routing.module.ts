import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { InfoCiudadComponent } from './info-ciudad/info-ciudad.component';

const routes: Routes = [
  { path: '', redirectTo: '/clima', pathMatch: 'full' },
  { path: 'acerca', component: AboutComponent },
  { path: 'clima', component: CiudadesComponent },
  { path: 'ciudad/:codigo', component: InfoCiudadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
