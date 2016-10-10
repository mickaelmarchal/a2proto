
import { NgModule }           from '@angular/core';


import {SharedModule} from "../shared/shared.module";

// necessary for current module
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "../core/hero.service";

// routing for module is here
import { routing } from './dashboard.routing';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }