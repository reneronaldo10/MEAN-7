const mongoose = require("mongoose")

const Pais = mongoose.model("Pais", {//definir paisa mongosee faciltita la creacion de objetos en una base de datos
    PAIS: String,
    CAPITAL: String,
    MONEDA: String,
    IDIOMA: String,
    PRESIDENTE: String,
    POBLACION: Number,

})
module.exports = Pais