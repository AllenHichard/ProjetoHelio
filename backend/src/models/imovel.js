const mongoose = require('mongoose');

const imovelSchema = new mongoose.Schema({
    nome: String,
    sobrenome: String,
});

module.exports = mongoose.model('imovel', imovelSchema);