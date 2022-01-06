import { MatDialog } from '@angular/material/dialog';
import { GradeService } from './../grade.service';
import { Component, OnInit } from '@angular/core';
import { GradeModel } from 'src/app/models/grade.model';
import { Router } from '@angular/router';
import { GradeCrudComponent } from '../grade-crud/grade-crud.component';

@Component({
  selector: 'app-grade-lista',
  templateUrl: './grade-lista.component.html',
  styleUrls: ['./grade-lista.component.css']
})
export class GradeListaComponent implements OnInit {

  listaGrade: GradeModel[] = [];
  displayedColumns = ['idGrade', 'inicioGrade', 'fimGrade', 'intervalo', 'qtdeItensGrade', 'actions']

  constructor(private gradeService: GradeService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
  }

  addGrade() {
    const dialogRef = this.dialog.open(GradeCrudComponent, {
      width: '400px',
      // data: marcaModel === null ?  {
      //   descricaoMarca: null,
      //   fotoMarca: null} : marcaModel
    });
  }

  sair() {
     this.router.navigate(['/']);
  }

}
