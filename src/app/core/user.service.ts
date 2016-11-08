import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../users/user';

@Injectable()
export class UserService {

  private usersUrl = 'https://a2backend.local/users';  // URL to web api

  constructor(private http: Http) { }

  getUsers(): Promise<User[]> {
    return this.http
      .get(this.usersUrl)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  addUser(formValues: any): Promise<User> {
    return this.http
      .post(this.usersUrl, formValues)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }

  deleteUser(userId: number): Promise<void> {
    return this.http
      .delete(this.usersUrl+'/'+userId)
      .toPromise()
      .then(response => {})
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

//needed by angular demo
export class UserServiceConfig {
  userName = 'Philip Marlowe';
}
