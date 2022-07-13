import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardsComponent } from './components/cards/cards.component';
import { BlueDirective } from './directives/blue.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ButtonsComponent,
    CardsComponent,
    BlueDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ButtonsComponent,
    CardsComponent
  ]
})
export class SharedModule { }
