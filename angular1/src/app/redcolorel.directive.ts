import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedcolorel]',
})
export class RedcolorelDirective {
  constructor(mam: ElementRef) {}
}
