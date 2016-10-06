import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },

  //note: /dynamic-form is in own router
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
