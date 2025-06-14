/*Ejercicio 3: Usar parámetros dinámicos con :id
Consigna: En este ejercicio, vamos a permitir que el cliente busque información de un usuario por su ID. 
Crea un endpoint GET que reciba un parámetro dinámico :id en la URL (por ejemplo, /users/1). 
Usa req.params para capturar este valor y busca al usuario correspondiente en una lista. 
Si no se encuentra el usuario, responde con un error 404. */

const express= require('express');
const app = express();

const users = [
    { id: 1, name: 'Mariana Diaz', email: 'marianaDiaz@example.com' },
    { id: 2, name: 'Estela Lopez', email: 'estelaLopez@example.com' }
];

app.get('/users/:id', (req,res)=>{
    const {id}=req.params;
    
    const user = users.find(user => user.id === parseInt(id));

    if (!user) {
        return res.status(404).send('Usuario no encontrado');
    }

    res.json(user);
})

app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});