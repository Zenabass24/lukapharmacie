import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionPharmacieComponent } from './gestion-pharmacie.component';
import { GestionPharmacieRoutingModule } from './gestion-pharmacie-routing.module';
import { ProduitsComponent } from './childrens/produits/produits.component';
import { SharedModule } from '../modules/shared/shared.module';
import { CommandesComponent } from './childrens/commandes/commandes.component';
import { MissionsComponent } from './childrens/missions/missions.component';



@NgModule({
  declarations: [
    GestionPharmacieComponent,
    ProduitsComponent,
    // CommandesComponent,
    MissionsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GestionPharmacieRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GestionPharmacieModule { }
