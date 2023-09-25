import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { DialogNewProductComponent } from '../dialog-new-product/dialog-new-product.component';
import { DialogNewFournisseurComponent } from '../dialog-new-fournisseur/dialog-new-fournisseur.component';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { IFournisseur, IProduit } from 'src/app/interfaces';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-dialog-new-livraison',
  templateUrl: './dialog-new-livraison.component.html',
  styleUrls: ['./dialog-new-livraison.component.scss']
})
export class DialogNewLivraisonComponent implements OnInit {

  public showSpinner= false; // TODO Ce spinner s'affiche a la soumission du formulaire

  // FOURNISSEURS
  public fournisseurControl = new FormControl('');
  public listFournisseurs: IFournisseur[] = [];
  public filteredFournisseurs!: Observable<IFournisseur[]>;
  // Pour les champs liés au Fournisseur
  public registerNewFournisseur: boolean = false;


  // PRODUITS
  public productControl = new FormControl('');
  public listProducts: IProduit[] = [];
  public filteredProducts!: Observable<IProduit[]>;
  // Pour les champs liés au Produit
  public registerNewProduct: boolean = false;

  constructor (
    public dialog: MatDialog,
    private fournisseurService: FournisseurService,
    private produitService: ProduitService,
  ) {}

  async ngOnInit() {
    await this.getRemoteFournisseurs ()
    await this.getRemoteProducts ()
    this.filterFournisseur ()
    this.filterProducts ()
  }


  private filterFournisseur () {
    this.filteredFournisseurs = this.fournisseurControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterFournisseur(value || '')),
    );
  }
  private _filterFournisseur(value: string): IFournisseur[] {
    const filterValue = value.toLowerCase();
    const result = this.listFournisseurs.filter(fournisseur => fournisseur.nom.toLowerCase().includes(filterValue))
    result.length <=0 ? this.registerNewFournisseur=true : this.registerNewFournisseur = false
    return result;
  }


  private filterProducts () {
    this.filteredProducts = this.productControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterProduct(value || '')),
    );
  }
  private _filterProduct(value: string): IProduit[] {
    const filterValue = value.toLowerCase();
    const result = this.listProducts.filter(product => product.nomProduit.toLowerCase().includes(filterValue))
    return result
  }


  public registerCommande () {

  }

  public cancelCreation () {
    
  }

  private async getRemoteFournisseurs () {
    this.fournisseurService.getFournisseurs().subscribe({
      next: data => {
        this.listFournisseurs = data
        console.log ("Fournisseurs ", data)
      },
      error: err => {
        this.listFournisseurs = []
        console.log ('ERROR ', err)
      }
    })
  }

  private async getRemoteProducts () {
    this.produitService.getProducts().subscribe({
      next: data => {
        this.listProducts = data
        console.log ("Produits ", data)
      },
      error: err => {
        this.listProducts = []
        console.log ('ERROR ', err)
      }
    })
  }




  public modalRegisterProduct () {
    const dialogRef = this.dialog.open(
      DialogNewProductComponent,
      {width: '600px'}
    )

    dialogRef.afterClosed().subscribe(
      (result: any) => {
        console.log ('Dialogue result...', result)
      }
    )
  }

  public modalRegisterFournisseur () {
    const dialogRef = this.dialog.open(
      DialogNewFournisseurComponent,
      {width: '600px'}
    )

    dialogRef.afterClosed().subscribe(
      (result: any) => {
        console.log ('Dialogue result...', result)
      }
    )
  }


}
