import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addDot'
})
export class AddDotPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + '...';
  }

}
