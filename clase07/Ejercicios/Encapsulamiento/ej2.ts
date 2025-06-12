/* 2. Ejercicio de Libro 
Crea una clase Libro que represente un libro en una biblioteca. Esta clase debe 
tener propiedades privadas para titulo, autor, anioPublicacion, y disponible. 
Implementa métodos para prestar y devolver el libro, asegurando que solo se 
pueda prestar si está disponible y que se pueda devolver solo si ha sido 
prestado. Imprime un mensaje en caso de que se intente realizar una acción no 
válida.  */

export class Libro{
    private _titulo: string;
    private _autor: string;
    private _anioPublicacion: number;
    private _disponible: boolean;

    constructor(_titulo: string,_autor: string,_anioPublicacion: number,_disponible: boolean){
        this._titulo= _titulo;
        this._autor= _autor;
        this._anioPublicacion= _anioPublicacion;
        this._disponible= _disponible;
    }

    prestar(): void{
        if(this._disponible){
            console.log('Libro prestado correctamente');
            this._disponible=false;
        }else{
            console.log('Libro no disponible para ser prestado');
        }
    }

    devolver():void{
        if(!this._disponible){
            this._disponible=true;
            console.log('Libro devuelto correctamente');
        }else{
            console.log('Este libro no se puede devolver , no fue prestado');
        }
    }

    mostrar():void{
        console.log(`Titulo: ${this._titulo}, Autor: ${this._autor}, Año Publicacion: ${this._anioPublicacion}, Disponible: ${this._disponible}`);
        
    }
}

const libro01= new Libro("1984","George Orwell", 1947,true);

libro01.devolver();//probar que no se puede devolver un libro no prestado
libro01.prestar();
libro01.mostrar();//ver el cambio de disponible a false
libro01.prestar();//probar que no se puede prestar un libro ya prestado
libro01.devolver();
libro01.mostrar();//ver el cambio de disponible a true nuevamente
