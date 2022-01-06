import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContasCrudComponent } from "./contas-crud/contas-crud.component";
import { ContasListaComponent } from "./contas-lista/contas-lista.component";

const routes: Routes = [
   { path: '', component: ContasListaComponent },
   { path: 'nova', component: ContasCrudComponent },
   { path: ':codigo', component: ContasCrudComponent }
  ];

@NgModule({
   imports: [
     RouterModule.forChild(routes)
     ],
   exports: [RouterModule]
   })
export class ContasRoutingModule { }
