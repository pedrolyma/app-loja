import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { LocalizacaoService } from './../localizacao.service';
import { Component, OnInit } from '@angular/core';
import { LocalizacaoModel } from 'src/app/models/localizacao.model';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { LocalizacaoCrudComponent } from '../localizacao-crud/localizacao-crud.component';

@Component({
  selector: 'app-localizacao-lista',
  templateUrl: './localizacao-lista.component.html',
  styleUrls: ['./localizacao-lista.component.css']
})
export class LocalizacaoListaComponent implements OnInit {

  localizacoes$: Observable<LocalizacaoModel[]>;
  displayedColumns = ['Idlocalizacao', 'Descricaolocalizacao', 'actions'];

  constructor(private localizacaoService: LocalizacaoService,
              private dialog: MatDialog,
              private router: Router)
  {
    this.localizacoes$ = this.localizacaoService.listLocaliza()
    .pipe(catchError(error => {
        this.onError('Erro ao carregar localizacoes.');
        return of([])
      })
   );
  }

  ngOnInit(): void {
  }

  addLocalizacao() {
    const dialogRef = this.dialog.open(LocalizacaoCrudComponent, {
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

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  sair() {
    this.router.navigate(['/']);
 }

}
