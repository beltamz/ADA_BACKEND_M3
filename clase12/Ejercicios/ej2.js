/*Ejercicio 2: Crear un Endpoint POST para agregar usuarios
Consigna: Ahora vamos a permitir que el cliente agregue nuevos usuarios a la lista. Tu tarea es crear 
un endpoint POST que reciba los datos del usuario desde el cuerpo de la solicitud en formato JSON. 
Los datos deben incluir name y email.
Si alguno de estos datos falta, el servidor debe responder con un error (código 400).
Recuerda usar express.json() como middleware para procesar los datos del cuerpo de la solicitud. */

const express= require ('express');

const app= express();

const PORT = 3000;

let users = [];

app.use(express.json());

app.post('/users',(req,res)=>{
    const {name, email}=req.body;

    if(!name || !email){
        return res.status(400).send("Faltan datos de name y/o email")
    }

    users.push({name,email});

    res.status(200).json({message: 'Usuario agregado con exito', users})
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}/users`);
})