import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CorModel } from 'src/app/models/cor.model';

@Injectable({ providedIn: "root"})

export class CorService {
  corUrl = `${environment.apiUrl}/cores`;
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

  // create(corModel: CorModel): Observable<CorModel> {
  //   return this.httpClient.post<CorModel>(this.corUrl, corModel, this.httpOptions)
  //   .pipe(map((obj) => obj),
  //   catchError((e) => this.errorHandler(e)));
  // }

  // listaGeral(): Observable<CorModel[]> {
  //   return this.httpClient.get<CorModel[]>(this.corUrl, this.httpOptions)
  //   .pipe(map((obj) => obj),
  //   catchError((e) => this.errorHandler(e)));
  // }

  // errorHandler(e: any): Observable<any> {
  //   this.showMessage("Ocorreu um erro", true);
  //   return EMPTY;
  // }

  getAll(): Observable<CorModel[]> {
    return this.httpClient.get<CorModel[]>(this.corUrl)
    .pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e)));
 }

 getById(id: number): Observable<CorModel> {
    return this.httpClient.get<CorModel>(`${this.corUrl}/${id}`);
 }

 post(corModel: CorModel) {
   return this.httpClient.post(`${this.corUrl}`, corModel, this.httpOptions);
 }

 put(corModel: CorModel) {
   return this.httpClient.put(`${this.corUrl}/${corModel.Idcor}`, corModel);
 }

 delete(id: number) {
   return this.httpClient.delete(`${this.corUrl}/${id}`);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um Erro", true);
    return EMPTY;
  }
}
