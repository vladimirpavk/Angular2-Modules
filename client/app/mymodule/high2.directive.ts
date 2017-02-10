import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight2]' })
/** Highlight the attached element in gold */
export class HighlightDirective2 {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'blue';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}