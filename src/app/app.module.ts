import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { CiudadComponent } from './ciudad/ciudad.component';
import { InfoCiudadComponent } from './info-ciudad/info-ciudad.component';
import { ListaCiudadesModule } from './lista-ciudades/lista-ciudades.module';
import { SurfPipesModule } from './surf-pipes/surf-pipes.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemperaturaCiudadComponent } from './temperatura-ciudad/temperatura-ciudad.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CiudadesComponent,
    CiudadComponent,
    InfoCiudadComponent,
    DashboardComponent,
    TemperaturaCiudadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ListaCiudadesModule,
    SurfPipesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
