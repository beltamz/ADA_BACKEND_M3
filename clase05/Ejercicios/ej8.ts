/*Ejercicio 8: Integramos contenidos - Animales 
1. Crea un pequeño sistema de gestión de Animales que incluya las clases 
Animal, Mascota, y MascotaExotica. 
o La clase Animal debe tener propiedades como nombre y tipo. 
o La clase Mascota debe extender Animal e incluir una propiedad para 
dueño. 
o La clase MascotaExotica debe extender Animal e incluir una 
propiedad para habitat. 
2. Implementa métodos para mostrar información sobre cada tipo de animal 
y agrega ejemplos de instanciación. 
 */

export class Animal{
    public nombre: string;
    public tipo: string;

    constructor(nombre: string,tipo: string){
        this.nombre= nombre;
        this.tipo= tipo;
    }

}

class Mascota extends Animal{
    public duenio: string;

    constructor(nombre: string,tipo: string,duenio: string){
        super(nombre,tipo);
        this.duenio= duenio;
    }

    public mostrarMascota(){
        console.log(`MASCOTA\nNombre: ${this.nombre}\nTipo: ${this.tipo}\nDueño: ${this.duenio}`);
    }

}

class MascotaExotica extends Animal{
    public habitat: string;

    constructor(nombre: string,tipo: string, habitat: string){
        super(nombre,tipo);
        this.habitat= habitat;
    }

     public mostrarMascotaExotica(){
        console.log(`MASCOTA EXOTICA\nNombre: ${this.nombre}\nTipo: ${this.tipo}\nHabitat: ${this.habitat}`);
    }
}

const masc1= new Mascota("Copito","Perro","Maria");
const mascEx1= new MascotaExotica("Pini","Erizo","Bosque");

masc1.mostrarMascota();
mascEx1.mostrarMascotaExotica();