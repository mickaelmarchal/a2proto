import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";

import { API_BASE_URL } from '../../services/constants';

import { RequestBase } from '../../services/request-base';

import { AuthCredentials, CurrentUser, AuthState } from "./auth.model";
import { AuthActions }                             from "./auth.actions";
import { AppState }                                 from "../reducers";


/**
 * Internal-use auth service, must not be used outside of auth / core module
 */
@Injectable()
export class AuthRequestService extends RequestBase {

  constructor(
    public http: Http,
  ) {
    super(http);
  }

  /**
   * Send login request to the backend using provided credentials
   * @returns {Observable<boolean>}
   * @param credentials
   */
  public login(credentials: AuthCredentials): Observable<boolean> {

    return this.http.post(`${API_BASE_URL}/login`, {
      _username: credentials.username,
      _password: credentials.password
    })

       // extract data from request (security)
      .map((res: Response) => { return res.json() || { } })
      .map((data: any) => {

        //TODO not at the right place !
        localStorage.setItem('id_token', data.token);

        // return payload to use by action
        let res: CurrentUser = data.data;
        return {
          token: data.token,
          currentUser: res
        };
      })
      .catch(this.handleError);
  }

  /**
   * Send logout request to the backend
   * @returns {Observable<boolean>}
   * @param credentials
   *
   * TODO not used for the moment, no need to log out on server
   */
  public logout(): Observable<string> {
    return this.http.get(`${API_BASE_URL}/logout`, this.optionsNoPre)
      .map(res => res.text());
  }

}

/**
 * Public AuthService
 */
@Injectable()
export class AuthService {

  constructor(
    private store: Store<AppState>,
    private authActions: AuthActions
  ) { }


  /**
   * Observes user changed event
   * @returns {Observable<R>}
   */
  public onCurrentUserChange(): Observable<CurrentUser> {

    //listen to changes in auth
    return this.store.select(state => {
      return state.auth.currentUser
    });
  }

  /**
   * Observes auth data changed event
   * @returns {Observable<R>}
   */
  public onAuthChange(): Observable<AuthState> {

    //listen to changes in auth
    return this.store.select(state => {
      return state.auth
    });
  }

  /**
   * Do login
   * @param credentials
   */
  public login(credentials: AuthCredentials): void {
    this.store.dispatch(this.authActions.login(credentials));
  }

  /**
   * Do logout
   * TODO not tested
   */
  logout(): void {

    //TODO not at the right place !
    localStorage.removeItem('id_token');

    this.store.dispatch(this.authActions.logout());
  }

  /**
   * Trigger login form
   * @param redirectUrl
   */
  public triggerLogin(redirectUrl: string)
  {
    this.store.dispatch(this.authActions.loginRequired(redirectUrl));
  }
}
