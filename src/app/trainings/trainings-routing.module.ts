import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrainingsWorklistComponent} from "./trainings-worklist/trainings-worklist.component";
import {TrainingsFormComponent} from "./trainings-form/trainings-form.component";

const routes: Routes = [
  { path: 'trainings-list', component: TrainingsWorklistComponent },
  { path: 'trainings-form', component: TrainingsFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingsRoutingModule { }
