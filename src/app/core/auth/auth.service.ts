import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_BASE_URL } from '../../services/constants';
import { RequestBase } from '../../services/request-base';
import { JwtHelper } from "angular2-jwt";
import {Auth, AuthCredentials} from "./auth.model";

@Injectable()
export class AuthService extends RequestBase {

  constructor(
    public http: Http,
    private jwtHelper: JwtHelper
  ) {
    super(http);
  }

  /**
   * Try to log-in the user using provided credentials
   * @returns {Observable<boolean>}
   * @param credentials
   */
  public login(credentials: AuthCredentials): Observable<boolean> {

    console.log(credentials, 'login service form values');

    return this.http.post(`${API_BASE_URL}/login`, {
      _username: credentials.username,
      _password: credentials.password
    })

    // extract data from request (security) TODO: move extractData to RequestBase
      .map(this.extractData)
      .map(data => {

        let decodedToken = this.jwtHelper.decodeToken(data.token);

        //TODO not at the right place !
        localStorage.setItem('id_token', data.token);

        // return payload to use by action
        let res: Auth = {
          token: data.token,
          username: decodedToken.username
        };

        return res;
      })
      .catch(this.handleError);
  }


  logout(): Observable<string> {
    return this.http.get(`${API_BASE_URL}/logout`, this.optionsNoPre)
      .map(res => res.text());
  }


  private extractData(res: Response) {
    let body = res.json();

    //console.log(body, 'BODY');
    return body || { };
  }


  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
