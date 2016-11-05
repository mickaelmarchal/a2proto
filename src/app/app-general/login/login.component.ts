import { Component,trigger, transition, animate,
  style, state }   from '@angular/core';
import { Router }      from "@angular/router";
import { AuthService } from '../../core/auth.service';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],

  //animate entering and leaving the view
  animations: [
    trigger('routeAnimation', [
      state('*',
        style({
          opacity: 1
        })
      ),
      transition('void => *', [
        style({
          opacity: 0
        }),
        animate('4s linear')
      ]),
      transition('* => void', [
        animate('4s linear', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class AppLoginComponent {

  showForgotPassword: boolean = false;
  showLoading: boolean = false;
  errorMessage: string = null;

  loginForm: FormGroup;

  constructor(
    public authService: AuthService,
    public router: Router,
    public fb: FormBuilder
  ) {

    this.loginForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': [false]
    });
  }


  toggleForgotPassword() {
    this.showForgotPassword = ! this.showForgotPassword;
    this.errorMessage = null;
  }

  toggleLoading() {
    this.showLoading = ! this.showLoading;
    this.errorMessage = null;
  }

  login(formValues: any) {

    this.toggleLoading();
    this.authService.login(formValues).subscribe(

      // authentication success
      (res) => {

        console.log(res, 'SUCCESS');

        this.toggleLoading();

        if (this.authService.isLoggedIn) {

          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '';

          // Redirect the user
          this.router.navigate([redirect]);
        } else {

        }
      },

      // authentication failure
      error => {
        console.log(error, 'ERROR');
        this.toggleLoading();
        this.errorMessage = error;
      }
    );

    return false;
  }

  forgotPassword() {

    return false;
  }
}
