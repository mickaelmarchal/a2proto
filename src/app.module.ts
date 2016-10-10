import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';

import './app/rxjs-extensions';

import { AppComponent } from './app/app.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';


// feature modules
import { CoreModule } from './app/core/core.module';
import { DashboardModule } from './app/dashboard/dashboard.module';
import { HeroModule } from './app/hero/hero.module';
import { DynamicFormModule } from './app/dynamic-form/dynamic-form.module';
import { ContactModule }    from './app/contact/contact.module';


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
  ],
  declarations: [     /** things that are created in this module */
    AppComponent
],
  providers: [
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
