import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';

@Pipe({
  name: 'filterCountry'
})
export class FilterCountryPipe implements PipeTransform {

  transform(value: Country[], filterText:string): Country[] {
    return value.filter((c: Country) =>
      c.name.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    );
  }

}
