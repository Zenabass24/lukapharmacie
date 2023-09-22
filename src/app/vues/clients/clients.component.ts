import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRegisterPharmacieComponent } from '../pharmacies/components/dialog-register-pharmacie/dialog-register-pharmacie.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogRegisterPharmacieComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
