import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsersService } from '../../../core/users/users.service';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  moduleId: module.id,
  templateUrl: 'users-add.component.html'
})
export class UsersAddComponent {

  userAddForm: FormGroup;

  constructor(
    public usersService: UsersService,
    public router: Router,
    public fb: FormBuilder
  ) {
    this.userAddForm = fb.group({
      'email': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'plainPassword': ['', Validators.required]
    });
  }

  addUser(formValues: any): void {
    /*this.usersService
      .addUser(formValues)
      .then(user => {
        console.log(user, 'new user');
        this.router.navigate(['/users'])
      })
      .catch(error => console.log(error));*/
  }
}
