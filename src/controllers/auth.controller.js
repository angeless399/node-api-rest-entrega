 import jwt from 'jsonwebtoken'

 const default_user = {
    id: 1,
    email: "user@gmail.com",
    password: "strongPass123",
 }

 export const login = (req, res) => {
    const { email, password } = req.body

    const user = { id: 1 }

    if(email == default_user.email && password == default_user.password){
        const payload =  { user }
        const expiration = { expiresIn: "1h" } // tiempo de expiracion del token
        const token = jwt.sign(payload, process.env.JWT_SECRET, expiration) //firma digital con la clave secreta
        return res.json({token: token})
    }else {
        return res.sendStatus(401) // sin autorización
    }
    res.json({message: "ok"})
}