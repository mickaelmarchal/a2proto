import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';

import { HeroListComponent }    from "./hero-list/hero-list.component";
import { HeroDetailComponent }  from "./hero-detail/hero-detail.component";
import { CanDeactivateGuard }   from "../can-deactivate-guard.service";
import { HeroDetailResolve }    from "./hero-detail/hero-detail-resolve.service";


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: HeroListComponent
    },
    {
      path: 'detail/:id',
      component: HeroDetailComponent,
      canDeactivate: [CanDeactivateGuard],
      resolve: {
        hero: HeroDetailResolve
      }
    }
  ])],
  providers: [CanDeactivateGuard],
  exports: [RouterModule]
})
export class HeroRoutingModule {}
