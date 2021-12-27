import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tvaPrice'
})
export class TvaPricePipe implements PipeTransform {

  defaultTva:number = 18
  transform(value: any, tva?:number|undefined): unknown {
    let valuePrice = Number.parseFloat(value);
    let rateNumber = tva == undefined ?this.defaultTva : tva;
    return valuePrice * (rateNumber / 100);
  }

}
