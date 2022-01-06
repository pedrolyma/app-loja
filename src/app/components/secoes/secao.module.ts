import { MatSortModule } from '@angular/material/sort';
import { SecaoCrudComponent } from './secao-crud/secao-crud.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SecaoListaComponent } from './secao-lista/secao-lista.component';
import { SecaoRoutingModule } from './secao-rounting.module';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    SecaoListaComponent,
    SecaoCrudComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SecaoRoutingModule,
    SharedModule,

    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCardModule,
    MatSortModule,
   ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class SecaoModule { }
