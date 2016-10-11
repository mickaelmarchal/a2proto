import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [

  { path: 'crisis', loadChildren: 'src/app/crisis/crisis.module#CrisisModule' },
  {
    path: 'demo-form',
    loadChildren: 'src/app/demo-form/demo-form.module#DemoFormModule'
  },

  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
