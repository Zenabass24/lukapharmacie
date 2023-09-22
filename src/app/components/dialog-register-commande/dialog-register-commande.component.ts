import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/service/auth.service';
import { ICommande, IMateriel } from 'src/app/interfaces';
import { CommonService } from 'src/app/services/common.service';
import { CommandeService } from 'src/app/vues/commande/service/commande.service';
import { MyErrorStateMatcher } from '../dialog-register-user/dialog-register-user.component';

@Component({
  selector: 'app-dialog-register-commande',
  templateUrl: './dialog-register-commande.component.html',
  styleUrls: ['./dialog-register-commande.component.scss']
})
export class DialogRegisterCommandeComponent {

  @Output() dialogClosed = new EventEmitter<string>();

  owner:any

  public formGroup: any;

  public nom!: string;

  public dataCommande: ICommande = {
    dateCom: '',
    quantiteCom: 1
  };

  public materiels!: IMateriel[];
  public fournisseurs!: any[];

  public constructor ( private authService: AuthService,
    public dialogRef: MatDialogRef<DialogRegisterCommandeComponent>,
    public commonService: CommonService,
    public commandeService: CommandeService
    ) {

      this.commonService.getAllMateriel().subscribe({
        next: result => {
          this.materiels = result
        },
        error: error => {
          console.log('ERROR: ', error)
        }
      })

      this.commandeService.getAllFournisseurs().subscribe({
        next: result => {
          this.fournisseurs = result
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

  public registerCommande() {


    // console.log('OWNER: ', this.owner.service)
    console.log('Registering', this.dataCommande)
    // this.dataCommande.fournisseur = this.owner.service
    console.log("COMMANDE ", this.dataCommande)

    this.commandeService.registerCommande( this.dataCommande ).subscribe({
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
