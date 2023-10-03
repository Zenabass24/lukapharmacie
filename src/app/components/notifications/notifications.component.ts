import { Component, Input } from '@angular/core';
import { INotification } from 'src/app/interfaces';



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  public showSpinner= false;

  @Input() public notifications!: INotification[] | undefined

  constructor () {  }


  public manageNotif (notifID: string) {
    console.log ("Manage notif ", notifID, " in working...")
  }

}
