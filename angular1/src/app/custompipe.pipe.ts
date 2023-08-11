import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
})
export class CustompipePipe implements PipeTransform {
  transform(value: Date): any {
    const currenty = new Date().getFullYear();
    const dob = value.getFullYear();
    const age = currenty - dob;
    return age;
  }
}
