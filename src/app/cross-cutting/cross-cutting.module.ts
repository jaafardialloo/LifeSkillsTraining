import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrossCuttingRoutingModule } from './cross-cutting-routing.module';
import { CrossCuttingComponent } from './cross-cutting.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    CrossCuttingComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    CrossCuttingRoutingModule
  ]
})
export class CrossCuttingModule { }
