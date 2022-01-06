import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MarcaCrudComponent } from "./marca-crud/marca-crud.component";
import { MarcaListaComponent } from "./marca-lista/marca-lista.component";

const routes: Routes = [
   { path: '', component: MarcaListaComponent },
   { path: 'nova', component: MarcaCrudComponent },
   { path: ':codigo', component: MarcaCrudComponent }
  ];

@NgModule({
   imports: [
     RouterModule.forChild(routes)
     ],
   exports: [RouterModule]
   })
export class MarcaRoutingModule { }
