/*  Ejercicio 4: Herencia de Métodos y Sobrescritura  
Consigna: Define una clase base Flor con el método describir(), que imprime un
mensaje general sobre la flor. Luego, crea dos clases derivadas Rosa y Girasol, 
cada una sobrescribiendo el método describir() con un mensaje específico. */

class Flor{
    describir(){
        console.log(`Flor sin definir`);
    }
}

class Rosa extends Flor{
    describir(){
        console.log(`Esta flor es una rosa`);
    }
}

class Girasol extends Flor{
    describir(){
        console.log(`Esta flor es un girasol`);
    }
}

const rosa1= new Rosa();
const girasol1=new Girasol();

rosa1.describir();
girasol1.describir();