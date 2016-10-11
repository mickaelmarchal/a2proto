import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { CrisisComponent }    from './crisis.component';
import { CrisisListComponent }    from './crisis-list.component';
import { CrisisDetailComponent }  from './crisis-detail.component';
import { CrisisHomeComponent } from "./crisis-home.component";

const routes: Routes = [
  {
    path: '',
    component: CrisisComponent,
    children: [{
      path: '',
      component: CrisisListComponent,
      children: [
        {
          path: ':id',
          component: CrisisDetailComponent
        },
        {
          path: '',
          component: CrisisHomeComponent
        }
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule {}

