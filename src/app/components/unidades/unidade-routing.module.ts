import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UnidadeCrudComponent } from "./unidade-crud/unidade-crud.component";
import { UnidadeListaComponent } from "./unidade-lista/unidade-lista.component";

const routes: Routes = [
   { path: '', component: UnidadeListaComponent },
   { path: 'nova', component: UnidadeCrudComponent },
   { path: ':codigo', component: UnidadeCrudComponent }
  ];

@NgModule({
   imports: [
     RouterModule.forChild(routes)
     ],
   exports: [RouterModule]
   })
export class UnidadeRoutingModule { }
