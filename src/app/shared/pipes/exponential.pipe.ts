import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {


  // el metodo que viene por defecto es transform pues es eso lo que hace un pipe transforma algo

  transform(value: number): any {
    return Math.pow(value,2);
  }

}
