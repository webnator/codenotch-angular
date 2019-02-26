import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { InfoCiudadComponent } from './info-ciudad/info-ciudad.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/clima', pathMatch: 'full' },
  { path: 'acerca', component: AboutComponent },
  { path: 'clima', component: DashboardComponent },
  { path: 'ciudad/:codigo', component: InfoCiudadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
