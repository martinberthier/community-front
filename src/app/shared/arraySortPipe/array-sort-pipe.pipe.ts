import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySortPipe',
  pure: false
})
export class ArraySortPipePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }

  transform(array: any, field: number): any[] {
    if (!Array.isArray(array)) {
      return;
    }
    array.sort((a: number, b: number) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
// transform(ary: any, fn: Function = (a,b) => a > b ? 1 : -1): any {
//   return ary.sort(fn)
// }
// }