import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeComponent } from './vues/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProduitsComponent } from './vues/produits/produits.component';
import { PharmaciesComponent } from './vues/pharmacies/pharmacies.component';
import { ClientsComponent } from './vues/clients/clients.component';
import { LivreursComponent } from './vues/livreurs/livreurs.component';
import { PlaintesComponent } from './vues/plaintes/plaintes.component';
import { PaiementsComponent } from './vues/paiements/paiements.component';
import { CommandesComponent } from './vues/commandes/commandes.component';
import { SharedModule } from './modules/shared/shared.module';
import { CommonService } from './services/common.service';
import { PharmaciesModule } from './vues/pharmacies/pharmacies.module';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { PageNotFoundComponent } from './vues/page-not-found/page-not-found.component';
import { GestionPharmacieModule } from './gestion-pharmacie/gestion-pharmacie.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitsComponent,
    ClientsComponent,
    LivreursComponent,
    PlaintesComponent,
    PaiementsComponent,
    CommandesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    SharedModule,
    AuthenticationModule,
    PharmaciesModule,
    GestionPharmacieModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
