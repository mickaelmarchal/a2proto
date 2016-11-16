/* tslint:disable: no-switch-case-fall-through */
import { Action } from '@ngrx/store';

import { AuthActions } from './auth.actions';
import { Auth } from './auth.model';

export interface AuthState {
  currentUser: Auth;
  loading: boolean;
  loggedIn: boolean;
  errorMessage: string|null;
  redirectUrl: string;
};

const initialState: AuthState = {
  currentUser: { },
  loading: false,
  loggedIn: false,
  errorMessage: null,
  redirectUrl: ''
};

export function authReducer(state = initialState, action: Action): AuthState {
  switch (action.type) {

    // login is required
    case AuthActions.LOGIN_REQUIRED: {

      console.log(action.payload, 'login required reducer');

      // crée une copie du state avec en clé "auth", le nouvel auth (qui est la payload recue depuis le authservice)

      // login is loading
      return Object.assign({}, state, {
        redirectUrl: action.payload
      });
    }

    // login has started
    case AuthActions.LOGIN: {

      console.log(action.payload, 'login reducer');

      // crée une copie du state avec en clé "auth", le nouvel auth (qui est la payload recue depuis le authservice)

      // login is loading
      return Object.assign({}, state, {
        loading: true,
        loggedIn: false,
        errorMessage: null
      });
    }

    // login have failed
    case AuthActions.LOGIN_FAIL: {

      console.log(action.payload, 'login fail reducer');

      // crée une copie du state avec en clé "auth", le nouvel auth (qui est la payload recue depuis le authservice)

      // login is loading
      return Object.assign({}, state, {
        loading: false,
        loggedIn: false,
        errorMessage: action.payload
      });
    }

    // login success
    case AuthActions.LOGIN_SUCCESS: {

      console.log(action.payload, 'login success reducer');

      // crée une copie du state avec en clé "auth", le nouvel auth (qui est la payload recue depuis le authservice)

      // login is loading
      return Object.assign({}, state, {
        currentUser: action.payload,
        loading: false,
        loggedIn: true,
        errorMessage: null
      });
    }

    default: {
      return state;
    }
  }
}

