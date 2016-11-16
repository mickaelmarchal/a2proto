import { ModuleWithProviders, NgModule, Optional, SkipSelf }        from '@angular/core';
import { CommonModule }       from "@angular/common";

import { HeroService }        from './hero.service';
import { TitleComponent }     from './title.component';
import { UserService }        from './user.service';
import { UserServiceConfig }  from './user.service';


import { AuthGuard } from "./auth-guard.service";
import { AuthService } from "./auth/auth.service";
import { DialogService }           from './dialog.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TitleComponent
  ],
  providers: [
    AuthGuard,
    AuthService,

    HeroService,
    UserService,
    DialogService,
  ],
  exports: [
    TitleComponent
  ]
})
export class CoreModule {

  // prevents re-import if already imported
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  // convention to say that it can only be imported by root module
  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    };
  }

}
