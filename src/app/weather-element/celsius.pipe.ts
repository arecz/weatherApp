import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celsius'
})
export class CelsiusPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value === 'Loading') {
      return 'Please Wait';
    } else {
    return Math.round((parseInt(value) - 32) * 5/9) + ' C' ;
    }
  }

}
