import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {ResultatComponent} from "./resultat/resultat.component";
import {CreatePlanComponent} from "./create-plan/create-plan.component";

const routes: Routes = [
  {path:'resultat',component:ResultatComponent},
  {path:'',component:CreatePlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
