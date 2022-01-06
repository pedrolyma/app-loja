import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MarcaModel } from 'src/app/models/marca.model';
import { MarcaFiltro, MarcaService } from '../marca.service';
import { MarcaCrudComponent } from '../marca-crud/marca-crud.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marca-lista',
  templateUrl: './marca-lista.component.html',
  styleUrls: ['./marca-lista.component.css']
})
export class MarcaListaComponent implements OnInit {

  totalRegistro = 0;
  filtro = new MarcaFiltro();
  arrayMarca: MarcaModel[] = [];
  displayedColumns = ['idmarca', 'descricaomarca', 'statusmarca', 'fotomarca', 'actions'];
  listaMarca!:MatTableDataSource<MarcaModel>;

  constructor(private marcaService: MarcaService,
              public dialog: MatDialog,
              private router: Router) {}

  ngOnInit(pagina =0): void {
    this.filtro.pagina = pagina;
    this.marcaService.listarMarcas(this.filtro).subscribe((lista) => {
      this.arrayMarca = lista;
//      this.listaMarca = new MatTableDataSource(lista.data);
    });
  }

  addMarca() {
    const dialogRef = this.dialog.open(MarcaCrudComponent, {
      width: '400px',
      // data: marcaModel === null ?  {
      //   descricaoMarca: null,
      //   fotoMarca: null} : marcaModel
    });

      dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
//        this.listaMarca.push(result);
      }
    });
  }

  sair() {
     this.router.navigate(['/']);
  }

  // @ViewChild(MatTable) table: MatTable<MarcaModel>;

  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * MarcaModel.length);
  //   this.dataSource.push(MarcaModel[randomElementIndex]);
  //   this.table.renderRows();
  // }

  // removeData() {
  //   this.dataSource.pop();
  //   this.table.renderRows();
  // }
}
