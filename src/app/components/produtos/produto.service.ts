import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ModeloModel } from 'src/app/models/modelo.model';
import { ProdutoModel } from 'src/app/models/produto.model';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

  produtoUrl = `${environment.apiUrl}/produtos`;

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

  createProduto(produtoModel: ProdutoModel): Observable<ProdutoModel> {
    return this.http.post<ProdutoModel>(this.produtoUrl, produtoModel, this.httpOptions)
  }

  listaProduto(): Observable<ProdutoModel[]> {
    return this.http.get<ProdutoModel[]>(this.produtoUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  buscaPorId(id_produto: number): Observable<ProdutoModel> {
        return this.http.get<ProdutoModel>(`${this.produtoUrl}/${id_produto}`).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
  }

  updateProduto(produtoModel: ProdutoModel): Observable<ProdutoModel> {
    const url = `${this.produtoUrl}/${produtoModel.idProduto}`;
    return this.http.put<ProdutoModel>(url, produtoModel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteProduto(id_produto: number): Observable<ProdutoModel> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    const url = `${this.produtoUrl}/${id_produto}`;
    return this.http.delete<ProdutoModel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
    }

    errorHandler(e: any): Observable<any> {
      alert("Ocorreu um erro!");
      return EMPTY;
    }
}
