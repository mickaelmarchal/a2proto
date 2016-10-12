import { NgModule }            from '@angular/core';
import { Routes,
    RouterModule }        from '@angular/router';

import { AuthGuard }                from '../auth-guard.service';

import {AdminComponent} from "./admin.component";
import {ManageCrisesComponent} from "./manage-crises.component";
import {ManageHeroesComponent} from "./manage-heroes.component";
import {AdminDashboardComponent} from "./admin-dashboard.component";

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                //note: pas de component ici, du coup c'est comme si on avait un component
                //avec juste un <router-outlet> dedans, rien d'autre.
                //alors que dans Crisis, on a un composant CrisisList, qui met un peu de markup
                //et du coup indique le <router-outlet>
                canActivateChild: [AuthGuard],
                children: [
                    { path: 'crises', component: ManageCrisesComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
//    providers: [AuthGuard]
})
export class AdminRoutingModule {}
