import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PharmaciesRoutingModule } from './pharmacies-routing.module';
import { PharmaciesComponent } from './pharmacies.component';
import { ListPharmacieComponent } from './list-pharmacie/list-pharmacie.component';
import { DialogRegisterPharmacieComponent } from './components/dialog-register-pharmacie/dialog-register-pharmacie.component';



@NgModule({
  declarations: [
    PharmaciesComponent,
    ListPharmacieComponent,
    DialogRegisterPharmacieComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PharmaciesRoutingModule,
  ],
  exports: [
    DialogRegisterPharmacieComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PharmaciesModule { }
