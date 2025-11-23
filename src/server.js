import express from 'express';

import conectarDB from './config/db.js';
import dotenv from 'dotenv';
import router from './routes/routes.js';
import authRoutes from './routes/authRouthes.js';
import routes from './routes/routes.js';



const app = express();
dotenv.config()
// Conectar a la base de datos
conectarDB();

const port = process.env.PORT || 3000;

// Middleware para analizar cuerpos JSON
app.use(express.json());

// Ruta inicial de ejemplo
   
app.use("/api", authRoutes); //api/loggin y api/proyectos
app.use('/',routes )


// Inicializar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port} 🔥🔥🔥`);
});