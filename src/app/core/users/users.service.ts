import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import { AuthHttp } from "angular2-jwt";

import { API_BASE_URL } from '../../services/constants';

import { RequestBase } from '../../services/request-base';

import { User, UsersState } from "./users.model";
import { UsersActions }                             from "./users.actions";
import { AppState }                                 from "../reducers";


/**
 * Internal-use auth service, must not be used outside of auth / core module
 */
@Injectable()
export class UsersRequestService extends RequestBase {

  constructor(
    public http: AuthHttp
  ) {
    super();
  }

  /**
   * Get all users
   * @returns {Observable<User[]>}
   * @param credentials
   */
  public getUsers(): Observable<User[]> {

    //noinspection TypeScriptValidateTypes
    return this.http.get(`${API_BASE_URL}/users`)
      .map(this.extractData)
      .map((data: User[]) => {
        return data;
      })
      .catch(this.handleError);
  }

}

/**
 * Public UsersService
 */
@Injectable()
export class UsersService {

  constructor(
    private store: Store<AppState>,
    private usersActions: UsersActions
  ) { }


  /**
   * Observes users changed event
   * @returns {Observable<R>}
   */
  public onUsersChange(): Observable<User[]> {
    return this.store.select(state => { return state.users.users });
  }


  /**
   * Get users
   * @param credentials
   */
  public getUsers(): void {
    this.store.dispatch(this.usersActions.getUsers());
  }

}
