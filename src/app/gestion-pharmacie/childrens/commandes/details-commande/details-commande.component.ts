import { Component } from '@angular/core';

@Component({
  selector: 'app-details-commande',
  templateUrl: './details-commande.component.html',
  styleUrls: ['./details-commande.component.scss']
})
export class DetailsCommandeComponent {

  public showSpinner= true;
  public deliver_found = true;

  constructor () { 
    setTimeout(() => {this.showSpinner = false}, 1000)
  }

}
