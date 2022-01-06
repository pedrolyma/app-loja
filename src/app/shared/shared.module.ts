import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
import {MatTableDataSource} from '@angular/material/table';
import { VmessageComponent } from './vmessage/vmessage.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

@NgModule({
  imports: [
    // MatIconModule,
    // MatMenuModule,
    // MatButtonModule,
    // MatTableModule,
    // MatToolbarModule,
    // MatPaginatorModule,
    // MatSnackBarModule,
    // MatSidenavModule,
    // MatListModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatDialogModule,
    // MatFormFieldModule,
    // MatCardModule,
    // MatSortModule,
    // MatTableDataSource,
  ],
  exports: [ErrorDialogComponent
 //   VmessageComponent
  ],
  declarations: [ErrorDialogComponent ],
})
export class SharedModule { }
