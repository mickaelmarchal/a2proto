
import { NgModule }           from '@angular/core';

// required for non-root module
import { CommonModule }       from '@angular/common';

// necessary for current module
import {DashboardComponent} from "./dashboard.component";
import {HeroService} from "../hero/hero.service";

// routing for module is here
import { routing } from './dashboard.routing';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [
        HeroService
    ]
})
export class DashboardModule { }