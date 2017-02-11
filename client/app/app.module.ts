/// <reference path="../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HighlightDirective } from './highlight.directive';
import { MyModule } from './mymodule/mymodule.module';
import { MyService } from './my.service';
import { MyService2 } from './my2.service';
import { MyService3 } from './my3.service';

@NgModule({
  imports:      [ BrowserModule,
  MyModule ],
  declarations: [ 
    AppComponent,
    HighlightDirective
   ],
   //Second globally def providers for module components
   providers: [ 
     { 
       provide: MyService,
       useClass: MyService3
    } ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }