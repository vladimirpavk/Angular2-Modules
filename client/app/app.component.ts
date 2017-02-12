/// <reference path="../../node_modules/@angular/common/index.d.ts" />

var __moduleName: any;

import { Component } from '@angular/core';
import { MyService } from './my.service';
import { MyService2 } from './my2.service';

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [{
    provide: MyService,
    useClass: MyService2
  }]
  // First //providers: [ MyService ]

})
export class AppComponent {
  private postoji: boolean = true;

  constructor(private _myService:MyService){
      console.log("From AppComponent : "+ this._myService.neki_tekst);
  }
 }