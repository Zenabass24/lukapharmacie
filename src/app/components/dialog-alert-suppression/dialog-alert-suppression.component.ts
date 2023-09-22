import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-alert-suppression',
  templateUrl: './dialog-alert-suppression.component.html',
  styleUrls: ['./dialog-alert-suppression.component.scss']
})
export class DialogAlertSuppressionComponent {
  
  constructor(
    public dialogRef: MatDialogRef<DialogAlertSuppressionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { choices: string[] }
  ) { }

  onChoiceSelected(choice: string): void {
    this.dialogRef.close(choice);
  }
}
