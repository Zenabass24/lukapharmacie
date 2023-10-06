import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';
import { NotificationsService } from '../services/notifications.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-gestion-pharmacie',
  templateUrl: './gestion-pharmacie.component.html',
  styleUrls: ['./gestion-pharmacie.component.scss']
})
export class GestionPharmacieComponent implements OnInit {
  constructor(
    private router: Router,
    private websocketService: WebsocketService,
    private notificationsService: NotificationsService,
    private snackBarController: SnackBarService,    
    ) { }

  ngOnInit () {
    this.initApp ()
  }

  isActive(link: string): boolean {
    return this.router.isActive(link, false);
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
