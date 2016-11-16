import {Component, HostBinding, style, state, animate, transition, trigger, OnInit} from '@angular/core';
import { Router }      from "@angular/router";
import { AuthService } from '../../core/auth.service';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../core/auth/auth.actions";
import {AppState} from "../../core/reducers";
import {AuthCredentials} from "../../core/auth/auth.model";
import {Observable, Subject} from "rxjs";


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

  auth: any;
  auth$: Observable<any>;
  destroyed$: Subject<any> = new Subject<any>();

  constructor(
    public authService: AuthService,
    public router: Router,
    public fb: FormBuilder,

    private store: Store<AppState>,
    private authActions: AuthActions
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
    this.auth$ = this.store.select(state => {
      console.log(state, 'STATE');
      return state.auth
    });
    this.auth$.takeUntil(this.destroyed$)
      .subscribe(auth => this.authChanged(auth));

  }

  ngOnInit() {
    this.showForgotPassword = false;
  }

  toggleForgotPassword() {
    this.showForgotPassword = ! this.showForgotPassword;
  }


  login(credentials: AuthCredentials) {
    this.store.dispatch(this.authActions.login(credentials));
  }

  authChanged(auth) {
    console.log(auth, 'AUTH CHANGED');

    this.auth = auth;

    console.log('loggedIn='+auth.loggedIn);
    if(auth.loggedIn) {
      let redirect = auth.redirectUrl ? auth.redirectUrl : '';
      console.log('redirUrl='+auth.redirectUrl);

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
