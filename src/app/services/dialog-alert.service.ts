import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAlertNotificationComponent } from '../components/dialog-alert-notification/dialog-alert-notification.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogAlertService {

  private userChoiceSubject: Subject<boolean> = new Subject<boolean>();
  public userChoice$ = this.userChoiceSubject.asObservable()

  constructor(
    public dialog: MatDialog,
  ) { }


  public presentDialog () {
    const dialogRef = this.dialog.open(
      DialogAlertNotificationComponent,
      {width: '600px', disableClose:true}
    )

    dialogRef.afterClosed().subscribe(
      (result: any) => {
        this.userChoiceSubject.next ( result )
      }
    )
  }

}
