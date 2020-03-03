const express = require("express");
const mongoose = require('mongoose');
const routes = require("./router")


const app = express(); // minha aplicação
app.use(express.json()); // se colocasse app.get só valeria para o get

//table escolhe o banco, neste caso teste
const url = "mongodb://testeOmni:Maiden66@cluster0-shard-00-00-4d3je.mongodb.net:27017,cluster0-shard-00-01-4d3je.mongodb.net:27017,cluster0-shard-00-02-4d3je.mongodb.net:27017/teste?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
const paramet = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(url, paramet);

app.use(routes)
app.listen(3333);

//npm install -g nodemon
//npm install nodemon -D (dependência de desenvolvimento)
//node index.js executa o programa
// depois de instalar o nodemin npm start

// MongoDB (Não-relacional)