import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
// import { SideNavComponent } from 'src/app/components/side-nav/side-nav.component';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NotificationsComponent } from 'src/app/components/notifications/notifications.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    NotificationsComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCardModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    FormsModule,
    ToolbarComponent,
    NotificationsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
