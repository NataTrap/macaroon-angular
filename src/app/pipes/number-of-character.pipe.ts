import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOfCharacter'
})
export class NumberOfCharacterPipe implements PipeTransform {

  transform(value: string): string {
    return this.truncate(value, 95);
  }

  truncate(str: string, maxlength: number): string {
    return (str.length > maxlength) ? str.slice(0, maxlength) + '…' : str;
  }
}
