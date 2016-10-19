import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
// TODO move this somewhere else (coreModule ?)
import { XHRBackend }                        from '@angular/http';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';
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
import { LoginRoutingModule }      from './login-routing.module';

// components / service defined in current module
import { AppComponent }            from './app.component';
import { LayoutComponent }         from "./layout/layout.component";
import { LayoutSidemenuComponent } from "./layout/layout-sidemenu.component";
import { LoginComponent }          from './login.component';
import { DialogService }           from './dialog.service';


@NgModule({
  imports: [          /** things that we need to build this module */
    BrowserModule,
    HttpModule,
    CoreModule.forRoot({userName: 'Miss Marple'}),

    AppRoutingModule,

    LoginRoutingModule,

    DashboardModule,
    HeroModule,
    DynamicFormModule,
    ContactModule
  ],
  declarations: [     /** things that are created in this module */
    AppComponent,
    LoginComponent,
    LayoutComponent,
    LayoutSidemenuComponent
],
  providers: [
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService },     // in-mem server data
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
