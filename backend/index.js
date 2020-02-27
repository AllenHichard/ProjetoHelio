const express = require("express");
const app = express(); // minha aplicação
const mongoose = require('mongoose');

app.use(express.json()); // se colocasse app.get só valeria para o get

// métodos http que iremos utilizar 
// get, post, delete, put

// Tipos de parametros
// Query Params: (GET) (Querer Filtrar) Insomnia Query
//      req.query (Filtros, ordenação, paginação )
// Route Params: (PUT, DELETE) fica só na rota
//      req.params( Identificar um recurso na alteração ou remoção)
// Body
//      req.body (Dados para criação ou alteração de um registro)

app.get("/", (request, response) => {
    //return response.send("Hello World")
    console.log(request.query);
    return response.json({message : "Hello Omin"})
})

app.put("/users/:id", (request, response) => {
    //return response.send("Hello World")
    console.log(request.params);
    return response.json({message : "Hello Omin"})
})

app.post("/users", (request, response) => {
    //return response.send("Hello World")
    console.log(request.body);
    return response.json({message : "Hello Omin"})
})

app.listen(3333);

//npm install -g nodemon
//npm install nodemon -D (dependência de desenvolvimento)
//node index.js executa o programa
// depois de instalar o nodemin npm start

// MongoDB (Não-relacional)