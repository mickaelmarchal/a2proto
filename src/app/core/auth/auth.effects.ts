/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { AuthActions } from './auth.actions';
import { AuthRequestService } from './auth.service';

@Injectable()


/**
 * Ce truc se place en intermédiaire et permet de lancer des requetes
 * quand on dispatche des actions
 */
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authRequestService: AuthRequestService,
    private authActions: AuthActions
  ) { }


  @Effect() login$ = this.actions$

    // Listen for the 'LOGIN' action
    .ofType(AuthActions.LOGIN)

    // Map the payload into JSON to use as the request body
    .map(action => action.payload)
    .switchMap(payload => this.authRequestService.login(payload)

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

}
