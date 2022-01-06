import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";

import { MatSnackBar } from "@angular/material/snack-bar";

import { SecaoModel } from 'src/app/models/secao.model';

export class SecaoFiltro {
  descricao: string = '';
  pagina = 0;
  itensPorPagina = 10;
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({ providedIn: "root"})

export class SecaoService {

  //secaoUrl = `${environment.apiUrl}/secao`;
  secaoUrl = 'http://localhost:8080/api/v1/secao';

  constructor(private snackBar: MatSnackBar, private httpClient: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(secaoModel: SecaoModel): Observable<SecaoModel> {
    return this.httpClient.post<SecaoModel>(this.secaoUrl, secaoModel, httpOptions)
    .pipe(map((obj) => obj));
//    catchError((e) => this.errorHandler(e)));
  }

  listarSecoes(filtro: SecaoFiltro): Observable<SecaoModel[]> {
    let params = new HttpParams();
    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());
    return this.httpClient.get<SecaoModel[]>(`${this.secaoUrl}`, { params })

    .pipe(map((obj) => obj))
    catchError((e) => this.errorHandler(e));
  }

  listSecao(nameSecao: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.httpClient.get<SecaoModel[]>(this.secaoUrl + '/' + nameSecao, { params } );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro", true);
    return EMPTY;
  }

  getAll(filtro: SecaoFiltro): Observable<SecaoModel[]> {
    let params = new HttpParams(); // HttpParams();
    const headers = new HttpHeaders({'Content-Type': 'application/json'}); // .append('Authorization', 'basic aqui ');
    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());
    return this.httpClient.get<SecaoModel[]>(`${this.secaoUrl}`);
 }

 getById(id: number): Observable<SecaoModel> {
    return this.httpClient.get<SecaoModel>(`${this.secaoUrl}/${id}`)
    .pipe(map((objSecao) => objSecao));
 //   catchError((e) => this.errorHandler(e)));
 }

 post(secaoModel: SecaoModel): Observable<SecaoModel> {
   return this.httpClient.post<SecaoModel>(`${this.secaoUrl}`, secaoModel, httpOptions)
   .pipe(map((objSecao) => objSecao));
//   catchError((e) => this.errorHandler(e)));
 }

 put(secaoModel: SecaoModel): Observable<SecaoModel> {
   return this.httpClient.put<SecaoModel>(`${this.secaoUrl}/${secaoModel.Idsecao}`, secaoModel)
   .pipe(map((objSecao) => objSecao));
//   catchError((e) => this.errorHandler(e)));
 }

 delete(id: number) {
   return this.httpClient.delete(`${this.secaoUrl}/${id}`);
  }
}
