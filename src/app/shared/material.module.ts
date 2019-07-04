import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatTreeModule,
  MatDialogModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatRadioModule,
  MatMenuModule,
  MatStepperModule
} from '@angular/material';

const materialModules = [
  LayoutModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatTreeModule,
  MatDialogModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatExpansionModule,
  MatRadioModule,
  MatMenuModule,
  MatStepperModule
];

@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialModule { }
