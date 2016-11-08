import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import '../rxjs-extensions';

import { Http, Response } from '@angular/http';

@Injectable()
export class AuthService {

//  private loginUrl = 'app/login';  // URL to web API
  private loginUrl = "https://localhost/authenticate";

  public isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  public redirectUrl: string;

  constructor (private http: Http) {}


  /**
   * Try to log-in the user using provided credentials
   * @param formValues
   * @returns {Observable<R>}
   */
  public login(formValues: any): Observable<boolean> {
    // https://a2backend.local/authenticate/user/password/1
    return this.http.get(this.loginUrl+'/'+formValues.username+'/'+formValues.password+'/'+formValues.remember)
      .map(this.extractData)
      .map(user => {
        //TODO get JWT token and store it
        this.isLoggedIn = true;
      })
      .catch(this.handleError);


    //return Observable.of(true).delay(1500).do(val => this.isLoggedIn = true);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
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


  /**
   * Log the user out
   */
  public logout(): void {
    this.isLoggedIn = false;
  }
}
