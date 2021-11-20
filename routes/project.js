'use strict'
                               //Este es el fichero de la configuracion  de las rutas del controlador proyect

                              //OJO: cada controlador debe tener su propio fichero de rutas 

//Llamaremos a express para hacer el controlador (esta es la variable y es escript por defecto)
var express = require('express');

//Llamaremos al fichero que se encuentra en el controlador de project.js y tomares el valor de la variable que ahi se exporta para poder usar su metodos aqui 
var ProjectController = require('../controllers/project'); //No colocamos project.js porque ya lo detecta el mismo express

//Aqui voy a almacenar el valor del metodo por defecto de express que es  para definir rutas y lo almacenare en la variable router
var router = express.Router();



            //Crearemos un Diddelware para la ruta, uploadImage de la linea 33 llamada...esta se EJECUTARA ANTES DE QUE LA RUTA DE 
            //SUBIR ARCHIVOS SE EJECUTE
            var multipart = require('connect-multiparty');
            var multipartMiddleware = multipart({ uploadDir:'./uploads'});






router.get('/work', ProjectController.work );

router.get('/home', ProjectController.home );

router.post('/save-project', ProjectController.saveProject );

router.get('/project/:id?', ProjectController.getProject );  //:id? eso es para colocar paremotros opcional y :id este parametro obligatorio

router.get('/mierda', ProjectController.getProjects );

router.get('/projectt/:id', ProjectController.updateProyect );

router.delete('/project/:id', ProjectController.deleteProject );

router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage );

router.get('/update', multipartMiddleware, ProjectController.up );



//Esto se va a exportar y se utilizara en el app... en la seccion de archivos de ruta en app

module.exports = router;



