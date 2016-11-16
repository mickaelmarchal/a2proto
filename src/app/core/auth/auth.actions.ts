/* tslint:disable: member-ordering */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

import { Auth, AuthCredentials } from './auth.model';

@Injectable()

export class AuthActions {

  static LOGIN_REQUIRED = '[Auth] Login required';
  loginRequired(redirectUrl: string): Action {
    return {
      type: AuthActions.LOGIN_REQUIRED,
      payload: redirectUrl
    };
  }


  static LOGIN = '[Auth] Login';
  login(auth: AuthCredentials): Action {
    return {
      type: AuthActions.LOGIN,
      payload: auth
    };
  }

  static LOGIN_FAIL = '[Auth] Login Fail';
  loginFail(err: Error): Action {
    return {
      type: AuthActions.LOGIN_FAIL,
      payload: err
    };
  }

  static LOGIN_SUCCESS = '[Auth] Login Success';
  loginSuccess(auth: Auth): Action {
    return {
      type: AuthActions.LOGIN_SUCCESS,
      payload: auth
    };
  }


  static LOGOUT = '[Auth] Logout';
  logout(): Action {
    return {
      type: AuthActions.LOGOUT
    };
  }

  static LOGOUT_FAIL = '[Auth] Logout Fail';
  logoutFail(err: Error): Action {
    return {
      type: AuthActions.LOGOUT_FAIL,
      payload: err
    };
  }

  static LOGOUT_SUCCESS = '[Auth] Logout Success';
  logoutSuccess(res: Response): Action {
    return {
      type: AuthActions.LOGOUT_SUCCESS,
      payload: res
    };
  }
}
