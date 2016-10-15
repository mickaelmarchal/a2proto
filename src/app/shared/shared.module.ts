import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HighlightDirective } from './highlight.directive';
import { AwesomePipe }        from './awesome.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    AwesomePipe
  ],
  exports: [
    HighlightDirective,
    AwesomePipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
