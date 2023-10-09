import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import CommandesRoutingModule from './commandes-routing.module';
import { CommandesComponent } from './commandes.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DetailsCommandeComponent } from './details-commande/details-commande.component';
import { QRCodeModule } from 'angularx-qrcode';



@NgModule({
  declarations: [
    CommandesComponent,
    DetailsCommandeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QRCodeModule,
    CommandesRoutingModule,
  ]
})
export class CommandesModule { }
