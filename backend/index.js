const express = require("express");
const app = express(); // minha aplicação

app.get("/", (request, response) => {
    //return response.send("Hello World")
    return response.json({message : "Hello"})
})

app.listen(3333);

//npm install nodemon -D (dependência de desenvolvimento)
//node index.js executa o programa