import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanDeactivateGuard }   from './can-deactivate-guard.service';
import { AuthGuard }            from "./auth-guard.service";

export const routes: Routes = [

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
