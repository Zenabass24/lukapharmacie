import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { result } from 'lodash';
import { map, Observable, startWith } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { IRole, IService, IUser } from 'src/app/interfaces';
import { CommonService } from 'src/app/services/common.service';




/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-dialog-register-user',
  templateUrl: './dialog-register-user.component.html',
  styleUrls: ['./dialog-register-user.component.scss']
})
export class DialogRegisterUserComponent {

  @Output() dialogClosed = new EventEmitter<string>();

  public services: IService[] = []
  public service_choose = undefined
  public roles: IRole[] = []

  public selectedValue!:any


  public formGroup: any;

  public nom!: string;

  myControl = new FormControl();
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  // options: IService[]
  filteredOptions!: Observable<string[]>;

  public constructor ( private authService: AuthService,
    public dialogRef: MatDialogRef<DialogRegisterUserComponent>,
    public commonService: CommonService
    ) {
      // this.filteredOptions = this.myControl.valueChanges.pipe(
      //   startWith(''),
      //   map(value => this._filter(value))
      // );
      this.commonService.getAllServices().subscribe({
        next: result => {
          this.services = result
          // for (let index = 0; index < result.length; index++) {
          //   // this.options.push() = result[index];
          //   console.log("RESULTS...", result[index])

          // }
          this.options = result
          console.log("MATERIELS: ", result)
        },
        error: error => {
          console.log('ERROR: ', error)
        }
      })
      this.commonService.getAllRoles().subscribe({
        next: result => {
          this.roles = result
          console.log("ROLES: ", result)
        },
        error: error => {
          console.log('ERROR: ', error)
        }
      })

      // this.filteredOptions = this.myControl.valueChanges.pipe(
      //   startWith(''),
      //   map(value => this._filter(value))
      // );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onOptionSelected(event: any) {
    console.log('Option selected:', event.option.value);
    // Faire quelque chose avec la valeur sélectionnée
  }


  displayFn(service: IService): string {
    return  service.nomService ? service.nomService : '';
  }




  public dataUser: IUser = {
    name: '',
    firstname: '',
    birthdate: '',
    fonction: '',
    telephone: '',
    email: '',
    username: '',
    password: '',
    role: 0,
    service: 0
  };

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  public showSpinner= false; // TODO Ce spinner s'affiche a la soumission du formulaire

  public cancelCreation () {
    console.log('Canceling...');
  }

  public registerUser() {
    // alert()
    console.log('Registering', this.dataUser)
    this.dataUser.birthdate = this.formatDate(this.dataUser.birthdate)
    console.log(this.dataUser)

    this.authService.createUser( this.dataUser ).subscribe({
      next: result => {
        console.log( 'RESULTS ', result)
        this.dialogClosed.emit("result");
        this.dialogRef.close();
      },
      error: error => {
        console.log(error)
      },
    })
  }

  public formatDate(inputDate: string): string {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onClose(): void {
    this.dialogRef.close();
  }






}
