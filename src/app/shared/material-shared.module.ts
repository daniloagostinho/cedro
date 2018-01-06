import { NgModule } from '@angular/core';
import {
MatInputModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule,
MatSelectModule, MatSliderModule, MatSlideToggleModule, MatExpansionModule, MatButtonModule, MatDialogModule,
MatFormFieldModule, MatTooltipModule, MatCardModule, MatButtonToggleModule, MatDatepickerModule, MatDatepicker,
MAT_DATE_LOCALE, MatTableModule, MatNativeDateModule, MatMenuModule, MatPaginatorModule, MatIconModule, MatSortModule
} from '@angular/material';
@NgModule({
imports: [
MatInputModule,
MatAutocompleteModule,
MatCheckboxModule,
MatRadioModule,
MatSelectModule,
MatSliderModule,
MatSlideToggleModule,
MatExpansionModule,
MatButtonModule,
MatDialogModule,
MatFormFieldModule,
MatTooltipModule,
MatTableModule,
MatDatepickerModule,
MatNativeDateModule,
MatMenuModule,
MatPaginatorModule,
MatCardModule,
MatIconModule,
MatButtonToggleModule,
MatSortModule,
MatButtonModule
],
exports: [
MatInputModule,
MatAutocompleteModule,
MatCheckboxModule,
MatRadioModule,
MatSelectModule,
MatSliderModule,
MatSlideToggleModule,
MatExpansionModule,
MatButtonModule,
MatDialogModule,
MatFormFieldModule,
MatTooltipModule,
MatTableModule,
MatDatepickerModule,
MatNativeDateModule,
MatMenuModule,
MatPaginatorModule,
MatCardModule,
MatIconModule,
MatButtonToggleModule,
MatSortModule,
MatButtonModule,
MatCheckboxModule
],
providers: [
{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
]
})
export class MaterialSharedModule { }
