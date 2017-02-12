/// <reference path="../../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightDirective2 } from './high2.directive';
import { TitleComponent } from './title.component';
import { MyService } from '../my.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [     
    HighlightDirective2,
    TitleComponent
   ],
   exports: [ HighlightDirective2, TitleComponent, BrowserModule ]
})
export class MyModule { }

//can you export providers - that would be cool
//Now Ill try
//added import {MyService}
//added MyService to providers and exports
//see an errors by MyService is still defined in app.module