'use strict'

//CONTROLADOR DEL MODULO PROYECTO (un controlador en una archivo tiene a class and dentro este tiene varios medotodos o acciones 
                                  // que son relacionadas con la entidad que  se esta trabajando )

//Para el metodo save necesitamos trer al modelo aqui y lo traemos asi:

 var Project = require('../models/project');

                              
                                  
 // crearemos un variable y adentro esta tendra un objeto JSON que tendre propiedades por cada metodo que yo vaya a tener 
 
 var controller = { 

    work: function(req, res){ 

        Project.find({}).exec(( err, projects) => {

            if(err) return res.status(500).send({ message: 'Error al devolver todo los datos' });

            if(!projects) return res.status(404).send({ message: 'no hay proyectos que mostrar.' });

            return res.status(200).render('index',{  "titulo":projects  });
            
                                                  } )
                            },

    home: function(req, res){ 
                                  return res.status(200).render('home' , { message: "Soy  el mesaje de la testing del controlador project "});
                            },

    



    up: function(req, res){ 
                                Project.find({}).exec(( err, projects) => {
                        
                                    if(err) return res.status(500).send({ message: 'Error al devolver todo los datos' });
                        
                                    if(!projects) return res.status(404).send({ message: 'no hay proyectos que mostrar.' });
                        
                                    return res.status(200).render('update',{  "titulo":projects  });
                                    
                                                                          } )
                                                                          
                            },



   
                                                     up: function(req, res){ 
                                                        Project.find({}).exec(( err, projects) => {
                                                
                                                            if(err) return res.status(500).send({ message: 'Error al devolver todo los datos' });
                                                
                                                            if(!projects) return res.status(404).send({ message: 'no hay proyectos que mostrar.' });
                                                
                                                            return res.status(200).render('update',{  "titulo":projects  });
                                                            
                                                                                                  } )
                                                                                                  
                                                                             },




         //COMENZAMOS CON EL C.R.U.D
         
         
   //GUARDAR 
    saveProject: function(req, res){ 
        
    
                          var project = new Project();
                          var params = req.body;  //<--- req.body de aqui se toma todo lo que se introduce desde el formulario
                          project.work = params.work;
                          project.play = params.play;
                          project.study = params.study;
                          project.exercise = params.exercise;
                          project.social = params.social;
                          project.self = params.self;
                          project.titulouno = "Work";
                          project.titulodos = "Play";
                          project.titulotres = "Study";
                          project.titulocuatro = "Exercise";
                          project.titulocinco = "Social";
                          project.tituloseis = "Self Care";

                                  
                                   
                                  //Guardar en la base de datos 
                                  project.save( (err, projectStored) =>{
                                     //esto es una condicional por si no se llega a guardar en la base de dato, o si hay algun error
                                      if(err) return res.status(500).send({  message: "Error al guardar el documento. "});
                                      if(!projectStored) return res.status(404).send({  message: "No se ha podido guardar en la DB "});
                                                                       
             
                     return res.status(200).render('index' , { "titulo":projectStored });   
                                     // return res.status(200).send({ projectStored });
                                                                       
                                                                        }    
                                              );
                                  
                                
                                    }, 












    //REDERIZAR O LERR

    //Para sacara un solos proyecto con todas sus descripciones por medio del ID 
    getProject: function(req, res){ 
        
        //para capturar ese valor que no llega por la url 
        var projectId = req.params.id;

                            //Condicion por si no se envia ninguna id (osea parametro) por la url
                            if(projectId == null){ 
                                return res.status(404).send({  message: "el id esta vacio o nulo  "});
                                                 }

       //encontrar por id un solo proyecto
      Project.findById( projectId, (err, project) => {
                                    
                                   //esto es una condicional por si no se llega a mostrar
                                   //en la base de dato, o si hay algun error
                                   if(err) return res.status(500).send({  message: "No existe el proyecto. "});
                                   if(!project) return res.status(404).send({  message: "No se ha podidomostrar el proyecto "});
                                                                    
                                   return res.status(200).send({  project });
          
                                                      }
                       );
                                     }, 












//Para sacara TODOS los proyecto con todas sus descripciones 

                                     getProjects: function(req, res){ 
        
//Con  Project.find({}).exec() puedes inyectar consultas para hacer filtros de informacion ETC. Para mas informacion en la linea 140 
                                    Project.find({}).exec(( err, projects) => {

                                        if(err) return res.status(500).send({ message: 'Error al devolver todo los datos' });

                                        if(!projects) return res.status(404).send({ message: 'no hay proyectos que mostrar.' });
                                        
                                        return res.status(200).render('index' , { projects });
                                        
                                                                              }
                                                         );
                                
                                            
                                              
                                                                     },


//ACTUALIZAR  O UPDATE

  updateProyect: function(req, res){ 
                  //para capturar ese id que nos llega por la url 
  var projectId = req.params.id;

  

   
  //Aaqui vamos a recoger todo el Body de la peticion, el objeto completo con los datos ya actualizados de nuesto proyecto 
  var update =  req.body;

      Project.findByIdAndUpdate(projectId, update ,(err, projectUpdated) => { 
      
        if(err) return res.status(500).send({ message: 'Error al acualizar '});
        if(!projectUpdated) return res.status(404).send({ message: 'no existe el proyecto para actualizar '});

        return res.status(200).send( { projectUpdated });
           
                                                                              });

                                   },  











    //DELETE
    
    deleteProject: function(req, res){

        //para capturar ese id que nos llega por la url 
        var projectId = req.params.id;
    
        Project.findByIdAndRemove(projectId, (err, projectRemoved ) => { 
        
            if(err) return res.status(500).send({ message: 'Error al borra '});
            if(!projectRemoved) return res.status(404).send({ message: 'no existe el proyecto para borrar '});
    
            return res.status(200).send({ projectRemoved });
    
                                        
                                                                        }
                                 ); 
                                      }, 


  
     //UPDATE

     uploadImage: function (req, res){

        var projectId = req.params.id;

        var fileName = 'Imagen no subida... ';

        //Usaremos al connect-multiparty
         
        if(req.files){

        var filePath = req.files.image.path;
        var fileSplit = filePath.split('\\');
        var fileName = fileSplit[1];    

    Project.findByIdAndUpdate(projectId, {image: fileName},{new:true},(err, projectUpdated) => {

        if(err) return res.status(500).send({message:'La Imagen no se ha subido'});

        if(!projectUpdated) return res.status(500).send({message: 'El projecto no existe y no se ha y asignado la imagen'});
                                                                          
        return res.status(200).send({ files: projectUpdated});
    
                                                                                      }
                             );

    
        
                     }else{ 

                        return res.status( 200 ).send({ message:fileName });

                          }




                                     }                                                                



                  };//Fin del OBJETO JSON  de controller 

                    


//Aqui vamos a exportar el resultado de la logica que se haya generado de los metodos con module.exports
//Esto se va a exportar y se utilizara en el app... en la seccion de archivos de ruta 


module.exports = controller;








//por ejemplo: Project.find({year:2012}).exec()  ----: Sacara todas las consultas con el año 2012

// Project.find({}).sort('year').exec()  ---------:Ordenar por año

// Project.find({}).sort('-year').exec()  ---------:Ordenar por año de mayor a menor

// Project.find({}).sort('+year').exec()  ---------:Ordenar por año de menor a meyor

//ESTAS Y OTRAS CONSULTAS MAS AVANZADAS EN LA DOCUMENATCION O EL CURSO DE NODE.JS O EN EL CURSO DE COMO CREAR UNA RED SOCIAL CON DODE 