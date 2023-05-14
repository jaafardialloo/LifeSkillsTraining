import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./cross-cutting/login/login.component";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import('../app/cross-cutting/cross-cutting.module').then(
        mod => mod.CrossCuttingModule
      )
  },
  {
    path: "trainings",
    loadChildren: () =>
      import('../app/trainings/trainings.module').then(
        mod => mod.TrainingsModule
      )
  },
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
