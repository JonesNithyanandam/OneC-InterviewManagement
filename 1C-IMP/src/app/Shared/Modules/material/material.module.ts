import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { MaterialCalendarModule } from 'material-calendar';

/*
, MatSlideToggleModule,
MatTabsModule, MatSortModule, MatProgressBarModule, MatProgressSpinnerModule*/


const materialModule = [
  MatCheckboxModule,
  MatRadioModule,
  MatPaginatorModule,
  MatSnackBarModule,
  MatDialogModule,
  MatTableModule,
  MatInputModule,
  MatSliderModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatMenuModule,
  MatTooltipModule,
  MatTreeModule,
  OverlayModule,
  MatFormFieldModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: [
    materialModule
  ],
  exports: [materialModule]
})
export class MaterialModule { }
