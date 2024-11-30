import http from 'node:http';
import express from 'express';
import connectDB from './config/database';
import configExpress from './config/express';
import routes from './router';
import { setupSocketIO } from './sockets';

//Levantamiento del express
const app = express();
const server = http.createServer(app);

//Configuracion
configExpress(app);
routes(app);

// Conexión con Mongo DB Atlas
connectDB();

// Configuración de Sockets
setupSocketIO(server);

//Puerto a ejecutar
const PORT = 3000;

//levantamiento del servidor
server.listen(PORT, () => {
  console.log(`Server running on port  ${PORT}`);
});
