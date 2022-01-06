import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { GradeModel } from 'src/app/models/grade.model';

@Injectable({
    providedIn: 'root'
})
export class GradeService {

  gradeUrl = `${environment.apiUrl}/grades`;
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

  createGrade(gradeModel: GradeModel): Observable<GradeModel> {
    return this.http.post<GradeModel>(this.gradeUrl, gradeModel, this.httpOptions)
  }

  listaGrade(): Observable<GradeModel[]> {
    return this.http.get<GradeModel[]>(this.gradeUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  buscaPorId(id_grade: number): Observable<GradeModel> {
        return this.http.get<GradeModel>(`${this.gradeUrl}/${id_grade}`).pipe(
          map((obj) => obj),
          catchError((e) => this.errorHandler(e))
        );
  }

  updateGrade(gradeModel: GradeModel): Observable<GradeModel> {
    const url = `${this.gradeUrl}/${gradeModel.idGrade}`;
    return this.http.put<GradeModel>(url, gradeModel).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  deleteGrade(id_grade: number): Observable<GradeModel> {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    const url = `${this.gradeUrl}/${id_grade}`;
    return this.http.delete<GradeModel>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e)));
    }

    errorHandler(e: any): Observable<any> {
      alert("Ocorreu um erro!");
      return EMPTY;
    }
}
