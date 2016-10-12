
import { NgModule }           from '@angular/core';


// necessary for current module
import {SharedModule} from "../shared/shared.module";
import {HeroService} from "../core/hero.service";
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroEditComponent} from "./hero-edit/hero-edit.component";
import {HeroSearchComponent} from "./hero-search/hero-search.component";
import {HeroSearchService} from "./hero-search/hero-search.service";

// routing for module is here
import { routing } from './hero.routing';
import {HeroDetailResolve} from "./hero-detail/hero-detail-resolve.service";


@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent,
        HeroEditComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroSearchService,
        HeroDetailResolve
    ]
})
export class HeroModule { }