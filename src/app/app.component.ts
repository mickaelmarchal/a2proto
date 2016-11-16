import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { views } from './app-nav-views';
import { MOBILE } from './services/constants';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <router-outlet (activate)="activateEvent($event)" (deactivate)="deactivateEvent($event)"></router-outlet>
    <my-store-devtools *ngIf="showMonitor"></my-store-devtools>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';

  showMonitor = (ENV === 'development' && !AOT &&
    ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
  );
  mobile = MOBILE;
  sideNavMode = MOBILE ? 'over' : 'side';
  views = views;

  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) { }

  activateEvent(event) {
    if (ENV === 'development') {
      console.log('Activate Event:', event);
    }
  }

  deactivateEvent(event) {
    if (ENV === 'development') {
      console.log('Deactivate Event', event);
    }
  }
}
