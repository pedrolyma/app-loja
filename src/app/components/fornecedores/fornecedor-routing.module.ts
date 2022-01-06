import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FornecedorCrudComponent } from "./fornecedor-crud/fornecedor-crud.component";
import { FornecedorListaComponent } from "./fornecedor-lista/fornecedor-lista.component";

const routes: Routes = [
   { path: '', component: FornecedorListaComponent },
   { path: 'nova', component: FornecedorCrudComponent },
   { path: ':codigo', component: FornecedorCrudComponent }
  ];

@NgModule({
   imports: [
     RouterModule.forChild(routes)
     ],
   exports: [RouterModule]
   })
export class FornecedorRoutingModule { }
