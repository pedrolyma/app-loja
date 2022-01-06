import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecaoService } from './../secao.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-secao-crud',
  templateUrl: './secao-crud.component.html',
  styleUrls: ['./secao-crud.component.css']
})
export class SecaoCrudComponent implements OnInit {

  formSecao: FormGroup;

  constructor(private secaoService: SecaoService,
              private fb: FormBuilder,
              public dialogRef: MatDialogRef<SecaoCrudComponent>,
              private toastr: ToastrService)
   {
     this.formSecao = fb.group({
       Idsecao: [null],
       descricaosecao: [, [Validators.required]],
       statussecao: [true]
     })
   }

  ngOnInit(): void {
  }

  salvar(): void {
    this.secaoService.create(this.formSecao.value).subscribe(
      () => {
//        this.carregarAluno();
        this.toastr.success('Secao Salva com Sucesso');
        this.dialogRef.close(true);
        this.formSecao.reset();
      }, (error: any) => { this.toastr.error('Erro: Secao nao pode ser salva') },
    );

  }

  onCancel(){
    this.dialogRef.close(true);
    this.formSecao.reset();
  }

}
