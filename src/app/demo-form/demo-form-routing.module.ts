import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import {DemoFormComponent} from "./demo-form.component";


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: DemoFormComponent
    }
  ])],
  exports: [RouterModule]
})
export class DemoFormRoutingModule {}
