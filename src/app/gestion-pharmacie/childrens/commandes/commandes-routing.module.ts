import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './commandes.component';
import { NgModule } from '@angular/core';
import { DetailsCommandeComponent } from './details-commande/details-commande.component';

const routes:Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {path: 'list', component: CommandesComponent},
    {path: ':id/details', component: DetailsCommandeComponent},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export default class CommandesRoutingModule {}


