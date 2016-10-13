import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';

import { DynamicFormExampleComponent } from "./dynamic-form-example.component";


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'dynamic-form',
      component: DynamicFormExampleComponent
    }
  ])],
  exports: [RouterModule]
})
export class DynamicFormRoutingModule {}
