import { Pipe, PipeTransform } from '@angular/core';

const DISTANCE_LIMIT = 200000;

@Pipe({
  name: 'tableFilter',
})
export class TableFilterPipe implements PipeTransform {
  transform(list: any[], value: any): any {
    return value
      ? list.filter((item) => {
          if (value === 'more' && item.distance > DISTANCE_LIMIT) return item;
          else if (value === 'less' && item.distance <= DISTANCE_LIMIT)
            return item;
        })
      : list;
  }
}
