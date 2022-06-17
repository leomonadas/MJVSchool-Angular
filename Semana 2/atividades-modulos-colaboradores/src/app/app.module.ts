import { ColaboradoresModule } from './features/colaboradores/colaboradores.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ColaboradoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
