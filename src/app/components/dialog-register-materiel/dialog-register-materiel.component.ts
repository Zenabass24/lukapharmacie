import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CommonService } from 'src/app/services/common.service';
import { MyErrorStateMatcher } from '../dialog-register-user/dialog-register-user.component';

interface IMateriel {
  idMat?: number,
  natureMat: string,
  libelleMat: string,
  etatMat: boolean,
  type: any,
  modele: any | null,
  marque: string | null,
  rayon: string | null
}

@Component({
  selector: 'app-dialog-register-materiel',
  templateUrl: './dialog-register-materiel.component.html',
  styleUrls: ['./dialog-register-materiel.component.scss']
})
export class DialogRegisterMaterielComponent {

  public marques!: any;
  public modeles!: any;
  public types!: any;

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

  public constructor ( private authService: AuthService,
    public commonService: CommonService ) {
    this.commonService.getAllMarques().subscribe({
      next: result => {
        this.marques = result
      },
      error: error => {
        console.log('ERROR: ', error)
      }
    })

    this.commonService.getAllModeles().subscribe({
      next: result => {
        this.modeles = result
      },
      error: error => {
        console.log('ERROR: ', error)
      }
    })

    this.commonService.getAllTypes().subscribe({
      next: result => {
        this.types = result
      },
      error: error => {
        console.log('ERROR: ', error)
      }
    })
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  public showSpinner= false; // TODO Ce spinner s'affiche a la soumission du formulaire

  public registerMateriel() {

    console.log("DATA MATERIEL", this.dataMateriel)
    // alert()
    console.log('Registering', this.dataMateriel)
    // this.dataUser.birthdate = this.formatDate(this.dataUser.birthdate)
    console.log(this.dataMateriel)

    this.commonService.registerMateriel( this.dataMateriel ).subscribe({
      next: (result) => {
        console.log( 'Resultat de l\'enregistrement...', result )
      },
      error: (err) => {
        console.log( 'Resultat de l\'enregistrement...', err )
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
