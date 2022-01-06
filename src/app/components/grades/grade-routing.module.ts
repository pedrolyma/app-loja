import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GradeCrudComponent } from "./grade-crud/grade-crud.component";
import { GradeListaComponent } from "./grade-lista/grade-lista.component";

const routes: Routes = [
   { path: '', component: GradeListaComponent },
   { path: 'nova', component: GradeCrudComponent },
   { path: ':codigo', component: GradeCrudComponent }
  ];

@NgModule({
   imports: [
     RouterModule.forChild(routes)
     ],
   exports: [RouterModule]
   })
export class GradeRoutingModule { }
