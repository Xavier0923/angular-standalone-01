import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
  standalone: true,
})
export class MoneyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    if (value >= 10000) {
      return value * 10;
    } else {
      return '錢太少';
    }
  }
}
