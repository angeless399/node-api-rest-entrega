import 'dotenv/config';

import express from 'express'
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
res.send('<h1> API Rest en Node.js</h1>')
})

import productsRoutes from './src/routes/products.routes.js'
app.use("/api", productsRoutes) //agrega el prefijo "/api" antes de la ruta. Ahora es localhost:3000/api/products

import authRoutes from './src/routes/auth.routes.js'
app.use(authRoutes)

/* si la ruta no es valida, manejo el error*/
app.use((req, res, next) => { // el next en este caso no es necesario, porque no se usa
    res.status(404).json({error: "Not Found"})
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))