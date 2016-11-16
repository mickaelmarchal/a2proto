/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { UsersActions } from './users.actions';
import { UsersRequestService } from './users.service';

@Injectable()


/**
 * Ce truc se place en intermédiaire et permet de lancer des requetes
 * quand on dispatche des actions
 */
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersRequestService: UsersRequestService,
    private usersActions: UsersActions
  ) { }


  @Effect() getUsers$ = this.actions$

    // Listen for the 'LOGIN' action
    .ofType(UsersActions.GET_USERS)

    // Map the payload into JSON to use as the request body
    .map(action => action.payload)
    .switchMap(payload => this.usersRequestService.getUsers()

      // If successful, dispatch success action with result
      .mergeMap((res: any) => Observable.of(
        this.usersActions.getUsersSuccess(res)
        )
      )

      // If request fails, dispatch failed action
      .catch((err) => Observable.of(
        this.usersActions.getUsersFail(err)
      ))
    );

}
