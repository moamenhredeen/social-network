import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    InputTextModule,
    SharedModule,
    ButtonModule,
    RouterModule
  ]
})
export class SCSharedModule { }
