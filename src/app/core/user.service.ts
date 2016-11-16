import { Injectable } from '@angular/core';
import { AuthHttp } from "angular2-jwt";
import 'rxjs/add/operator/toPromise';

import { User } from '../features/users/user';
import {Response} from "@angular/http";

@Injectable()
export class UserService {

  private usersUrl = 'https://a2backend.local/api/users';  // URL to web api

  constructor(private http: AuthHttp) { }

  getUsers(): Promise<User[]> {
    return this.http
      .get(this.usersUrl)
      .map(this.extractData)
      .toPromise()
      .then(data => data as User[])
      .catch(this.handleError);
  }

  addUser(formValues: any): Promise<User> {
    return this.http
      .post(this.usersUrl, formValues)
      .map(this.extractData)
      .toPromise()
      .then(data => data as User)
      .catch(this.handleError);
  }

  deleteUser(userId: number): Promise<void> {
    return this.http
      .delete(this.usersUrl+'/'+userId)
      .map(this.extractData)
      .toPromise()
      .then(response => {})
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
}

//needed by angular demo
export class UserServiceConfig {
  userName = 'Philip Marlowe';
}
