import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationRoutingMogule } from './athentication-routing.module';
import { FormsModule } from '@angular/forms';
import { PharmaciesModule } from '../vues/pharmacies/pharmacies.module';
import { SharedModule } from '../modules/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticationRoutingMogule,
    PharmaciesModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthenticationModule { }
