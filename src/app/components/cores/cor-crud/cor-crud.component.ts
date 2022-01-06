import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CorService } from '../cor.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cor-crud',
  templateUrl: './cor-crud.component.html',
  styleUrls: ['./cor-crud.component.css']
})
export class CorCrudComponent implements OnInit {

  formCor: FormGroup;
  constructor(private corService: CorService,
              private fb: FormBuilder,
              private dialogRef: MatDialogRef<CorCrudComponent>)
   {
    this.formCor = fb.group({
   //   Idcor: [,[]],
      descricaocor: [,[Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  salvar(): void {
    this.corService.post(this.formCor.value).subscribe(() => {
      this.corService.showMessage('Cor Cadastrada Com Sucesso')
      this.dialogRef.close(true);
      this.formCor.reset();
    })
  }

  onCancel(){
    this.dialogRef.close(true);
    this.formCor.reset();
  }

}
