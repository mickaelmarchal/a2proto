import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DemoFormComponent} from "./demo-form.component";


const routes: Routes = [
    {
        path: 'demo-form',
        component: DemoFormComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
