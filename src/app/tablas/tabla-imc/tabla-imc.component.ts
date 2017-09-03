import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'imc-table',
  templateUrl: './tabla-imc.component.html',
})
export class ImcTableComponent {
  masa:number = 0;
  talla:number = 1;
  IMC:number = 0;
  isMayor:boolean = false;

  calcIMC(){
  	this.IMC = parseFloat((this.masa/Math.pow(this.talla,2)).toFixed(2));
  }
}
