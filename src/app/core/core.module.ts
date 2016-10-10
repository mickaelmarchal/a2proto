
import {     ModuleWithProviders, NgModule,
    Optional, SkipSelf }       from '@angular/core';


// required for non-root module
import { CommonModule }       from '@angular/common';

// necessary for current module
import { HeroService } from './hero.service';
import { TitleComponent }    from './title.component';
import { UserService }       from './user.service';
import { UserServiceConfig } from './user.service';



@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TitleComponent
    ],
    providers: [
        HeroService,
        UserService
    ],
    exports: [
        TitleComponent
    ]
})
export class CoreModule {

    //anti-reimport if already imported
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    //convention to say that it can only be imported by root module
    static forRoot(config: UserServiceConfig): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                {provide: UserServiceConfig, useValue: config }
            ]
        };
    }

}
