import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
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
import { SharedModule } from 'src/app/shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FornecedorListaComponent } from './fornecedor-lista/fornecedor-lista.component';
import { FornecedorCrudComponent } from './fornecedor-crud/fornecedor-crud.component';
import { FornecedorRoutingModule } from './fornecedor-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    FornecedorListaComponent,
    FornecedorCrudComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FornecedorRoutingModule,
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
    MatGridListModule,
   ],
  exports: [ ],
  providers: [],
  bootstrap: []
})
export class FornecedorModule { }
