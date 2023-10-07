import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { INotification } from 'src/app/interfaces';



@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  public showSpinner= false;

  @Input() public notifications!: INotification[] | undefined

  constructor (
    private router: Router
  ) {  }


  public manageNotif (notifID: string) {
    console.log ("Manage notif ", notifID, " in working...")
    // this.router.navigate([`/commandes/details`, notifID])
    this.router.navigate([`/gestion/commandes/details`, notifID])

  }

}
