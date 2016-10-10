import { NgModule }            from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import {DemoFormComponent} from "./demo-form.component";

const routes: Routes = [
  { path: '',    component: DemoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoFormRoutingModule {}
