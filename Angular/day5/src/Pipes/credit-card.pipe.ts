import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCard'
})
export class CreditCardPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
   value= this.insertCharAt(value,4,'-');
    value=this.insertCharAt(value,9,'-');
    value=this.insertCharAt(value,14,'-');
    return value;
  }
  insertCharAt(str: string, index: number, char: string): string {
    return str.slice(0, index) + char + str.slice(index);
}

}
