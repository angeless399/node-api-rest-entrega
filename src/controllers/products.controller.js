import * as model from "../models/products.model.js"

//obtener productos
export const getAllProducts = async (req, res) => {
    res.json(await model.getAllProducts())
}

//buscar producto FALTA
export const searchProduct = (req, res) => {
    
}

//obtener un producto
export const getProductById = async (req, res) => {
    const product = await model.getProductById(req.params.id)
    if (!product) {
        return res.status(404).json({ error: "no existe el producto" })
    }
    res.json(product)
}

//agregar un nuevo producto
export const createProduct = async(req, res) => {
    // console.log(req.body)
    const { name, price, categories } = req.body
    const newProduct = await model.createProduct({ name, price, categories })
    res.status(201).json(newProduct)
}

//actualizar producto
export const updateProduct = async(req, res) => {
    const productId = req.params.id
    const { name, price, categories } = req.body
    const updateProduct = await model.updateProduct(productId, { name, price, categories })
    if(!updateProduct){
        return res.status(404).json({error : "producto no exite"})
    }
    res.json(updateProduct)

}

//eliminar producto
export const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    const product = await model.deleteProduct(productId)
   if(!product) {
    return res.status(404).json({mensaje : 'producto no existe'})
   }
   res.status(204).send() //devuelve status sin contenido (status 204 No Content)
}