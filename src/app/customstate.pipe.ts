import { Pipe, PipeTransform } from '@angular/core';
import { HydrationFeatureKind } from '@angular/platform-browser';

@Pipe({
  name: 'customstate'
})
export class CustomstatePipe implements PipeTransform {

  // transform(value: number, exponent: 2): number {
  //   return Math.pow(value,exponent);
  // }

 
  transform(input:string):any{
    return (input + ' Welcome!..');
}  

  //input -hey
  //output-hey welcome!...
 
}
