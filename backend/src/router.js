const {Router} = require("express");
const routes = Router("./routes");
const imovel = require("./models/imovel")
//axios chamadas para outras APIs

// métodos http que iremos utilizar 
// get, post, delete, put

// Tipos de parametros
// Query Params: (GET) (Querer Filtrar) Insomnia Query
//      req.query (Filtros, ordenação, paginação )
// Route Params: (PUT, DELETE) fica só na rota
//      req.params( Identificar um recurso na alteração ou remoção)
// Body
//      req.body (Dados para criação ou alteração de um registro)
routes.post("/imoveis", async (request, response) => {
    //return response.send("Hello World")
    console.log(request.body);
    const {nome, sobrenome} = request.body;
    const imo = await imovel.create({
        nome,
        sobrenome,
    });
    //return response.json({message : "Hello Omin"})
    return response.json(imo)
})

routes.get("/all", async (request, response) => {
    //return response.send("Hello World")
    const imo = await imovel.find();
    return response.json(imo)
})


routes.get("/", (request, response) => {
    //return response.send("Hello World")
    console.log(request.query);
    return response.json({message : "Hello Omin"})
})

routes.put("/users/:id", (request, response) => {
    //return response.send("Hello World")
    console.log(request.params);
    return response.json({message : "Hello Omin"})
})

routes.post("/users", (request, response) => {
    //return response.send("Hello World")
    console.log(request.body);
    return response.json({message : "Hello Omin"})
})

module.exports = routes;
