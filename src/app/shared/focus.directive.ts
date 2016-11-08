import {Directive, ElementRef, Input} from '@angular/core';

// X


@Directive({
  selector: '[focus]'
})
export class FocusDirective {
  @Input() focus: boolean;
  private element: HTMLElement;

  constructor ($element: ElementRef) {
    this.element = $element.nativeElement;
  }

  ngAfterContentChecked () {
    this.giveFocus();
  }

  giveFocus () {
    if (this.focus) {
      this.element.focus();
    }
  }
}