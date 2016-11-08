import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../user';
import { UserService } from '../../core/user.service';
import {Title} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  templateUrl: 'users-list.component.html'
})
export class UsersListComponent implements OnInit {
  users: User[];
  error: any;

  constructor(
    private router: Router,
    private title: Title,
    private route: ActivatedRoute,
    private userService: UserService) { }

  getUsers(): void {
    this.userService
      .getUsers()
      .then(users => this.users = users)
      .catch(error => this.error = error);
  }

  deleteUser(userId: number) {
    this.userService
      .deleteUser(userId)
      .then( () => {
        this.users = this.users.filter((value: User) => { return value.id !== userId });
      })
  }

  ngOnInit(): void {

    this.title.setTitle('User management');

    //the forEach allows listening to all changes in the params (which is an observable)
    this.route.params.forEach((params: Params) => {
      this.getUsers();
    });
  }
}
