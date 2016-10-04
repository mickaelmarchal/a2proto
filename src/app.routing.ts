import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './app/dashboard/dashboard.component';
import { HeroesComponent } from './app/heroes/heroes.component';
import { HeroDetailComponent } from './app/heroes/hero-detail/hero-detail.component';
import { DemoFormComponent } from './app/demo-form/demo-form.component';
import { DynamicFormExampleComponent }         from './app/dynamic-form/dynamic-form-example.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },

  {
    path: 'demo-form',
    component: DemoFormComponent
  },

  {
    path: 'dynamic-form',
    component: DynamicFormExampleComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [DashboardComponent, HeroesComponent, HeroDetailComponent, DemoFormComponent, DynamicFormExampleComponent];
