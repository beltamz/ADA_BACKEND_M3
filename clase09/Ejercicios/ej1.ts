/* 1. Mueblería: Actualización de Precios
En una mueblería, se requiere un sistema que permita actualizar los precios de
los muebles cada vez que cambien. Cada mueble tiene un nombre, un precio y
un identificador único. Implementa las siguientes funciones:
• Añadir un nuevo mueble.
• Actualizar el precio de un mueble después de 3 segundos utilizando
setTimeout().
• Mostrar el inventario de muebles.*/

type Mueble = [number,string, number];

let inventarioMuebles: Mueble[] = [];

function anadirMueble( id: number, nombre: string, precio: number) {
    const nuevoMueble: Mueble = [ id,nombre, precio];
    inventarioMuebles.push(nuevoMueble);
    console.log(`Producto añadido con éxito.`);
}

function mostrarInventario() {
    console.log("Inventario de muebles actual:");

    inventarioMuebles.forEach(mueble => {
        const [id, nombre, precio] = mueble;
        console.log(`ID: ${id}, Nombre: ${nombre}, Precio: $${precio}`);
    });
}

function actualizarPrecio(id: number, nuevoPrecio: number) {
    setTimeout(() => {
        const mueble = inventarioMuebles.find(m => m[0] === id);
        if (mueble) {
            mueble[2] = nuevoPrecio;
            console.log(`Precio actualizado.`);
        } else {
            console.log("Mueble no encontrado.");
        }
    }, 3000);
}

anadirMueble(1, "Estante de madera", 20000);
anadirMueble(2, "Mesa ratona", 15000);

mostrarInventario();

actualizarPrecio(1, 22500);
mostrarInventario();//Volvemos a mostrar el inventario con el cambio del precio
