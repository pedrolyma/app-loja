import { environment } from 'src/environments/environment';
import { catchError, first, map, tap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LocalizacaoModel } from 'src/app/models/localizacao.model';

@Injectable({ providedIn: "root"})

export class LocalizacaoService {

  localizacaoUrl = `${environment.apiUrl}/localizacoes`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(localizacaoModel: LocalizacaoModel): Observable<LocalizacaoModel> {
    return this.httpClient.post<LocalizacaoModel>(this.localizacaoUrl, localizacaoModel, this.httpOptions)
    .pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e)));
  }

  listaLocalizacao(): Observable<LocalizacaoModel[]> {
    // let params = new HttpParams();
    // params.set('page', filtro.pagina.toString());
    // params.set('size', filtro.itensPorPagina.toString());
    // if (filtro.descricao) {
    //   params = params.set('descricao', filtro.descricao);
    // }
    return this.httpClient.get<LocalizacaoModel[]>(this.localizacaoUrl, this.httpOptions)
    .pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e)));
  }

  listLocaliza(): Observable<LocalizacaoModel[]> {
    return this.httpClient.get<LocalizacaoModel[]>(this.localizacaoUrl)
    .pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e)));
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro", true);
    return EMPTY;
  }

}
