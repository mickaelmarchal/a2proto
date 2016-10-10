
import { NgModule }           from '@angular/core';


import {SharedModule} from "../shared/shared.module";

import { DynamicFormExampleComponent }         from './dynamic-form-example.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { QuestionService } from './question.service';

// routing for module is here
import { routing } from './dynamic-form.routing';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
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