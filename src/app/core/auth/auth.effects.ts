/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AuthActions } from './auth.actions';
import { AppState } from '../reducers';
import { AuthService } from './auth.service';

@Injectable()


/**
 * Ce truc se place en intermédiaire et permet de lancer des requetes
 * quand on dispatche des actions
 */
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private authService: AuthService,
    private authActions: AuthActions
  ) { }

  @Effect() login$ = this.actions$

    // Listen for the 'LOGIN' action
    .ofType(AuthActions.LOGIN)

    // Map the payload into JSON to use as the request body
    .map(action => action.payload)
    .switchMap(payload => this.authService.login(payload)

      // If successful, dispatch success action with result
      .mergeMap((res: any) => Observable.of(
        this.authActions.loginSuccess(res)
        )
      )

      // If request fails, dispatch failed action
      .catch((err) => Observable.of(
        this.authActions.loginFail(err)
      ))
    );

  @Effect() logout$ = this.actions$
    .ofType(AuthActions.LOGOUT)
    .map(action => action.payload)
    .switchMap(() => this.authService.logout()
      .mergeMap((res: any) => Observable.of(
        this.authActions.logoutSuccess(res)
        )
      )
      .catch((err) => Observable.of(
        this.authActions.logoutFail(err)
      ))
    );
}
