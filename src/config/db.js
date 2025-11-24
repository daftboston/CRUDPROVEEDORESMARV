import mongoose from "mongoose";


// Función asincrona para conectar a la base de datos MongoDB
const conectarDB = async () => {
  try {
   await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
      
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
      process.exit(1); // Salir del proceso con un código de error
    }
    console.log("Conexión a la base de datos establecida!!!!!!");
  }

  export default conectarDB;