import { MatDialog } from '@angular/material/dialog';
import { ModeloService } from './../modelo.service';
import { Component, OnInit } from '@angular/core';
import { ModeloModel } from 'src/app/models/modelo.model';
import { ModeloCrudComponent } from '../modelo-crud/modelo-crud.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modelo-lista',
  templateUrl: './modelo-lista.component.html',
  styleUrls: ['./modelo-lista.component.css']
})
export class ModeloListaComponent implements OnInit {

  listaModelo: ModeloModel[] = [];
  displayedColumns = ['idModelo', 'descricaoModelo', 'statusModelo', 'id_secao', 'actions']

  constructor(private modeloService: ModeloService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.modeloService.listaModelo().subscribe(lista => {
      this.listaModelo = lista
    });
  }

  addModelo() {
    const dialogRef = this.dialog.open(ModeloCrudComponent, {
      width: '400px',
      // data: marcaModel === null ?  {
      //   descricaoMarca: null,
      //   fotoMarca: null} : marcaModel
    });
  }

  sair() {
     this.router.navigate(['/']);
  }

}
