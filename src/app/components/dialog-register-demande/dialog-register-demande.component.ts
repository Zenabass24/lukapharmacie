import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/service/auth.service';
import { IDemande, IMateriel } from 'src/app/interfaces';
import { CommonService } from 'src/app/services/common.service';
import { MyErrorStateMatcher } from '../dialog-register-user/dialog-register-user.component';

@Component({
  selector: 'app-dialog-register-demande',
  templateUrl: './dialog-register-demande.component.html',
  styleUrls: ['./dialog-register-demande.component.scss']
})
export class DialogRegisterDemandeComponent {

  owner:any

  public formGroup: any;

  public nom!: string;

  public dataDemande: IDemande = {
    dateEtatBesoin: '',
    descriptionEtatBesoin: ''
  };

  public materiels!: IMateriel[];

  public constructor ( private authService: AuthService,
    public dialogRef: MatDialogRef<DialogRegisterDemandeComponent>,
    public commonService: CommonService
    ) {

      this.commonService.getAllMateriel().subscribe({
        next: result => {
          this.materiels = result
        },
        error: error => {
          console.log('ERROR: ', error)
        }
      })

      var token:any = window.localStorage.getItem('token')
      token = JSON.parse( token )
      this.owner = token



  }


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  public showSpinner= false; // TODO Ce spinner s'affiche a la soumission du formulaire

  public registerDemande() {


    console.log('OWNER: ', this.owner.service)
    console.log('Registering', this.dataUser)
    this.dataDemande.service = this.owner.service
    console.log("DEMANDE ", this.dataDemande)

    this.commonService.registerDemande( this.dataDemande ).subscribe({
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
