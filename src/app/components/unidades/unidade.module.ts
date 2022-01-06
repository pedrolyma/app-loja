import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
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
import { UnidadeListaComponent } from './unidade-lista/unidade-lista.component';
import { UnidadeCrudComponent } from './unidade-crud/unidade-crud.component';
import { UnidadeRoutingModule } from './unidade-routing.module';

@NgModule({
  declarations: [
    UnidadeListaComponent,
    UnidadeCrudComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UnidadeRoutingModule,
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
   ],
  exports: [ ],
  providers: [],
  bootstrap: []
})
export class UnidadeModule { }
