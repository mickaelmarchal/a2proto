import { Injectable }       from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad,
  Router, Route, RouterStateSnapshot, ActivatedRouteSnapshot
}                           from '@angular/router';

import { AuthService }      from './auth.service';
import {Store} from "@ngrx/store";
import {AppState} from "./reducers";
import {Observable, Subject} from "rxjs";
import {AuthActions} from "./auth/auth.actions";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  auth: any;
  auth$: Observable<any>;
  destroyed$: Subject<any> = new Subject<any>();

  isLoggedIn: boolean = false;


  constructor(
    private store: Store<AppState>,
    private authActions: AuthActions,
    private router: Router
  ) {

    //listen to changes in auth
    this.auth$ = this.store.select(state => {
      return state.auth
    });
    this.auth$.takeUntil(this.destroyed$)
      .subscribe(auth => this.isLoggedIn = auth.loggedIn);

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {

    if (this.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    this.store.dispatch(this.authActions.loginRequired(url));

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}