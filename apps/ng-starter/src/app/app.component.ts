import { Component } from '@angular/core';

@Component({
  selector: 'ng-starter-root',
  template: `
    <ng-starter-nx-welcome></ng-starter-nx-welcome>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'ng-starter';
}
