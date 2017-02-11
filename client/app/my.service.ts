import { Injectable } from '@angular/core';

@Injectable()
export class MyService{
    public neki_tekst: string = "Neki tekst";

    constructor(){console.log('db');};
}