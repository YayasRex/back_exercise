/********IMPORTS********/
import express from 'express';
import { dataSource } from './db/conection';
import { usersRouter } from './routes';
/**********************/
const PORT = Number(process.env.PORT) || 8080;


/* La funcion main no es obligatoria */

const main = async () => {
  //Asignamos a nuestra aplicacion toda la funcionalidad retornada de express
  const app = express();

  //Para que acepte el body del request en formato json
  app.use(express.json());
  /*Para poder dar uso a nuestras rutas es de ingresarlas como parámetro de 
  app.use, también se puede nombrar, colocando un string como primer argumento*/
  app.use('/users', usersRouter);
  // app.use('/documents',  );


  //Aquí colocaremos nuestra conexion para iniciarlo
  dataSource.initialize()
    .then(() => {
      console.log('Initialized');
    })
    .catch((error) => {
      console.log('Error during data source initializing', error);
    });


  //Al final siempre se debe añadir el app.listen
  /*Agregaremos dos cosas como parámetros, el PORT correspondiente que va a estar 
  escuchando nuestro servidor y como segundo, un callback sencillo que nos avise si el servidor está corriendo*/

  app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
  })
};

main();
