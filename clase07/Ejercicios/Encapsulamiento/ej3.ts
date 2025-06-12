/*3. Ejercicio de Estudiante 
Diseña una clase Estudiante que contenga propiedades privadas para nombre, 
edad, y calificaciones. Implementa métodos para agregar calificaciones y 
calcular el promedio. Imprime un mensaje en caso de que se intente agregar 
una calificación inválida (fuera del rango 0-100) o si no hay calificaciones para 
calcular el promedio.  */

export class Estudiante{
    constructor(private _nombre: string, private _edad: number,private _calificaciones: number[]){}

    agregarCalificacion(calificacion: number): void{
        if(calificacion<=0 || calificacion>=100){
            console.log(`Nota invalida`);
        }else{
            this._calificaciones.push(calificacion);
            console.log(`Calificacion agregada correctamente`); 
        }
    }

    calcularPromedio(){
        if( this._calificaciones.length==0){
            console.log(`No hay valores para promediar`);
        }else{
            let rdo= this._calificaciones.reduce((acumulador, valor)=>acumulador+valor,0)/ this._calificaciones.length;
            console.log(`Su promedio es de : ${rdo}`);
        }
    }

    mostrarInfo():void{
        console.log(`Alumno: ${this._nombre}\nEdad: ${this._edad}\nCalificaciones actuales: ${this._calificaciones}`);
    }
}

const est1 = new Estudiante("Juan",14,[]);

//probamos dos valores invalidos
est1.agregarCalificacion(-1);
est1.agregarCalificacion(101);

est1.agregarCalificacion(60);
est1.agregarCalificacion(90);
est1.agregarCalificacion(80);
est1.calcularPromedio();
est1.mostrarInfo();

const est2= new Estudiante("Lisa", 16,[]);
//probamos hacer el promedio de un array vacio
est2.calcularPromedio();