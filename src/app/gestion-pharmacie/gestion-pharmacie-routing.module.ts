import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionPharmacieComponent } from './gestion-pharmacie.component';
import { ProduitsComponent } from './childrens/produits/produits.component';
import { CommandesComponent } from './childrens/commandes/commandes.component';
import { CommandesModule } from './childrens/commandes/commandes.module';
import { DashboardComponent } from './childrens/dashboard/dashboard.component';
import { MissionsComponent } from './childrens/missions/missions.component';



const routes: Routes = [
  {path: '', redirectTo: 'dash', pathMatch: 'full'},
  {
      path: '', component: GestionPharmacieComponent,
      children: [
          {path: 'dash', component: DashboardComponent},
          {path: 'produits', component: ProduitsComponent},
          {path: 'missions', component: MissionsComponent},
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
