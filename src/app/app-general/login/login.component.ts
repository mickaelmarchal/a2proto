import { Component, HostBinding,
  style, state, animate, transition, trigger,
  OnInit } from '@angular/core';
import { Router }      from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AuthService } from '../../core/auth/auth.service';
import { AuthCredentials, AuthState } from "../../core/auth/auth.model";


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
        animate('0.3s ease-out')
      ]),
      transition('* => void', [
        animate('0.6s ease-out', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class AppLoginComponent implements OnInit {

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  showForgotPassword: boolean = false;
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  auth: AuthState;

  constructor(
    public authService: AuthService,
    public router: Router,
    public fb: FormBuilder,
) {

    //init forms
    this.loginForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'remember': [false]
    });

    this.forgotPasswordForm = fb.group({
      'username': ['', Validators.required]
    });

    //listen to changes in auth
    this.authService.onAuthChange().subscribe(auth => this.authChanged(auth));
  }

  ngOnInit() {
    this.showForgotPassword = false;
  }

  toggleForgotPassword() {
    this.showForgotPassword = ! this.showForgotPassword;
  }

  login(credentials: AuthCredentials) {
    this.authService.login(credentials);
  }

  authChanged(auth) {
    this.auth = auth;
    if(auth.loggedIn) {
      let redirect = auth.redirectUrl ? auth.redirectUrl : '';
      this.router.navigate([redirect]);
    }
  }

/*
    this.authService.login(formValues).subscribe(

      // authentication success
      (res) => {
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
*/


  forgotPassword(formValues: any) { }
}
