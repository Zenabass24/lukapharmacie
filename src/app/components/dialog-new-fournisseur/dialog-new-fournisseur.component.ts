import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFournisseur } from 'src/app/interfaces';
import { FournisseurService } from 'src/app/services/fournisseur.service';



@Component({
  selector: 'app-dialog-new-fournisseur',
  templateUrl: './dialog-new-fournisseur.component.html',
  styleUrls: ['./dialog-new-fournisseur.component.scss']
})
export class DialogNewFournisseurComponent {

  public showSpinner= false; // TODO Ce spinner s'affiche a la soumission du formulaire
  public fournisseur!: IFournisseur

  constructor (
    private fournisseurService: FournisseurService,
  ) {
    this.fournisseur = {
      nom: '',
      adresse: '',
      telephone: '',
      email: ''
    }
  }


  
  public registerFournisseur () {
    
    console.log (this.fournisseur)

    this.fournisseurService.registerFournisseur(this.fournisseur).subscribe({
      next: (data: any) => {
        console.log ("SUCCESS Register Fournisseur ", data)
        // Afficher une alert avec le message du serveur
        alert(data.message)
        // Transmettre l'identifiant du nouveau fournisseur a la page parente
        // Fermer la modele
      },
      error: (error: any) => {
        console.log ("ERREUR Register Fournisseur ",  error)
      }
    })

  }

  public cancelCreation () {
    
  }

}
