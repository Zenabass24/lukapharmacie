import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeComponent } from './vues/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProduitsComponent } from './vues/produits/produits.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
