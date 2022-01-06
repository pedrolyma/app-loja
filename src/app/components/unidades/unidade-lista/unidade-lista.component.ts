import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UnidadeModel } from 'src/app/models/unidade.model';
import { UnidadeCrudComponent } from '../unidade-crud/unidade-crud.component';
import { UnidadeService } from '../unidade.service';

@Component({
  selector: 'app-unidade-lista',
  templateUrl: './unidade-lista.component.html',
  styleUrls: ['./unidade-lista.component.css']
})
export class UnidadeListaComponent implements OnInit {

  listaUnidade: Array<UnidadeModel> = [];
  displayedColumns: string[] = ['Idunidade', 'Descricaounidade', 'Statusunidade', 'actions'];

  constructor(private unidadeService: UnidadeService,
              private dialog: MatDialog ,
              private router: Router) { }

  ngOnInit(): void {
    this.unidadeService.listaUnidade().subscribe(lista => {
      this.listaUnidade = lista;
    });
  }

  addUnidade() {
    const dialogRef = this.dialog.open(UnidadeCrudComponent, {
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
