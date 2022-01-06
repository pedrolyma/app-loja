import { MatDialogRef } from '@angular/material/dialog';
import { GradeService } from './../grade.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade-crud',
  templateUrl: './grade-crud.component.html',
  styleUrls: ['./grade-crud.component.css']
})
export class GradeCrudComponent implements OnInit {

  formGrade: FormGroup;

  constructor(private gradeService: GradeService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<GradeCrudComponent>)
  {
    this.formGrade = fb.group({
      idGrade: [],
      inicioGrade: [],
      fimGrade: [],
      intervalo: [],
      qtdeItensGrade: []
    })
  }

  ngOnInit(): void {
  }

  salvar(): void {
    this.gradeService.createGrade(this.formGrade.value).subscribe(() => {
      this.gradeService.showMessage('Grade Cadastrada Com Sucesso')
      this.dialogRef.close(true);
      this.formGrade.reset();
    })
  }

  onCancel(){
    this.dialogRef.close(true);
    this.formGrade.reset();
  }

}
