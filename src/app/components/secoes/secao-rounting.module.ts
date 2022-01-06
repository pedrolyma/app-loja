import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SecaoCrudComponent } from "./secao-crud/secao-crud.component";
import { SecaoListaComponent } from "./secao-lista/secao-lista.component";

const routes: Routes = [
   { path: '', component: SecaoListaComponent },
   { path: 'nova', component: SecaoCrudComponent },
   { path: ':codigo', component: SecaoCrudComponent }
  ];

@NgModule({
   imports: [
     RouterModule.forChild(routes)
     ],
   exports: [RouterModule]
   })
export class SecaoRoutingModule { }
