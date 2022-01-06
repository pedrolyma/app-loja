import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-crud',
  templateUrl: './fornecedor-crud.component.html',
  styleUrls: ['./fornecedor-crud.component.css']
})
export class FornecedorCrudComponent implements OnInit {

  formFornecedor: FormGroup;

  constructor(private fornecedorService: FornecedorService,
              private dialogRef: MatDialogRef<FornecedorCrudComponent>,
              private fb: FormBuilder)
 {
   this.formFornecedor = fb.group({
     razaoSocial: [, [Validators.required]],
     nomeFantasia: [],
     cepFornecedor: [],
     logradouroFornecedor: [],
     bairroFornecedor:  [],
     cidadeFornecedor:  [],
     estadoFornecedor: [],
     siteFornecedor:  [],
     emailFornecedor:  [],
     telefoneFornecedor:  [],
     whatsAppFornecedor:  [],
     bancoFornecedor:  [],
     agenciaFornecedor:  [],
     contaFornecedor:  [],
     titularFornecedor:  [],
     mercadoriaFornecedor:  [],
     observacaoFornecedor:  [],
     statusFornecedor: ['1'],
     pixFornecedor:  [],
   })
  }

  ngOnInit(): void {
  }

  salvar() {
    this.fornecedorService.createFornecedor(this.formFornecedor.value).subscribe(() => {
      this.fornecedorService.showMessage('Fornecedor Cadastrado com Sucesso');
      this.dialogRef.close();
      this.formFornecedor.reset();
 //     this.router.navigate(['/marcas']);
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
