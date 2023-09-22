import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vues/home/home.component';
import { authenticationGuard } from './authentication/guard/authentication.guard';
import { ProduitsComponent } from './vues/produits/produits.component';
import { PharmaciesComponent } from './vues/pharmacies/pharmacies.component';
import { CommandesComponent } from './vues/commandes/commandes.component';
import { PaiementsComponent } from './vues/paiements/paiements.component';
import { PlaintesComponent } from './vues/plaintes/plaintes.component';
import { LivreursComponent } from './vues/livreurs/livreurs.component';
import { ClientsComponent } from './vues/clients/clients.component';
import { PharmaciesModule } from './vues/pharmacies/pharmacies.module';
import { PageNotFoundComponent } from './vues/page-not-found/page-not-found.component';
import { PharmaciesRoutingModule } from './vues/pharmacies/pharmacies-routing.module';
import { GestionPharmacieModule } from './gestion-pharmacie/gestion-pharmacie.module';
import { AdminGuard } from './guards/admin.guard';
import { AuthenticationModule } from './authentication/authentication.module';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  { path: 'auth', loadChildren: () => AuthenticationModule},
  {
    path: 'home', component: HomeComponent, canActivate: [AdminGuard],
  },
  {
    path: 'produits', component: ProduitsComponent, canActivate: [AdminGuard],
  },
  { path: 'pharmacies', loadChildren: () => PharmaciesModule, /*canActivate: [AuthGuard] */},
  { path: 'gestion', loadChildren: () => GestionPharmacieModule, /*canActivate: [AuthGuard] */},
  { path: 'clients', component: ClientsComponent},
  { path: 'livreurs', component: LivreursComponent},
  { path: 'plaintes', component: PlaintesComponent},
  { path: 'paiements', component: PaiementsComponent},
  { path: 'commandes', component: CommandesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
