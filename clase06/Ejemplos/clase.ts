//lase base
export class Animal{
    name: string;

    //el constructor inicializa la propiedad name
    constructor(name:string){
        this.name= name;
    }

    //metodo que imprimir un sonido generico de animal
    makeSound():void{
        console.log(`${this.name} hace un sonido`);
    }
}

//Clase derivada- Hija
class Dog extends Animal{
    breed: string;

    constructor(name: string, breed: string){
        super(name);//llama al constructor de la clase base animal para inicializar name
        this.breed= breed;
    }

    //sobreescritura del metodo makesound()
    makeSound(): void {
        console.log(`${this.name} ladra`);//cambia el sonido generico por el sonido de los perros
    }

    //nuevo metodo especifico de la subclase Dog
    fetch(): void{
        console.log(`${this.name} esta buscando la pelota`);//el perro realiza la accion de buscar pelota
    }

}

const animalGenerico= new Animal('Animal'); //creo un objeto de la clase base
animalGenerico.makeSound();

const dog1= new Dog('Coquito', 'Caniche');
dog1.makeSound();
dog1.fetch();