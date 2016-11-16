import { NgModule }             from '@angular/core';

import { SharedModule }         from "../../shared/shared.module";
import { UsersRoutingModule }   from "./users-routing.module";
import { UsersListComponent }   from "./users-list/users-list.component";
import { UsersAddComponent }    from "./user-add/users-add.component";


@NgModule({
  imports: [ SharedModule, UsersRoutingModule ],
  declarations: [
    UsersListComponent,
    UsersAddComponent
  ]
})
export class UsersModule { }
