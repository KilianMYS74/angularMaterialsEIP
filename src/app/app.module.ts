import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableMaterialComponent } from './table-material/table-material.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { chipsMaterialComponent } from './chips-material/chips-material.component';
import { paginatorMaterialComponent } from './paginator-material/paginator-material.component';
import { rippleMaterialComponent } from './ripple-material/ripple-material.component';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { tabsMaterialComponent } from './tabs-material/tabs-material.component';

@NgModule({
  declarations: [
    AppComponent,
    TableMaterialComponent,
    chipsMaterialComponent,
    paginatorMaterialComponent,
    rippleMaterialComponent,
    tabsMaterialComponent
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
    MatSortModule,
    MatRippleModule,
    MatCheckboxModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
