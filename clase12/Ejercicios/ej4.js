/* Ejercicio 4: Practicando desestructuración de objetos
Consigna: Dado el siguiente objeto JSON enviado en el cuerpo de la solicitud:
{
 "name": "Katherine Johnson",
 "email": "katherine@example.com",
 "age": 42
}
Crea un endpoint POST que use desestructuración para extraer name y email.
Luego, responde con un mensaje que incluya estos valores. Si el cliente envía
datos incompletos, responde con un error 400.*/

const express = require('express');
const app = express();

app.use(express.json());

app.post('/add-user', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('Faltan datos de name y/o email');
    }

    res.json({ message: `Usuario ${name} con correo ${email} agregado con éxito` });
});

// Iniciamos el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en http://localhost:3000');
});