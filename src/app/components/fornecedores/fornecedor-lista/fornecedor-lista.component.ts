import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FornecedorModel } from 'src/app/models/fornecedor.model';
import { FornecedorService } from '../fornecedor.service';
import { FornecedorCrudComponent } from '../fornecedor-crud/fornecedor-crud.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fornecedor-lista',
  templateUrl: './fornecedor-lista.component.html',
  styleUrls: ['./fornecedor-lista.component.css']
})
export class FornecedorListaComponent implements OnInit {

  displayedColumns = ['idFornecedor', 'razaoSocial', 'nomeFantasia', 'actions'];
  listaFornecedor: FornecedorModel[] = [];

  constructor(private fornecedorService: FornecedorService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.fornecedorService.listaFornecedor().subscribe(lista => {
      this.listaFornecedor = lista;
    });
  }

  addFornecedor() {
    const dialogRef = this.dialog.open(FornecedorCrudComponent, {
      width: '900px',
    });

      dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.listaFornecedor.push(result);
      }
    });
  }

  sair() {
     this.router.navigate(['/']);
  }

}
