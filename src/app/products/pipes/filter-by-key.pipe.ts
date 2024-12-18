import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByKey',
})
export class FilterByKeyPipe implements PipeTransform {
  transform<T>(items: T[], key: keyof T, value: any): any[] {
    return items.filter((item: any) =>
      (item[key] as string).toLowerCase().includes(value.toLowerCase())
    );
  }
}
