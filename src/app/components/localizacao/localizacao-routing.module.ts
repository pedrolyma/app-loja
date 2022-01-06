import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocalizacaoCrudComponent } from "./localizacao-crud/localizacao-crud.component";
import { LocalizacaoListaComponent } from "./localizacao-lista/localizacao-lista.component";

const routes: Routes = [
   { path: '', component: LocalizacaoListaComponent },
   { path: 'nova', component: LocalizacaoCrudComponent },
   { path: ':codigo', component: LocalizacaoCrudComponent }
  ];

@NgModule({
   imports: [
     RouterModule.forChild(routes)
     ],
   exports: [RouterModule]
   })
export class LocalizacaoRoutingModule { }
