import { Pipe, PipeTransform } from '@angular/core';
import { HydrationFeatureKind } from '@angular/platform-browser';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(value: number, exponent: 2): number {
    return Math.pow(value,exponent);
  }


  //input -hey
  //output-hey welcome!...
 
}
