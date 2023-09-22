import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import * as io from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket: any;

  constructor() { 
    this.socket = io.connect(`http://127.0.0.1:8002`)
  }

  public listen (eventName: string): Observable<any> {
    return new Observable(
      subscribe => {
        this.socket.on (eventName, (data: any) => {
          subscribe.next(data)
        })
      }
    )
  }

  // emit (eventName: string, data: any) {
  //   this.socket.on(eventName, (data: any) => {
  //     this.socket.emit(eventName, data)
  //   })
  // }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
