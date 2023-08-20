import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './vues/home/home.component';
import { authenticationGuard } from './authentication/guard/authentication.guard';
import { ProduitsComponent } from './vues/produits/produits.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    component: HomeComponent,
    // canActivate: [authenticationGuard]
  },
  {
    path: 'produits', 
    component: ProduitsComponent,
    // canActivate: [authenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
