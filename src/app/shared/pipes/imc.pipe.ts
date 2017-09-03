import { Pipe, PipeTransform } from '@angular/core';

const imcValuesMenores: string[] = [
"Bajo Peso",
"Normal",
"Sobre Peso",
"Obesidad I",
"Obesidad II",
"Obesidad III"
];

const imcValuesMayores: string[] = [
"DN Severa",
"DN Moderada",
"DN Leve",
"Normal",
"Sobre Pesp",
"Obesidad"
];

@Pipe({name: 'imcValue'})
export class ImcValuePipe implements PipeTransform {

	transform(imc: number, isMayor: boolean): string {
		if(isMayor) return imc + ": " + this.getImcValueMayores(imc);
		else return imc + ": " + this.getImcValueMenores(imc);
	}

	getImcValueMayores(imc:number):string {
		if(imc<16.5)return imcValuesMayores[0];
		else if(imc>=16.5 && imc<=16.99)return imcValuesMayores[1];
		else if(imc>=17 && imc<=19.5)return imcValuesMayores[2];
		else if(imc>=19.6 && imc<=27.99)return imcValuesMayores[3];
		else if(imc>=28 && imc<=29.99)return imcValuesMayores[4];
		else if(imc>=30)return imcValuesMayores[5];
	}

	getImcValueMenores(imc:number):string {
		if(imc<18.5)return imcValuesMenores[0];
		else if(imc>=18.5 && imc<=24.9)return imcValuesMenores[1];
		else if(imc>=25 && imc<=29.9)return imcValuesMenores[2];
		else if(imc>=30 && imc<=34.9)return imcValuesMenores[3];
		else if(imc>=35 && imc<=39.9)return imcValuesMenores[4];
		else if(imc>=40)return imcValuesMenores[5];
	}

}