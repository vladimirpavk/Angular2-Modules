/// <reference path="../../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective2 } from './high2.directive';
import { TitleComponent } from './title.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [     
    HighlightDirective2,
    TitleComponent
   ],
   exports: [ HighlightDirective2, TitleComponent ]
})
export class MyModule { }