import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { CanDeactivateGuard }    from '../can-deactivate-guard.service';
import { HeroDetailResolve }   from './hero-detail/hero-detail-resolve.service';

const routes: Routes = [
    {
        path: 'heroes',
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
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
