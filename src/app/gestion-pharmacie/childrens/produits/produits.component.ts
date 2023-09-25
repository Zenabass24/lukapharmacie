import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogNewLivraisonComponent } from 'src/app/components/dialog-new-livraison/dialog-new-livraison.component';
import { IProduit } from 'src/app/interfaces';
import { ProduitService } from 'src/app/services/produit.service';
import { DialogRegisterPharmacieComponent } from 'src/app/vues/pharmacies/components/dialog-register-pharmacie/dialog-register-pharmacie.component';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProduitsComponent implements OnInit {

  // TODO: Creer un service de reception des produits depuis le serveur
  public dataSource: IProduit[] = [];
  columnsToDisplay2 = ['nom', 'quantite', 'prixUnitaire', 'ordonance'];
  columnsToDisplay = ['nomProduit', 'quantiteStock', 'prixUnitaire', 'ordonance'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Products | null | undefined;

  constructor (
    public dialog: MatDialog,
    public produitService: ProduitService,
  ) {}

  ngOnInit(): void {
    this.produitService.getProducts().subscribe((data: IProduit[]) => {
      this.dataSource = data;
      console.log ("Data ", this.dataSource)
    });
  }

  public modalRegisterPharmacy () {
    const dialogRef = this.dialog.open(
      DialogNewLivraisonComponent,
      {width: '600px'}
    )

    dialogRef.afterClosed().subscribe(
      (result: any) => {
        console.log ('Dialogue result...', result)
      }
    )
  }

}


interface Products {
  _id: string;
  name: string;
  constituants: string[];
  description: string;
  quantite: number;
  prixUnitaire: number;
  ordonance: boolean
}

// const ELEMENT_DATA: IProduit[] = [
//   {
//     _id: '1',
//     name: 'Aspirine',
//     constituants: ['c1', 'c2', 'c3'],
//     quantite: 56,
//     prixUnitaire: 3550,
//     ordonance: false,
//     description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat quae sunt animi vitae facere dicta, quasi nemo suscipit, ea, in rem sint placeat nostrum nisi ipsum blanditiis. Similique, illo!`,
//   },
//   {
//     _id: '2',
//     name: 'Amoxicilline',
//     constituants: ['c1', 'c2', 'c3'],
//     quantite: 78,
//     prixUnitaire: 2345,
//     ordonance: false,
//     description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat quae sunt animi vitae facere dicta, quasi nemo suscipit, ea, in rem sint placeat nostrum nisi ipsum blanditiis. Similique, illo!`,
//   },
//   {
//     _id: '3',
//     name: 'Atorvastaline',
//     constituants: ['c1', 'c2', 'c3', 'c4'],
//     quantite: 205,
//     prixUnitaire: 1095,
//     ordonance: false,
//     description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat quae sunt animi vitae facere dicta, quasi nemo suscipit, ea, in rem sint placeat nostrum nisi ipsum blanditiis. Similique, illo!`,
//   },
//   {
//     _id: '3',
//     name: 'Ciprofloxacine',
//     constituants: ['c1', 'c2', 'c3', 'c4', 'c5'],
//     quantite: 5,
//     prixUnitaire: 3004,
//     ordonance: true,
//     description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat quae sunt animi vitae facere dicta, quasi nemo suscipit, ea, in rem sint placeat nostrum nisi ipsum blanditiis. Similique, illo!`,
//   },
//   {
//     _id: '4',
//     name: 'Codeine',
//     constituants: ['c1', 'c2', 'c3'],
//     quantite: 125,
//     prixUnitaire: 1050,
//     ordonance: false,
//     description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat quae sunt animi vitae facere dicta, quasi nemo suscipit, ea, in rem sint placeat nostrum nisi ipsum blanditiis. Similique, illo!`,
//   },
//   {
//     _id: '5',
//     name: 'Diazépam',
//     constituants: ['c1', 'c2', 'c3'],
//     quantite: 138,
//     ordonance: false,
//     prixUnitaire: 5400,
//     description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat quae sunt animi vitae facere dicta, quasi nemo suscipit, ea, in rem sint placeat nostrum nisi ipsum blanditiis. Similique, illo!`,
//   },
//   {
//     _id: '6',
//     name: 'Diphenhydramine',
//     constituants: ['c1', 'c2', 'c3', 'c5', 'c6', 'c7'],
//     quantite: 68,
//     prixUnitaire: 2100,
//     ordonance: true,
//     description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat quae sunt animi vitae facere dicta, quasi nemo suscipit, ea, in rem sint placeat nostrum nisi ipsum blanditiis. Similique, illo!`,
//   },
//   {
//     _id: '7',
//     name: 'Fluoxétine',
//     constituants: ['c1', 'c2', 'c3', 'c5', 'c6', 'c7', 'c8'],
//     quantite: 68,
//     prixUnitaire: 3350,
//     ordonance: false,
//     description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio quaerat quae sunt animi vitae facere dicta, quasi nemo suscipit, ea, in rem sint placeat nostrum nisi ipsum blanditiis. Similique, illo!`,
//   },
// ];
