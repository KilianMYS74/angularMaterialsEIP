import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableMaterialComponent } from './table-material/table-material.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { chipsMaterialComponent } from './chips-material/chips-material.component';
import { paginatorMaterialComponent } from './paginator-material/paginator-material.component';

@NgModule({
  declarations: [
    AppComponent,
    TableMaterialComponent,
    chipsMaterialComponent,
    paginatorMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatPaginatorModule,
    MatChipsModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
