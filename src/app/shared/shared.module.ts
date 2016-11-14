import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HighlightDirective } from './highlight.directive';
import { FocusDirective }     from './focus.directive';
import { AutofocusDirective }     from './autofocus.directive';
import { AwesomePipe }        from './awesome.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HighlightDirective,
    FocusDirective,
    AutofocusDirective,
    AwesomePipe
  ],
  exports: [
    HighlightDirective,
    FocusDirective,
    AutofocusDirective,
    AwesomePipe,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
