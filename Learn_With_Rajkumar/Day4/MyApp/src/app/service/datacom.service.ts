import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatacomService {

  private subject:BehaviorSubject<any> = new BehaviorSubject({});

  constructor() { }

  publishMessage(_eventName:string,_data:any){
    this.subject.next({
      event:_eventName,
      payload:_data,
      ts:new Date()
    })
  }

  public listenToMessage() : Observable<any>{
    return this.subject.asObservable();
  }

  public clean() {
    this.subject.next({});
  }
}
