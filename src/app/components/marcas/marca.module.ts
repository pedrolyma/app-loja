import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MarcaRoutingModule } from './marca.routing.module';
import { MarcaListaComponent } from './marca-lista/marca-lista.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MarcaCrudComponent } from './marca-crud/marca-crud.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableDataSource} from '@angular/material/table';

@NgModule({
  declarations: [
    MarcaListaComponent,
    MarcaCrudComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarcaRoutingModule,
    SharedModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
 //   MatTableDataSource,

   ],
  exports: [ ],
  providers: [],
  bootstrap: []
})
export class MarcaModule { }
