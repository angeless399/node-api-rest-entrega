import jwt from 'jsonwebtoken';
  import 'dotenv/config';
  const secret_key = process.env.JWT_SECRET_KEY;

  // Middleware para verificar el token JWT
  export const auth = (req, res, next) => {

    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) return res.sendStatus(403); //forbiddend token no valido
        next();
    });
  }