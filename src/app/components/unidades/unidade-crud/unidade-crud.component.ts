import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UnidadeService } from '../unidade.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-unidade-crud',
  templateUrl: './unidade-crud.component.html',
  styleUrls: ['./unidade-crud.component.css']
})
export class UnidadeCrudComponent implements OnInit {

  formUnidade: FormGroup;

  constructor(private unidadeService: UnidadeService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<UnidadeCrudComponent>,)
               { this.formUnidade = fb.group({
                 descricaoUnidade: [, [Validators.required]]
               }) }

  ngOnInit(): void {
  }

  salvar(): void {
    this.unidadeService.create(this.formUnidade.value).subscribe(() => {
      this.unidadeService.showMessage('Unidade Cadastrada Com Sucesso')
      this.dialogRef.close(true);
      this.formUnidade.reset();
    })
  }

  onCancel(){
    this.dialogRef.close(true);
    this.formUnidade.reset();
  }

}
