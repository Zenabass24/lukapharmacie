import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-details-materiel',
  templateUrl: './dialog-details-materiel.component.html',
  styleUrls: ['./dialog-details-materiel.component.scss']
})
export class DialogDetailsMaterielComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDetailsMaterielComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { materiel: any }
  ) { }

  onChoiceSelected(choice: string): void {
    this.dialogRef.close(choice);
  }
}
