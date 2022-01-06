import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContasRoutingModule } from './contas-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ContasCrudComponent } from './contas-crud/contas-crud.component';
import { ContasListaComponent } from './contas-lista/contas-lista.component';

@NgModule({
  declarations: [ContasCrudComponent, ContasListaComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    ContasRoutingModule,
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ]
})
export class ContasModule {

}
