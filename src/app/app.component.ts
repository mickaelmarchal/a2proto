import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <app-title [subtitle]="title"></app-title>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/contact" routerLinkActive="active">Contacts</a>
      <a routerLink="/crisis" routerLinkActive="active">Crisis</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/demo-form" routerLinkActive="active">Demo form</a>
      <a routerLink="/dynamic-form" routerLinkActive="active">Dynamic form</a>
      <a routerLink="/admin" routerLinkActive="active">Admin</a>
    </nav>
    <router-outlet></router-outlet>
  `/*,
  styleUrls: ['app.component.css']*/
})
export class AppComponent {
  title = 'Tour of Heroes';
}