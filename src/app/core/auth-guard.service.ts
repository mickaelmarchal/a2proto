import { Injectable }       from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad,
  Router, Route, RouterStateSnapshot, ActivatedRouteSnapshot
}                           from '@angular/router';

import { AuthService }      from './auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.authService.onAuthChange().subscribe(auth => this.isLoggedIn = auth.loggedIn);
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

  private checkLogin(url: string): boolean {

    if (this.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting, and redirect to login page
    this.authService.triggerLogin(url);

    // TODO: this should go to reducer
    this.router.navigate(['/login']);
    return false;
  }
}