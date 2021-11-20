'use strict'

//Este es el modelo de project


//Llamamos a mongoose que es el ORM
var mongoose = require('mongoose');

//Llamaremos a el esquema de mongoose para definir la estructura, lo llamamos con la misma variable de mongoose añadiendole el .Schema
// Y lo meteremos todo en l variable Schema
var Schema = mongoose.Schema;   

//Aqui la variable ProjectSchema sera igual al valor de Schema que se llenara de valores a continuacion 
var ProjectSchema = Schema({ 
    work: Number,
    play: Number,
    study: Number,
    exercise: Number,
    social: Number,
    self: Number,
    titulouno: String,
    titulodos: String,
    titulotres: String,
    titulocuatro: String,
    titulocinco: String,
    tituloseis: String

                           });

//con esto exportamos en una variable el modelo para usarlo en otros ficheros

module.exports =  mongoose.model('Project', ProjectSchema); //Project se llamara en la base de datos y tendra esos campos
//projects ----> guarda los documents en la coleccion




