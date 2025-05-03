/*Consigna: Crea una función llamada calcularArea que acepte el tipo de figura
("circulo" o "rectangulo") y luego acepte los parámetros necesarios para cada
tipo de figura (radio para el círculo y largo y ancho para el rectángulo). La
función debe retornar el área de la figura. Usa tipos específicos para cada caso. */

function calcularArea(figura:string, radio: number=0, largo: number=0, ancho: number=0): number {
    if (figura=="circulo") {
        return Math.PI*Math.pow(radio, 2);
    }else{
        return largo* ancho;
    }
}

type figura= "circulo" | "rectangulo";
let figura1: figura= "circulo";
let figura2: figura= "rectangulo";
let radio: number= 3;
let largo: number= 23; 
let ancho: number= 12;

let valor1: number=calcularArea(figura1, radio);
let valor2: number= calcularArea(figura2, 0 ,largo, ancho);

console.log(valor1);
console.log(valor2);