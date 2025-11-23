// Estructura json de los proveedores
import mongoose from 'mongoose';

const proveedorModel= new mongoose.Schema({
  nit: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  cedula: { type: Number, required: true },
  proveedorTipo: { 
    type: String, 
    enum: ["Nacional", "Internacional"], 
    required: true 
  },
  personaTipo: { 
    type: String, 
    enum: ["Natural", "Legal"], 
    required: true 
  },
  beneficiarios: [
    {
      nombre: { type: String, required: true },
      cedula: { type: Number, required: true }
    }
  ],
  datosBancarios: {
    banco: { type: String, required: true },
    numeroCuenta: { type: String, required: true },
    cuentaTipo: { type: String, required: true } 
  },
  status: {
    type: String,
    enum: ["Pendiente de Validación", "Aprobado", "Rechazado"],
    default: "Pendiente de Validación"
  }
}, { timestamps: true });

const Proveedor = mongoose.model("Proveedor", proveedorModel);

export default Proveedor;

