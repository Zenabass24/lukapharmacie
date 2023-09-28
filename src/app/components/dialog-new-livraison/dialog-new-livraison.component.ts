import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
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
  public fournisseurChoosen!: string


  // PRODUITS
  public productControl = new FormControl('');
  public listProducts: IProduit[] = [];
  public filteredProducts!: Observable<IProduit[]>;
  // Pour les champs liés au Produit
  public registerNewProduct: boolean = false;

  public productsToRegister: any[] = []

  // PRIX UNITAIRE
  public prixUnitaire: any

  // STOCK MINIMUM
  public stockMinimum: any


  // DATE EXPIRATION
  public dateExpiration: any

  // QUANTITE
  public quantiteStock: any

  constructor (
    public dialog: MatDialog,
    private fournisseurService: FournisseurService,
    private produitService: ProduitService,
  ) {}

  async ngOnInit() {
    await this.getRemoteFournisseurs ()
    await this.getRemoteProducts ()
    this.filterProducts ()
    this.filterFournisseur ()
  }


  private filterFournisseur () {
    this.filteredFournisseurs = this.fournisseurControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterFournisseur(value || '')),
    );
  }
  private _filterFournisseur(value: string): IFournisseur[] {
    if (!value) return []
    const filterValue = value.toLowerCase();
    const result = this.listFournisseurs.filter(fournisseur => fournisseur.nom.toLowerCase().includes(filterValue))
    // console.log ("Fournisseur Filter...", result)
    result.length <=0 && filterValue ? this.registerNewFournisseur=true : this.registerNewFournisseur = false
    return result;
  }


  private filterProducts () {
    this.filteredProducts = this.productControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterProduct(value || '')),
    );
  }
  private _filterProduct(value: string): IProduit[] {
    if (!value) return []
    const filterValue = value.toLowerCase();
    const result = this.listProducts.filter(product => product.nomProduit.toLowerCase().includes(filterValue))
    // console.log ("Product Filter...", result)
    return result
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
    this.produitService.getFullProducts().subscribe({
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

  // TODO: Recuperer l'id du fournisseur cree pour poursuivre la l'enregistrement de la livraison
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



  // Pour ajouter un nouveau produit de la livraison
  public pushProduct () {
    // Controller si les champs lies a la livraison sont saisies
    if (!this.productControl.value || !this.quantiteStock ) return alert('Veuillez renseigner tous informations sur le produit livré')

    const newP = this.listProducts.filter(product => product.nomProduit.toLowerCase().includes(this.productControl.value ? this.productControl.value.toLowerCase(): ''))
    if (newP.length === 1) { 
      // Verifier si l'id n'est pas deja contenu dans la liste
      if (this.productsToRegister.filter(item => item.id.includes(newP[0]._id? newP[0]._id: '')).length > 0) 
       {this.productControl.setValue('');return alert('Ce produit a deja ete saisie...')}
      //  Controller les autres champs

      this.productsToRegister.push (
        {_id: newP[0]._id ? newP[0]._id: '', 
        name: newP[0].nomProduit ? newP[0].nomProduit: '', 
        quantite: this.quantiteStock, 
        prixUnitaire: this.prixUnitaire,
        stockMinimum: this.stockMinimum
      })
      console.log (this.productsToRegister)
      // Vider les champs...
      this.productControl.setValue('')
      this.quantiteStock = ''
      this.dateExpiration = ''
      this.prixUnitaire = ''
      this.stockMinimum = ''
    } else {
      console.log ("Le produit saisie n'est pas enregistred...")
      alert("Le produit saisie n'est pas reconnu...")
      // TODO:
    }
  }

  // Pour soumission du formulaire
  public registerLivraison (form: NgForm) {
    console.log (form.value)
    
    const newF = this.listFournisseurs.filter(founisseur => founisseur.nom.toLowerCase().includes(this.fournisseurChoosen.toLowerCase()))
    if (newF.length < 1) {
      console.log ("Le fournisseur saisie n'est pas enregistred...")
      return alert("Le fournisseur saisie n'est pas reconnu...")
    }
    const idFournisseur = newF[0]._id
    console.log (idFournisseur)
    const newP = this.listProducts.filter(product => product.nomProduit.toLowerCase().includes(this.productControl.value ? this.productControl.value.toLowerCase(): ''))

    if (newP.length < 1) {
      console.log ("Le produit saisie n'est pas enregistred...")
      return alert("Le produit saisie n'est pas reconnu...")
    }
    

    if ( this.productsToRegister.length === 0) {
      this.productsToRegister.push (
        {_id: newP[0]._id ? newP[0]._id: '', 
        name: newP[0].nomProduit ? newP[0].nomProduit: '', 
        quantite: this.quantiteStock, 
        prixUnitaire: this.prixUnitaire,
        stockMinimum: this.stockMinimum
      })
    }


    console.log (newF)
    this.showSpinner=true

    this.produitService.registerProduct({idFournisseur, produits: this.productsToRegister}).subscribe({
      next: (data: any) => {
        this.showSpinner=false
        console.log("RESULT Register Livraison...", data);
        alert(data.message)
      },
      error: (error: any) => {
        this.showSpinner=false
        console.log ("ERROR: ", error)
      }
    })
    // setTimeout(
    //   () => {
    //     this.showSpinner=false
    //   }, 3000
    // )
  }


}
