import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CiudadesComponent } from './ciudades/ciudades.component';
import { FormsModule } from '@angular/forms';
import { CiudadComponent } from './ciudad/ciudad.component';
import { EncomillarPipe } from './pipes/encomillar.pipe';
import { WindDirectionPipe } from './pipes/wind-direction.pipe';
import { InfoCiudadComponent } from './info-ciudad/info-ciudad.component';
import { TemperaturaPipe } from './pipes/temperatura.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CiudadesComponent,
    CiudadComponent,
    EncomillarPipe,
    WindDirectionPipe,
    InfoCiudadComponent,
    TemperaturaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
