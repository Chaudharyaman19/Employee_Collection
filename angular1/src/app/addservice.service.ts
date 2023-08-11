import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddserviceService {
  constructor() {}
  add(a: number, b: number) {
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
  }
}
