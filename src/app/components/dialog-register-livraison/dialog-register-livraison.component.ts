import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';
import { IMateriel } from 'src/app/interfaces';
import { MyErrorStateMatcher } from '../dialog-register-user/dialog-register-user.component';

@Component({
  selector: 'app-dialog-register-livraison',
  templateUrl: './dialog-register-livraison.component.html',
  styleUrls: ['./dialog-register-livraison.component.scss']
})
export class DialogRegisterLivraisonComponent {
  public formGroup: any;

  public nom!: string;

  public dataMateriel: IMateriel = {
    natureMat: '',
    libelleMat: '',
    etatMat: true,
    type: '',
    modele: '',
    marque: '',
    rayon: null
  };

  public constructor ( private authService: AuthService ) {
    this.formGroup = new FormControl({
      name: new FormControl("", Validators.required),
      firstname: new FormControl("", Validators.required),
      birthdate: new FormControl("", Validators.required),
      fonction: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      role: new FormControl("", Validators.required)
    })
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  public showSpinner= false; // TODO Ce spinner s'affiche a la soumission du formulaire

  public registerUser() {
    // alert()
    console.log('Registering', this.dataUser)
    // this.dataUser.birthdate = this.formatDate(this.dataUser.birthdate)
    console.log(this.dataUser)

    this.authService.createUser( this.dataUser ).subscribe({
      next: result => {
        console.log( 'RESULTS ', result)
      },
      error: error => {
        console.log(error)
      }
    })
  }

  dataUser(arg0: string, dataUser: any) {
    throw new Error('Method not implemented.');
  }

  public cancelCreation () {
    console.log('Canceling...');
  }
}
