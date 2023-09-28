import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationsComponent } from '../components/notifications/notifications.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(
    private dialog: MatDialog,
  ) { }

  public async presentDialog () {
    const dialogRef = this.dialog.open(
      NotificationsComponent,
      {width: '700px'}
    )

    dialogRef.afterClosed().subscribe(
      (result: any) => {
        console.log ('Notification dialogue result...', result)
      }
    )
  }

  public async dismissDialog () {
    this.dialog.closeAll()
  }
}
