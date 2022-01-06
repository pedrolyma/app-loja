import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ContasModel } from 'src/app/models/contas.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ContasService {
  contasUrl = `${environment.apiUrl}/contas`;

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
     duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  getAll(): Observable<ContasModel[]> {
    return this.httpClient.get<ContasModel[]>(this.contasUrl)
    .pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e)));
 }

 errorHandler(e: any): Observable<any> {
  this.showMessage("Ocorreu um Erro", true);
  return EMPTY;
}

}
