/* tslint:disable: no-switch-case-fall-through */
import { Action }        from '@ngrx/store';

import { AuthActions }   from './auth.actions';
import { AuthState }     from './auth.model';


/**
 * Initial state for Auth store
 *
 * @type {{currentUser: any; token: any; loading: boolean; loggedIn: boolean; errorMessage: any; redirectUrl: string}}
 */
const initialState: AuthState = {
  currentUser: null,
  token: null,
  loading: false,
  loggedIn: false,
  errorMessage: null,
  redirectUrl: ''
};


export function authReducer(state = initialState, action: Action): AuthState {

  switch (action.type) {

    // login is required
    case AuthActions.LOGIN_REQUIRED: {

      //TODO modify router to go to login page (router is in another Store)
      return Object.assign({}, state, {
        redirectUrl: action.payload
      });
    }

    // login has started
    case AuthActions.LOGIN: {

      return Object.assign({}, state, {
        loading: true,
        loggedIn: false,
        errorMessage: null
      });
    }

    // login have failed
    case AuthActions.LOGIN_FAIL: {

      return Object.assign({}, state, {
        loading: false,
        loggedIn: false,
        errorMessage: action.payload
      });
    }

    // login success
    case AuthActions.LOGIN_SUCCESS: {

      return Object.assign({}, state, {
        currentUser: action.payload.currentUser,
        token: action.payload.token,
        loading: false,
        loggedIn: true,
        errorMessage: null
      });
    }

    // logout
    case AuthActions.LOGOUT: {

      //restore auth to initial state
      return Object.assign({}, state, initialState);
    }

    default: {
      return state;
    }
  }
}

