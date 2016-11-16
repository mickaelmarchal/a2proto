/* tslint:disable: no-switch-case-fall-through */
import { Action }        from '@ngrx/store';

import { UsersActions }   from './users.actions';
import { UsersState }     from './users.model';


/**
 * Initial state for Auth store
 *
 * @type {{currentUser: any; token: any; loading: boolean; loggedIn: boolean; errorMessage: any; redirectUrl: string}}
 */
const initialState: UsersState = {
  users: [],
  loading: false,
  loaded: false,
  errorMessage: null
};


export function usersReducer(state = initialState, action: Action): UsersState {

  switch (action.type) {

    // login has started
    case UsersActions.GET_USERS: {

      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        errorMessage: null
      });
    }

    // login have failed
    case UsersActions.GET_USERS_FAIL: {

      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        errorMessage: action.payload
      });
    }

    // login success
    case UsersActions.GET_USERS_SUCCESS: {

      return Object.assign({}, state, {
        users: action.payload,
        loading: false,
        loaded: true,
        errorMessage: null
      });
    }

    default: {
      return state;
    }

  }
}

