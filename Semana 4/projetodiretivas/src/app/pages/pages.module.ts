import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurpleDirective } from './directives/purple.directive';

@NgModule({
  declarations: [
    HomeComponent,
    PurpleDirective,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
