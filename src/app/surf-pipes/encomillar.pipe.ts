import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encomillar'
})
export class EncomillarPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return '"' + value + '"';
  }

}
