
import { NgModule }           from '@angular/core';

import {SharedModule} from "../shared/shared.module";

import { DemoFormComponent } from './demo-form.component';

// routing for module is here
import { DemoFormRoutingModule }    from './demo-form-routing.module';


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