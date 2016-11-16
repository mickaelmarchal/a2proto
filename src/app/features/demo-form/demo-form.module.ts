import { NgModule }               from '@angular/core';

import { SharedModule }           from "../../shared/shared.module";
import { DemoFormRoutingModule }  from './demo-form-routing.module';

import { DemoFormComponent } from './demo-form.component';


@NgModule({
  imports: [
    SharedModule,
    DemoFormRoutingModule
  ],
  declarations: [
    DemoFormComponent
  ]
})
export class DemoFormModule { }