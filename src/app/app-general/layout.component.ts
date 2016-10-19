import { Component }              from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService }            from "../core/auth.service";


@Component({
  moduleId: module.id,
  templateUrl: 'layout.component.html',
})
export class AppLayoutComponent {

  constructor(
    public authService: AuthService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

}

