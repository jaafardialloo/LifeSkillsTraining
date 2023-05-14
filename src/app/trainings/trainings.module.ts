import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsWorklistComponent } from './trainings-worklist/trainings-worklist.component';
import { TrainingsFormComponent } from './trainings-form/trainings-form.component';
import { TrainingsMainComponent } from './trainings-main.component';
import {AgGridModule} from "ag-grid-angular";


@NgModule({
  declarations: [
    TrainingsWorklistComponent,
    TrainingsFormComponent,
    TrainingsMainComponent
  ],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    AgGridModule
  ]
})
export class TrainingsModule { }
