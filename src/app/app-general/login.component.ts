import { Component }   from '@angular/core';
import { Router }      from "@angular/router";
import { AuthService } from '../core/auth.service';


@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class AppLoginComponent {

  showForgotPassword: boolean = false;
  showLoading: boolean = false;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  toggleForgotPassword() {
    this.showForgotPassword = ! this.showForgotPassword;
  }

  toggleLoading() {
    this.showLoading = ! this.showLoading;
  }

  login() {
    this.toggleLoading();
    this.authService.login().subscribe(() => {
      this.toggleLoading();

      if (this.authService.isLoggedIn) {

        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';

        // Redirect the user
        this.router.navigate([redirect]);
      }

      //TODO si echec
    });

    return false;
  }

  forgotPassword() {

    return false;
  }
}
