'use strict'

/*Aqui vamos a conectarnos con la base de datos de MONGODB, y vamos a usar  ( porque mongose es un ORM y permite hacer
 conexiones con la base de datos Mongo DB mucho mas facil) */


var mongoose = require('mongoose');

//Esto ya es aparte y no pertenece a la session de conectarnos con la base de datos sino sino que pertenece
// a la session de CREACION DEL SERVIDOR.. que se realizo luego de haberse conectado con exito al servidor 
var app = require('./app');
var port = 3700;
// ---------------------------------------------------------------------------------------------------------


//Aqui continua la conexion a la base de datos :
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(() => {

                     console.log("Conexion a la base de datos con exito preciso  ...");   




                     //CREACION DEL SERVIDOR: Estas lineas de codigo se escriben luego de que se configurara express y bodyparse
                    
                     app.listen(port, () =>{
                         console.log("Servidor corriendo correctamente en la url: localhost:3700");
                                           }
                                );

                     //----------------------------------------------------------------------------------------------------------     
                    }
             )

        .catch(err => console.log(err));
        
        
