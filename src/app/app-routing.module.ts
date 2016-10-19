import { NgModule }             from '@angular/core';
import { RouterModule } from '@angular/router';

import {AuthGuard} from "./auth-guard.service";
import {LayoutComponent} from "./layout/layout.component";
import {LoginComponent} from "./login.component";
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroModule } from './hero/hero.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { ContactModule }    from './contact/contact.module';


@NgModule({
  imports: [RouterModule.forRoot([

    // all modules below are using the standard layout
    // TODO add auth guard for all those pages
    {
      path: '',
      component: LayoutComponent,
      children: [
        // lazy-loaded feature modules
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

        // imperatively-loaded feature modules - see https://github.com/angular/angular/issues/10958
        {
          path: 'heroes',
          loadChildren: () => HeroModule
        },
        {
          path: 'dynamic-form',
          loadChildren: () => DynamicFormModule
        },
        {
          path: 'contact',
          loadChildren: () => ContactModule
        },
        {
          path: 'dashboard',
          loadChildren: () => DashboardModule
        }
      ]
    },

    // this module is not using any layout
    {
      path: 'login',
      component: LoginComponent,
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
