import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FornecedorService } from './../components/fornecedores/fornecedor.service';
import { SecaoService } from './../components/secoes/secao.service';
import { MarcaService } from './../components/marcas/marca.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LOCALE_ID, NgModule } from "@angular/core";
import { CorService } from '../components/cores/cor.service';
import { UnidadeService } from '../components/unidades/unidade.service';
import { LocalizacaoService } from '../components/localizacao/localizacao.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ToastrModule,
    ],
  declarations: [],
  exports: [ToastrModule],
  providers: [
    MarcaService,
    SecaoService,
    CorService,
    UnidadeService,
    FornecedorService,
    LocalizacaoService,
    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
})

export class CoreModule {}
