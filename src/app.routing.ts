import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './app/dashboard.component';
import { HeroesComponent } from './app/heroes/heroes.component';
import { HeroDetailComponent } from './app/heroes/hero-detail/hero-detail.component';

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
  }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [DashboardComponent, HeroesComponent, HeroDetailComponent];