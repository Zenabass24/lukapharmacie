import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import CommandesRoutingModule from './commandes-routing.module';
import { CommandesComponent } from './commandes.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';



@NgModule({
  declarations: [
    CommandesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CommandesRoutingModule,
  ]
})
export class CommandesModule { }
