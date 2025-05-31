/* Ejercicio 6: Herencia con Métodos Sobrescritos y super 
Consigna: Crea una clase base Zoologico con el método abrirPuertas(), que 
indique que el zoológico está abierto. Crea una clase derivada ZoologicoSafari 
que sobrescriba el método abrirPuertas() pero llamando al método de la clase 
base con super.  */

class Zoologico{
    abrirPuertas(){
        console.log(`El zoologico está abierto`);
    }
}

class ZoologicoSafari extends Zoologico{
    abrirPuertas(){
        super.abrirPuertas();
        console.log(`El safari comienza a las 10:00hs`);
    }
}

const zoo= new ZoologicoSafari();
zoo.abrirPuertas();