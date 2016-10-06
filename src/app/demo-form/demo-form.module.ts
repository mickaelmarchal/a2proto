
import { NgModule }           from '@angular/core';

// required for non-root module
import { CommonModule }       from '@angular/common';

// necessary for current module
import { ReactiveFormsModule } from '@angular/forms';

import { DemoFormComponent } from './demo-form.component';

// routing for module is here
import { routing } from './demo-form.routing';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        DemoFormComponent
    ]
})
export class DemoFormModule { }