import Proveedor from "../models/proveedor.js";


// CREAR UN NUEVO PROVEEDOR
export const crearProveedor = async (req, res) => {
  try {
    const nuevo = new Proveedor(req.body);
    await nuevo.save();
    res.status(201).json({ message: "Proveedor creado (pendiente de validación)", proveedor: nuevo });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//OBTERNER UN PROVEEDOR POR ID
export const obtenerProveedorPorId = async (req, res) => {  
    try {
    const supplier = await Proveedor.findById(req.params.id);
    if (!supplier) return res.status(404).json({ message: "Proveedor no encontrado" });
    res.json(supplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//ACTUALIZAR UN PROVEEDOR
export const actualizarProveedor = async (req, res) => {
  try {
    const updatedSupplier = await Proveedor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSupplier) return res.status(404).json({ message: "Proveedor no encontrado" });
    res.json({ message: "Proveedor actualizado", proveedor: updatedSupplier });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

//BORRAR UN PROVEEDOR
export const borrarProveedor = async (req, res) => {
  try {
    const eliminado = await Proveedor.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ message: "Proveedor no encontrado" });
    res.json({ message: "Proveedor eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//VALIDAR UN PROVEEDOR (solo admin)

export const validarProveedor = async (req, res) => {
  const { status } = req.body; // "Aprobado" o "Rechazado"

  if (!["Aprobado", "Rechazado"].includes(status)) {
    return res.status(400).json({ message: "Estado debe ser Aprobado o Rechazado" });
  }

  try {
    const proveedorValidacion = await Proveedor.findById(req.params.id);
    if (!Proveedor) return res.status(404).json({ message: "Proveedor no encontrado" });    

    proveedorValidacion.status = status;
    await proveedorValidacion.save();

    res.json({ message: `Proveedor ${status.toLowerCase()} correctamente`, proveedorValidacion });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// LISTAR TODOS LOS PROVEEDORES
export const listarProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.find();
    res.status(200).json(proveedores);
      } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
