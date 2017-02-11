/// <reference path="../../node_modules/@angular/common/index.d.ts" />

var __moduleName: any;

import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  moduleId: __moduleName,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  // First //providers: [ MyService ]

})
export class AppComponent {
  private postoji: boolean = true;

  constructor(private _myService:MyService){

  }
 }