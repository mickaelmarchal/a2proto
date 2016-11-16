import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { User } from '../../../core/users/users.model';
import { UsersService } from '../../../core/users/users.service';
import {Title} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  templateUrl: 'users-list.component.html'
})
export class UsersListComponent implements OnInit {

  users: User[];
  error: any;

  columns = [
    {id: "id", label: "Id"},
    {id: "name", label: "Name", template: (user) => { return user.firstName+' '+user.lastName} },
    {id: "email", label: "E-mail"}
  ];

  actions = [
    {label: "Delete", action: (user) => this.deleteUser(user) }
  ]

  constructor(
    private router: Router,
    private title: Title,
    private route: ActivatedRoute,
    private usersService: UsersService) {

    this.usersService.onUsersChange().subscribe((users) => {this.users = users} );

  }


  deleteUser(user: User) {
    /*this.userService
      .deleteUser(user.id)
      .then( () => {
        this.users = this.users.filter((value: User) => { return value.id !== user.id });
      })*/
  }

  ngOnInit(): void {

    this.title.setTitle('User management');

    //the forEach allows listening to all changes in the params (which is an observable)
    this.route.params.forEach((params: Params) => {
      this.usersService.getUsers();
    });
  }
}
