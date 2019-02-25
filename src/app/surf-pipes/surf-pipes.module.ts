import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncomillarPipe } from './encomillar.pipe';
import { WindDirectionPipe } from './wind-direction.pipe';
import { TemperaturaPipe } from './temperatura.pipe';


@NgModule({
  declarations: [
    EncomillarPipe,
    WindDirectionPipe,
    TemperaturaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EncomillarPipe,
    WindDirectionPipe,
    TemperaturaPipe
  ]
})
export class SurfPipesModule { }
