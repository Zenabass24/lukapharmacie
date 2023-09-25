import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-new-fournisseur',
  templateUrl: './dialog-new-fournisseur.component.html',
  styleUrls: ['./dialog-new-fournisseur.component.scss']
})
export class DialogNewFournisseurComponent {

  public showSpinner= false; // TODO Ce spinner s'affiche a la soumission du formulaire

  constructor () {}


  
  public registerCommande () {

  }

  public cancelCreation () {
    
  }

}
