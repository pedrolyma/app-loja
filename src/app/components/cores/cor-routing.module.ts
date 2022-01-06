import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CorCrudComponent } from "./cor-crud/cor-crud.component";
import { CorListaComponent } from "./cor-lista/cor-lista.component";

const routes: Routes = [
   { path: '', component: CorListaComponent },
   { path: 'nova', component: CorCrudComponent },
   { path: ':codigo', component: CorCrudComponent }
  ];

@NgModule({
   imports: [
     RouterModule.forChild(routes)
     ],
   exports: [RouterModule]
   })
export class CorRoutingModule { }
