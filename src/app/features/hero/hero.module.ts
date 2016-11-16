import { NgModule }             from '@angular/core';

import { SharedModule }        from "../../shared/shared.module";
import { HeroRoutingModule }   from "./hero-routing.module";

import { HeroListComponent }   from "./hero-list/hero-list.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroEditComponent }   from "./hero-edit/hero-edit.component";
import { HeroSearchComponent } from "./hero-search/hero-search.component";

import { HeroSearchService }   from "./hero-search/hero-search.service";
import { HeroDetailResolve }   from "./hero-detail/hero-detail-resolve.service";


@NgModule({
  imports: [ SharedModule, HeroRoutingModule ],
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
