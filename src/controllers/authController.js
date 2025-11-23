

//Credenciales de administrador
import jwt from 'jsonwebtoken';

const ADMIN_USER = "admin";
const ADMIN_PASSWORD = "1234";  

export const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Faltan credenciales' });
  }

  if (username !== ADMIN_USER || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
  }

  const token = jwt.sign(
    { role: 'admin' },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({
    message: "Login exitoso 🎉",
    token
  });
};