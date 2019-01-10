import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { TourMatMenuModule } from 'ngx-tour-md-menu';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TourMatMenuModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
