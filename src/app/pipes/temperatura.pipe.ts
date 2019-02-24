import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatura'
})
export class TemperaturaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + 'º';
  }

}
