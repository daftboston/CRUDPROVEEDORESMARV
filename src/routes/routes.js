import { Router } from "express";
const router = Router();
import Proveedor from "../models/proveedor.js";
import { verificarToken, verificarAdmin } from "../middlewares/auth.js";
import { crearProveedor, obtenerProveedorPorId, actualizarProveedor, borrarProveedor, validarProveedor, listarProveedores } from "../controllers/proveedorControlador.js";

// Ruta inicial de ejemplo
router.get('/', (req, res) => {
  res.send('Hola, mundo! desde las rutas de crudMarval');
});

//Ruta para crear un nuevo proveedor
router.post('/proveedor',verificarToken, crearProveedor)

// Ruta para obtener un proveedor por ID
router.get('/proveedor/:id', verificarToken, obtenerProveedorPorId);

//Lista de proveedores (opcional)
router.get('/proveedor',verificarToken, listarProveedores);

// Ruta para actualizar un proveedor por ID
router.put('/proveedor/:id',verificarToken, actualizarProveedor);

//Ruta para borrar un proveedor por ID
router.delete('/proveedor/:id',verificarToken, borrarProveedor);

// Ruta para validar un proveedor, solo admin (aprobar o rechazar)
router.put('/proveedor/:id/validar',verificarToken, validarProveedor, verificarAdmin);




export default router;