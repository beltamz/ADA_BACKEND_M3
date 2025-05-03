//1 - Funcion Basica
export function sumar(a:number, b:number) {
    return a+ b ; 
}

console.log(sumar(3,5));

//2 - Funcion que muestra un mensaje sin retorno

function mostrarMensaje(mensaje:string) : void {
    console.log(mensaje);
}

mostrarMensaje("Buen dia");

//funcion con parametro opcional

function saludar(nombre:string, saludo?:string) : string {
    if(saludo){
        return `${saludo}, ${nombre}`;
    }
    return `Hola, ${nombre}`;
}

console.log(saludar("Pedro","Buen dia"));
console.log(saludar("Maria"));