import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import './rxjs-extensions';

// Routing Module
import { AppRoutingModule }        from './app-routing.module';

// feature modules
import { CoreModule }              from './core/core.module';
import { DashboardModule }         from './dashboard/dashboard.module';
import { HeroModule }              from './hero/hero.module';
import { DynamicFormModule }       from './dynamic-form/dynamic-form.module';
import { ContactModule }           from './contact/contact.module';

// TODO clean this
//import { LoginRoutingModule }      from './login-routing.module';

// components / service defined in current module
import { AppComponent }            from './app.component';
import { AppLayoutComponent }         from "./app-general/layout/layout.component";
import { AppLayoutSidemenuComponent } from "./app-general/layout-sidemenu/layout-sidemenu.component";
import { AppLoginComponent }  from './app-general/login/login.component';
import { AppPage404Component }  from './app-general/page404/page404.component';

//import { LoginComponent } from './login.component';
import { DialogService }           from './dialog.service';
import {SharedModule} from "./shared/shared.module";


@NgModule({
  imports: [          /** things that we need to build this module */
    SharedModule,
    BrowserModule,
    HttpModule,
    CoreModule.forRoot({userName: 'Miss Marple'}),

    AppRoutingModule,

//    LoginRoutingModule,

    DashboardModule,
    HeroModule,
    DynamicFormModule,
    ContactModule
  ],
  declarations: [     /** things that are created in this module */
    AppComponent,
    AppLoginComponent,
    AppLayoutComponent,
    AppLayoutSidemenuComponent,
    AppPage404Component
//    LoginComponent
],
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
