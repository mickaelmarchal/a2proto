import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import './rxjs-extensions';

import { AppComponent } from './app.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';


// feature modules
import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HeroModule } from './hero/hero.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { ContactModule }    from './contact/contact.module';
import { LoginRoutingModule }   from './login-routing.module';

import { LoginComponent }       from './login.component';
import { DialogService }        from './dialog.service';

import { BasePageComponent }    from "./base-page.component";
import { PageOneComponent }    from "./page-one.component";
import { PageTwoComponent }    from "./page-two.component";


@NgModule({
  imports: [          /** things that we need to build this module */
    BrowserModule,
    HttpModule,
    CoreModule.forRoot({userName: 'Miss Marple'}),

    DashboardModule,
    HeroModule,
    DynamicFormModule,
    ContactModule,

    AppRoutingModule,
    LoginRoutingModule
  ],
  declarations: [     /** things that are created in this module */
    AppComponent,
    LoginComponent /*,
    BasePageComponent, PageOneComponent, PageTwoComponent */
],
  providers: [
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService },     // in-mem server data
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
