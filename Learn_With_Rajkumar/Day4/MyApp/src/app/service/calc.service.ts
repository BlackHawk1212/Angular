import { Injectable } from '@angular/core';
import CalcManager from './calcManager';

@Injectable({
  providedIn: 'root'
})
export class CalcService implements CalcManager {

  public add(x:number,y:number):number {
    return x + y;
  }

  constructor() { }
}
