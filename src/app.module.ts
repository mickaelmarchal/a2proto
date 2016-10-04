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
import { HeroService } from './app/heroes/hero.service';
import { HeroSearchComponent } from './app/heroes/hero-search/hero-search.component';
import { HighlightDirective } from './app/heroes/highlight.directive';

import { HeroEditComponent } from './app/heroes/hero-edit/hero-edit.component';

import { DynamicFormComponent } from './app/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './app/dynamic-form/dynamic-form-question.component';


@NgModule({
  imports: [          /** things that we need to build this module */
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule
  ],
  declarations: [     /** things that are created in this module */
    AppComponent,
    HeroSearchComponent,
    routedComponents,
    HighlightDirective,
    HeroEditComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
],
  providers: [
    HeroService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA, useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
