import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { FornecedorModel } from 'src/app/models/fornecedor.model';

@Injectable({
    providedIn: 'root'
})
export class FornecedorService {

  fornecedorUrl = `${environment.apiUrl}/fornecedores`;

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

  createFornecedor(fornecedorModel: FornecedorModel): Observable<FornecedorModel> {
    return this.http.post<FornecedorModel>(this.fornecedorUrl, fornecedorModel, this.httpOptions)
  }

  listaFornecedor(): Observable<FornecedorModel[]> {
    return this.http.get<FornecedorModel[]>(this.fornecedorUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  buscaPorId(id_fornecedor: number): Observable<FornecedorModel> {
        return this.http.get<FornecedorModel>(`${this.fornecedorUrl}/${id_fornecedor}`).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
  }

  updateFornecedor(fornecedorModel: FornecedorModel): Observable<FornecedorModel> {
    const url = `${this.fornecedorUrl}/${fornecedorModel.idFornecedor}`;
    return this.http.put<FornecedorModel>(url, fornecedorModel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteFornecedor(id_fornecedor: number): Observable<FornecedorModel> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    const url = `${this.fornecedorUrl}/${id_fornecedor}`;
    return this.http.delete<FornecedorModel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)));
    }

    errorHandler(e: any): Observable<any> {
      alert("Ocorreu um erro!");
      return EMPTY;
    }
}
