/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HighlightDirective } from './highlight.directive';
import { MyModule } from './mymodule/mymodule.module';

@NgModule({
  imports:      [ BrowserModule,
  MyModule ],
  declarations: [ 
    AppComponent,
    HighlightDirective
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }