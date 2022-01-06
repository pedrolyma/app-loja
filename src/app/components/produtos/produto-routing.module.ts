import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutoCrudComponent } from "./produto-crud/produto-crud.component";
import { ProdutoListaComponent } from "./produto-lista/produto-lista.component";

const routes: Routes = [
   { path: '', component: ProdutoListaComponent },
   { path: 'nova', component: ProdutoCrudComponent },
   { path: ':codigo', component: ProdutoCrudComponent }
  ];

@NgModule({
   imports: [
     RouterModule.forChild(routes)
     ],
   exports: [RouterModule]
   })
export class ProdutoRoutingModule { }
