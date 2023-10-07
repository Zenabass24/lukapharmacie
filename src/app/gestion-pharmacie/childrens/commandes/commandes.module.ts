import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import CommandesRoutingModule from './commandes-routing.module';
import { CommandesComponent } from './commandes.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DetailsCommandeComponent } from './details-commande/details-commande.component';



@NgModule({
  declarations: [
    CommandesComponent,
    DetailsCommandeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommandesRoutingModule,
  ]
})
export class CommandesModule { }
