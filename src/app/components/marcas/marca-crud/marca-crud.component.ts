import { MarcaService } from './../marca.service';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MarcaModel } from 'src/app/models/marca.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marca-crud',
  templateUrl: './marca-crud.component.html',
  styleUrls: ['./marca-crud.component.css']
})
export class MarcaCrudComponent implements OnInit {

  formMarca: FormGroup;

  constructor(private fb: FormBuilder,
              private marcaService: MarcaService,
              private router: Router,
              public dialogRef: MatDialogRef<MarcaCrudComponent>,
              public data: MarcaModel)
               {this.formMarca = fb.group({
                //  idMarca: [null],
                 descricaoMarca: ['', [ Validators.required]],
                 statusMarca: [],
                 fotoMarca: []
               })};



  ngOnInit() {

  }

  salvar() {
    this.marcaService.createMarca(this.formMarca.value).subscribe(() => {
      this.marcaService.showMessage('Marca Cadastrada com Sucesso');
      this.dialogRef.close();
      this.formMarca.reset();
 //     this.router.navigate(['/marcas']);
    })
  }

  onCancel(): void {
    this.dialogRef.close();
  }


}
