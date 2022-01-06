import { ModeloListaComponent } from './modelo-lista/modelo-lista.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModeloCrudComponent } from "./modelo-crud/modelo-crud.component";

const routes: Routes = [
   { path: '', component: ModeloListaComponent },
   { path: 'nova', component: ModeloCrudComponent },
   { path: ':codigo', component: ModeloCrudComponent }
  ];

@NgModule({
   imports: [
     RouterModule.forChild(routes)
     ],
   exports: [RouterModule]
   })
export class ModeloRoutingModule { }
