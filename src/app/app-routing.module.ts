import { NgModule }             from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from "./core/auth-guard.service";
import { AppLayoutComponent } from "./app-general/layout.component";
import { AppLoginComponent } from "./app-general/login.component";

import { DashboardModule } from './dashboard/dashboard.module';
import { HeroModule } from './hero/hero.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { ContactModule }    from './contact/contact.module';


@NgModule({
  imports: [RouterModule.forRoot([

    // all modules below are using the standard layout, and user must be logged-in
    {
      path: '',
      component: AppLayoutComponent,
      canActivate: [AuthGuard],
      canActivateChildren: [AuthGuard],
      children: [
        // lazy-loaded feature modules
        {
          path: 'crisis',
          loadChildren: 'app/crisis/crisis.module#CrisisModule'
          canLoad: [AuthGuard]
        },
        {
          path: 'demo-form',
          loadChildren: 'app/demo-form/demo-form.module#DemoFormModule'
          canLoad: [AuthGuard]
        },
        {
          path: 'admin',
          loadChildren: 'app/admin/admin.module#AdminModule',
          canLoad: [AuthGuard]
        },

        // imperatively-loaded feature modules - see https://github.com/angular/angular/issues/10958
        {
          path: 'heroes',
          loadChildren: () => HeroModule,
          canLoad: [AuthGuard]
        },
        {
          path: 'dynamic-form',
          loadChildren: () => DynamicFormModule,
          canLoad: [AuthGuard]
        },
        {
          path: 'contact',
          loadChildren: () => ContactModule,
          canLoad: [AuthGuard]
        },
        {
          path: 'dashboard',
          loadChildren: () => DashboardModule,
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
      redirectTo: '/dashboard',
      pathMatch: 'full'
    }

    // TODO 404 page

  ])],
  exports: [RouterModule],
})
export class AppRoutingModule {}
