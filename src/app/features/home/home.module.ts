import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {PostsComponent} from './posts/posts.component';
import {CardModule} from "primeng/card";
import { PostDetailsComponent } from './post-details/post-details.component';
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {InputTextModule} from "primeng/inputtext";
import {HomeComponent} from "./home.component";
import {SCSharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
    HomeRoutingModule,
    ButtonModule,
    RouterModule,
    InputTextModule,
    SCSharedModule
  ]
})
export class HomeModule { }
