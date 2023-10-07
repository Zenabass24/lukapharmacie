import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeComponent } from './vues/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { DialogNewLivraisonComponent } from './components/dialog-new-livraison/dialog-new-livraison.component';
import { DialogNewProductComponent } from './components/dialog-new-product/dialog-new-product.component';
import { DialogNewFournisseurComponent } from './components/dialog-new-fournisseur/dialog-new-fournisseur.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DialogAlertNotificationComponent } from './components/dialog-alert-notification/dialog-alert-notification.component';

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
    PageNotFoundComponent,
    DialogAlertNotificationComponent,
    DialogNewLivraisonComponent,
    DialogNewProductComponent,
    DialogNewFournisseurComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthenticationModule,
    PharmaciesModule,
    GestionPharmacieModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
