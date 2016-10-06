import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DynamicFormExampleComponent } from './dynamic-form-example.component';


const routes: Routes = [
    {
        path: 'dynamic-form',
        component: DynamicFormExampleComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
