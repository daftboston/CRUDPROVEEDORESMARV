import jwt from 'jsonwebtoken';

//middleware para verificar token
export const verificarToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verificar que el token esté presente
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }
     
  console.log(authHeader);
  
    
    const token =authHeader.split(' ')[1]; 
    
    //verificar el token
    try {const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // {role: 'admin'}
    next(); 
  }catch (error) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }
}


//comprobar si el usuario es admin
export const verificarAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acceso denegado: se requieren privilegios de administrador' });
  }
  next();
}   