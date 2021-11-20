'use strict'

                                         ///ESTE ES COMO EL CENTRO DE MI APLICACION 
                                         ///Desde aqui sale todo hacia los demas ficheros 



/* ESTA ES LA CONFIGURACION DE EXPRESS */

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

//llamando al modulo de path 
const path = require('path');

//Aqui llamaremos a los archivos de Rutas y luego cofiguraremos y activaremos la ruta con espress de la linea 45 para alla

var project_routes = require('./routes/project');


//Configuracion del motor de renderizacion EJS

app.set('view engine', 'ejs');
//Configuracion  de las vistas   (__dirname me lleva a el directorio de projecto. Y de ahi la carpeta de views que es la que va a tener las vistas en .ejs )
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + "/public"));
/* Aqui definiremos que carpeta sera la que almacenara esos archivos usando el metodo 
de express llamado static() */

app.use(express.static(path.join(__dirname, 'public')) );




//Configuracion de Middlewares  (un Middlewares es una capa que se ejecuta antes de ejecura un controlador )
//Usaremos la variable express y con ella activaremos a bodyparse para que en el Middlewares nos combierta todas las peticiones 
//a objetos JSON :
 
//Esta es una simple configuarcion que hay que hacer siempre para Bodyparse
app.use(bodyParser.urlencoded({extended:false}));

//Todo lo que le llegue lo combierta a objeto JSON, osea cualquier tipo de peticion que llegue, primero va a ejecutar esto
// y a convertir a objetos JSON todo lo que me llegue
app.use(bodyParser.json() );

//cors







//Aqui cargaremos a las rutas en si

/*Ruta de Prueba:

app.post('/test', (req,res) => {  //-----> req: Peticion.    res: respuesta
      
    console.log(req.query.nombre);//query es para recoger un parametro de la url
    console.log(req.body.apellido);//body es para recoger una peticion desde el cuerpo de la pagina
                                   //params es cuando le paso desde la ruta un parametro concreto y ahi si lo voy a obtener

    
    res.status(200).send({
        message: "Hola mundo  desde mi API REST"
                          });

                                }
                                
        );

*/

/*Actiacion de la Ruta del controlador project*/

app.use('/', project_routes);

app.get('/', (req, res) => {res.render('index')}
       
);




//Modulo para Exportacion para poder usarlo en donde queramos con la variable

module.exports = app;