import { catchError, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SecaoModel } from 'src/app/models/secao.model';
import { UnidadeModel } from 'src/app/models/unidade.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: "root"})

export class UnidadeService {

  unidadeUrl = `${environment.apiUrl}/unidade`;

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

  create(unidadeModel: UnidadeModel): Observable<UnidadeModel> {
    return this.httpClient.post<UnidadeModel>(this.unidadeUrl, unidadeModel, this.httpOptions)
    .pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e)));
  }

  listaUnidade(): Observable<UnidadeModel[]> {
    return this.httpClient.get<UnidadeModel[]>(this.unidadeUrl, this.httpOptions)
    .pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e)));
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro", true);
    return EMPTY;
  }
}
