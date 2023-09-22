import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (
    private websocketService: WebsocketService
  ) { }

  ngOnInit(): void {
    this.websocketService.listen ('typing').subscribe(
      (data: any) => {
        this.updateFeedback (data)
      }
    )

    this.websocketService.listen('server_notifications').subscribe(
      (data: any) => {
        this.updateMessage(data)
      }
    )
  }

  public updateFeedback (data: any): void {

  }
  
  public updateMessage (data: any): void {
    console.log ("Server notification: ", data)
    alert(data)
  }

  public sendMessage (): void {
    const message = "Nouveau du message du client"
    this.websocketService.emit('client_notifications', message)
  }



  
}
