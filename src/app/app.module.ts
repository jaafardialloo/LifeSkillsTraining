import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {CrossCuttingModule} from "./cross-cutting/cross-cutting.module";
import {AgGridModule} from "ag-grid-angular";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CrossCuttingModule,
    AgGridModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
