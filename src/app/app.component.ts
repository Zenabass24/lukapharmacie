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
    // this.initApp ()
  }

}
