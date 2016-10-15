import { NgModule }                 from '@angular/core';

import { SharedModule }             from "../shared/shared.module";
import { DynamicFormRoutingModule } from "./dynamic-form-routing.module";

import { DynamicFormExampleComponent }  from './dynamic-form-example.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { QuestionService }              from './question.service';


@NgModule({
  imports: [ SharedModule, DynamicFormRoutingModule ],
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormExampleComponent
  ],
  providers:  [
    QuestionService
  ]
})
export class DynamicFormModule { }