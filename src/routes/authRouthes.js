import { Router } from "express";   
import { login } from "../controllers/authController.js"; 
import{ verificarToken } from "../middlewares/auth.js";

const router = Router();

// Ruta para login
router.post('/login', login);

// Endpoint simulado de API externa protegida de los proyectos
router.get('/proyectos', verificarToken, (req, res) => {
  const proyectos = [
    { id: 1, nombre: "Costanera", presupuesto: 5000000 , ubicacion: "Cartagena"},
    { id: 2, nombre: "Caribean", presupuesto: 12000000, ubicacion: "Barranquilla" },
    { id: 3, nombre: "Dalia", presupuesto: 3200000, ubicacion: "Santa Marta" }
  ]
  res.json({ message:'Proyectos obtenidos correctamente', proyectos});})

export default router;

