import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionPharmacieComponent } from './gestion-pharmacie.component';
import { ProduitsComponent } from './childrens/produits/produits.component';
import { CommandesComponent } from './childrens/commandes/commandes.component';
import { CommandesModule } from './childrens/commandes/commandes.module';



const routes: Routes = [
  {path: '', redirectTo: 'produits', pathMatch: 'full'},
  {
      path: '', component: GestionPharmacieComponent,
      children: [
          {path: 'produits', component: ProduitsComponent},
          {path: 'commandes', loadChildren: () => CommandesModule},
          // {path: 'roles', component: RolesComponent}
      ]
  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionPharmacieRoutingModule { }
