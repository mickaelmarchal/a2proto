/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { User } from './users.model';

@Injectable()

export class UsersActions {

  static GET_USERS = '[Users] Get users';
  getUsers(): Action {
    return {
      type: UsersActions.GET_USERS,
    };
  }

  static GET_USERS_SUCCESS = '[Users] Get users Success';
  getUsersSuccess(users: Array<User>): Action {
    return {
      type: UsersActions.GET_USERS_SUCCESS,
      payload: users
    };
  }

  static GET_USERS_FAIL = '[Users] Get users Fail';
  getUsersFail(err: Error): Action {
    return {
      type: UsersActions.GET_USERS_FAIL,
      payload: err
    };
  }


}
