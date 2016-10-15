import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanDeactivateGuard }   from './can-deactivate-guard.service';
import { AuthGuard }            from "./auth-guard.service";

import { BasePageComponent }    from "./base-page.component";
import { PageOneComponent }    from "./page-one.component";
import { PageTwoComponent }    from "./page-two.component";

export const routes: Routes = [

/*  {
    path: '/base-page',
    component: BasePageComponent,
    children: [
      {
        path: 'page-one',
        component: PageOneComponent
      },
      {
        path: 'page-two',
        component: PageTwoComponent
      }
    ]
  },
*/
  {
    path: 'crisis',
    loadChildren: 'app/crisis/crisis.module#CrisisModule'
  },
  {
    path: 'demo-form',
    loadChildren: 'app/demo-form/demo-form.module#DemoFormModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CanDeactivateGuard
  ]
})
export class AppRoutingModule {}
