import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';

import './app/rxjs-extensions';
import { AppComponent } from './app/app.component';
import { routing, routedComponents } from './app.routing';
import { HeroService } from './app/hero/hero.service';
import { HeroSearchComponent } from './app/hero/hero-search/hero-search.component';
import { HighlightDirective } from './app/hero/highlight.directive';
import { HeroEditComponent } from './app/hero/hero-edit/hero-edit.component';

// feature modules
import { DashboardModule } from './app/dashboard/dashboard.module';
import { DynamicFormModule } from './app/dynamic-form/dynamic-form.module';
import { DemoFormModule } from './app/demo-form/demo-form.module';


@NgModule({
  imports: [          /** things that we need to build this module */
    BrowserModule,
    HttpModule,

    FormsModule,
    ReactiveFormsModule,

    DynamicFormModule,
    DemoFormModule,
    DashboardModule,

    routing,
  ],
  declarations: [     /** things that are created in this module */
    AppComponent,
    HeroSearchComponent,
    routedComponents,
    HighlightDirective,
    HeroEditComponent,
],
  providers: [
    HeroService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
