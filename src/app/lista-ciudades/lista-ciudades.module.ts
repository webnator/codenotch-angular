import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { SurfPipesModule } from '../surf-pipes/surf-pipes.module';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    TestComponent,
    Test2Component
  ],
  imports: [
    CommonModule,
    SurfPipesModule
  ],
  exports: [
    TestComponent,
  ]
})
export class ListaCiudadesModule { }
