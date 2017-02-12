import { Directive, ElementRef } from '@angular/core';
import { MyService } from './my.service';

@Directive({ selector: '[highlight]' },)
/** Highlight the attached element in gold */
export class HighlightDirective {
  constructor(el: ElementRef, _myService: MyService) {
    el.nativeElement.style.backgroundColor = 'gold';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
      console.log('From highlight directive: ' + _myService.neki_tekst);
  }
}