import express from 'express';
import configExpress from './config/express';
import routes from './router';
import connectDB from './config/database';

//Levantamiento del express
const app = express();

//Configuracion
configExpress(app);
routes(app);

// Conexión con Mongo DB Atlas
connectDB();


//Puerto a ejecutar
const PORT = 3000;

//levantamiento del servidor
app.listen(PORT, () => {
  console.log(`Server running on port  ${PORT}`);
});
