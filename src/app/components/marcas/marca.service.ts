import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { MatSnackBar } from '@angular/material/snack-bar';

import { environment } from './../../../environments/environment';
import { MarcaModel } from '../../models/marca.model';

export class MarcaFiltro {
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable({
    providedIn: 'root'
})
export class MarcaService {

  marcaUrl = `${environment.apiUrl}/marca`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  createMarca(marcaModel: MarcaModel): Observable<MarcaModel> {
    return this.http.post<MarcaModel>(this.marcaUrl, marcaModel, this.httpOptions)
  }

  listarMarcas(filtro: MarcaFiltro): Observable<MarcaModel[]> {
  //  return this.http.get(this.marcaUrl);
     let params = new HttpParams(); // HttpParams();
     const headers = new HttpHeaders(); // .append('Authorization', 'basic aqui ');
     params = params.set('page', filtro.pagina.toString());
     params = params.set('size', filtro.itensPorPagina.toString());
     return this.http.get<MarcaModel>(`${this.marcaUrl}?`, { params}).pipe(
       map((obj) => obj),
       catchError((e) => this.errorHandler(e))
     );
  }

  buscaPorId(id_marca: number): Observable<MarcaModel> {
        return this.http.get<MarcaModel>(`${this.marcaUrl}/${id_marca}`).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
  }

  updateMarca(marcaModel: MarcaModel): Observable<MarcaModel> {
    const url = `${this.marcaUrl}/${marcaModel.idmarca}`;
    return this.http.put<MarcaModel>(url, marcaModel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteMarca(id_marca: number): Observable<MarcaModel> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    const url = `${this.marcaUrl}/${id_marca}`;
    return this.http.delete<MarcaModel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
    }

    errorHandler(e: any): Observable<any> {
      alert("Ocorreu um erro!");
      return EMPTY;
    }
}
