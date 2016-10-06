
import { NgModule }           from '@angular/core';

// required for non-root module
import { CommonModule }       from '@angular/common';

// necessary for current module
import { FormsModule } from '@angular/forms';

import {HeroService} from "../hero/hero.service";
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroEditComponent} from "./hero-edit/hero-edit.component";
import {HeroSearchComponent} from "./hero-search/hero-search.component";
import {HeroSearchService} from "./hero-search/hero-search.service";
import { HighlightDirective } from './highlight.directive';

// routing for module is here
import { routing } from './hero.routing';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        HeroListComponent,
        HeroDetailComponent,
        HeroEditComponent,
        HeroSearchComponent,
        HighlightDirective
    ],
    providers: [
        HeroService,
        HeroSearchService
    ]
})
export class HeroModule { }