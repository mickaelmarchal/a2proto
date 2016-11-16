import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';

import { UsersListComponent }   from "./users-list/users-list.component";
import { CanDeactivateGuard }   from "../../can-deactivate-guard.service";
import { UsersAddComponent }    from "./user-add/users-add.component";


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: UsersListComponent
    },
    {
      path: 'add',
      component: UsersAddComponent
    },
/*
    {
      path: 'detail/:id',
      component: HeroDetailComponent,
      canDeactivate: [CanDeactivateGuard],
      resolve: {
        hero: HeroDetailResolve
      }
    }*/
  ])],
  providers: [CanDeactivateGuard],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
