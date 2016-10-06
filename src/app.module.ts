import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';

import './app/rxjs-extensions';

import { AppComponent } from './app/app.component';
import { routing } from './app.routing';


// feature modules
import { DashboardModule } from './app/dashboard/dashboard.module';
import { HeroModule } from './app/hero/hero.module';
import { DynamicFormModule } from './app/dynamic-form/dynamic-form.module';
import { DemoFormModule } from './app/demo-form/demo-form.module';



@NgModule({
  imports: [          /** things that we need to build this module */
    BrowserModule,
    HttpModule,

    DashboardModule,
    HeroModule,
    DynamicFormModule,
    DemoFormModule,

    routing,
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
