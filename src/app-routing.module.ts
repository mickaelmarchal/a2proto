import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanDeactivateGuard } from './app/can-deactivate-guard.service';
import {AuthGuard} from "./app/auth-guard.service";

export const routes: Routes = [

  { path: 'crisis', loadChildren: 'src/app/crisis/crisis.module#CrisisModule' },
  {
    path: 'demo-form',
    loadChildren: 'src/app/demo-form/demo-form.module#DemoFormModule'
  },
  {
    path: 'admin',
    loadChildren: 'src/app/admin/admin.module#AdminModule',
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
