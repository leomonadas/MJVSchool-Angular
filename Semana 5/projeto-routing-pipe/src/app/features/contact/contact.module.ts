import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
