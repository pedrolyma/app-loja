import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { ModeloModel } from 'src/app/models/modelo.model';

@Injectable({
    providedIn: 'root'
})
export class ModeloService {

  modeloUrl = `${environment.apiUrl}/modelos`;

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

  createModelo(modeloModel: ModeloModel): Observable<ModeloModel> {
    return this.http.post<ModeloModel>(this.modeloUrl, modeloModel, this.httpOptions)
  }

  listaModelo(): Observable<ModeloModel[]> {
    return this.http.get<ModeloModel[]>(this.modeloUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  buscaPorId(id_modelo: number): Observable<ModeloModel> {
        return this.http.get<ModeloModel>(`${this.modeloUrl}/${id_modelo}`).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
  }

  updateModelo(modeloModel: ModeloModel): Observable<ModeloModel> {
    const url = `${this.modeloUrl}/${modeloModel.idModelo}`;
    return this.http.put<ModeloModel>(url, modeloModel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteModelo(id_modelo: number): Observable<ModeloModel> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    const url = `${this.modeloUrl}/${id_modelo}`;
    return this.http.delete<ModeloModel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
    }

    errorHandler(e: any): Observable<any> {
      alert("Ocorreu um erro!");
      return EMPTY;
    }
}
