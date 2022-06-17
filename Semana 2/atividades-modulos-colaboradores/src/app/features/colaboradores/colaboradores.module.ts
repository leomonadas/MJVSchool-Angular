import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadecolaboradoresComponent } from './components/listadecolaboradores/listadecolaboradores.component';



@NgModule({
  declarations: [
    ListadecolaboradoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadecolaboradoresComponent
  ]
})
export class ColaboradoresModule { }
