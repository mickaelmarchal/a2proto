import { NgModule }             from '@angular/core';
import {RouterModule, PreloadAllModules} from '@angular/router';

import { AuthGuard } from "./core/auth-guard.service";
import { AppLayoutComponent } from "./app-general/layout/layout.component";
import { AppLoginComponent } from "./app-general/login/login.component";
import { AppPage404Component } from "./app-general/page404/page404.component";

@NgModule({
  imports: [RouterModule.forRoot([

    // all modules below are using the standard layout, and user must be logged-in
    {
      path: '',
      component: AppLayoutComponent,
      canActivate: [AuthGuard],
      children: [
        // lazy-loaded feature modules
        {
          path: 'crisis',
          loadChildren: './features/crisis/crisis.module#CrisisModule',
          canLoad: [AuthGuard]
        },
        {
          path: 'users',
          loadChildren: './features/users/users.module#UsersModule',
          canLoad: [AuthGuard]
        },
        {
          path: 'demo-form',
          loadChildren: './features/demo-form/demo-form.module#DemoFormModule',
          canLoad: [AuthGuard]
        },
        {
          path: 'admin',
          loadChildren: './features/admin/admin.module#AdminModule',
          canLoad: [AuthGuard]
        },

        // imperatively-loaded feature modules
        {
          path: 'heroes',
          loadChildren: './features/hero/hero.module#HeroModule?sync=true',
          canLoad: [AuthGuard]
        },
        {
          path: 'dynamic-form',
          loadChildren: './features/dynamic-form/dynamic-form.module#DynamicFormModule?sync=true',
          canLoad: [AuthGuard]
        },
        {
          path: 'contact',
          loadChildren: './features/contact/contact.module#ContactModule?sync=true',
          canLoad: [AuthGuard]
        },
        {
          path: 'dashboard',
          loadChildren: './features/dashboard/dashboard.module#DashboardModule?sync=true',
          canLoad: [AuthGuard]
        }
      ]
    },

    // this module is not using any layout
    {
      path: 'login',
      component: AppLoginComponent,
    },

    // default route
    {
      path: '',
      redirectTo: '/users',
      pathMatch: 'full'
    },

    // page 404
    {
      path: '**',
      component: AppPage404Component,
    }
  ], { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
