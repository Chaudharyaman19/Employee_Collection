import { Component } from '@angular/core';

@Component({
  selector: 'app-inlinecomponent',
  templateUrl: './inlinecomponent.component.html',
  styles: [
    `
      .custom {
        color: red;
      }
    `,
  ],
})
export class InlinecomponentComponent {}
