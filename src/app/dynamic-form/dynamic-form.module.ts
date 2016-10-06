
import { NgModule }           from '@angular/core';

// required for non-root module
import { CommonModule }       from '@angular/common';

// necessary for current module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { DynamicFormExampleComponent }         from './dynamic-form-example.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { QuestionService } from './question.service';

// routing for module is here
import { routing } from './dynamic-form.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
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