import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'left';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private snackBar: MatSnackBar,
  ) { }

  public openSnackBar (text: string) {
    this.snackBar.open(text || ''), 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    }
    setTimeout(()=> {this.snackBar.dismiss()}, 5000)
  }
}
