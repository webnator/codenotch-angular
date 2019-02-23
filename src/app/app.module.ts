import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { FormsModule } from '@angular/forms';
import { CiudadComponent } from './ciudad/ciudad.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CiudadesComponent,
    CiudadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
