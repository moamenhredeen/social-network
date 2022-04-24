import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {CalendarModule} from 'primeng/calendar';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CalendarModule,
    RouterModule
  ]
})
export class SignupModule { }
