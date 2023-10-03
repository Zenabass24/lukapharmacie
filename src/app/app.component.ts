import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { WebsocketService } from './services/websocket.service';
import { NotificationsService } from './services/notifications.service';
import { SnackBarService } from './services/snack-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor (
    private websocketService: WebsocketService,
    private notificationsService: NotificationsService,
    private snackBarController: SnackBarService,
  ) { }

  ngOnInit(): void {
    this.initApp ()

  }

  private initApp () {
    this.notificationsService.getPharmNotifications().subscribe({
      next: data => {
        console.log (data)
      },
      error: err => {
        console.log (err)
      },
      complete: () => {
        console.log ('complete')
      }
    })

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
    // alert(data)
    this.snackBarController.openSnackBar ('Commande en attente')
    console.log (data )
  }

  public sendMessage (): void {
    const message = "Nouveau du message du client"
    this.websocketService.emit('client_notifications', message)
  }

}
