import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import{ ImcValuePipe } from './shared/pipes/imc.pipe';

import { AppComponent } from './app.component';
import  { ImcTableComponent } from './tablas/tabla-imc/tabla-imc.component' ;
import  { BoneTableComponent } from './tablas/tabla-osea/tabla-osea.component' ;


@NgModule({
  declarations: [
    AppComponent,
    ImcTableComponent,
    BoneTableComponent,
    ImcValuePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
