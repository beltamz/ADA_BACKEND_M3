/*4. Ejercicio de Aviones 
Crea una clase Avion con propiedades privadas para el modelo, capacidad y 
velocidad. Implementa getters y setters para cada propiedad, asegurándote de 
validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa. 
Nota sobre la inicialización de propiedades 
En la clase Avion, se debe utilizar el operador de afirmación no nula (!) en las 
propiedades _capacidad y _velocidad. Esto se hace para evitar un error de 
TypeScript que indica que estas propiedades no estaban inicializadas en el 
constructor. Este enfoque asegura que las propiedades serán asignadas 
adecuadamente en el constructor mediante el uso de los setters, manteniendo 
así la validación de los valores. Tener esto en cuenta para los demás ejercicios.  */

export class Avion{
    private _modelo: string;
    private _capacidad! : number;
    private _velocidad! : number;

    constructor(modelo: string, capacidad:number, velocidad:number){
        this._modelo= modelo;
        this.Capacidad= capacidad;
        this.Velocidad= velocidad;
    }

    public get Modelo(): string{
        return this._modelo;
    }

    public get Capacidad(): number{
        return this._capacidad;
    }

    public set Capacidad(value: number){
        if(value<0){
            console.log('Capacidad incorrecta, se le asignara 0 automaticamente');
            this._capacidad=0;
        }else{
            this._capacidad= value;
        }
        
    }

    public get Velocidad(): number{
        return this._velocidad;
    }

    public set Velocidad(value: number){
         if(value<0){
            console.log('Velocidad incorrecta, se le asignara 0 automaticamente');
            this._velocidad=0;
        }else{
            this._velocidad= value;
        }
    }
}

const avion1= new Avion("Boeing 747", 1000,300);

//Probamos valores incorrectos para capacidad y velocidad
const avion2= new Avion("Boeing 777", -300, -100);


console.log(`Avion: ${avion1.Modelo}, Capacidad: ${avion1.Capacidad}, Velocidad: ${avion1.Velocidad}`);
console.log(`Avion: ${avion2.Modelo}, Capacidad: ${avion2.Capacidad}, Velocidad: ${avion2.Velocidad}`);