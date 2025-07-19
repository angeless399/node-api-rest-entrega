import { db } from "./data.js"

import { collection, getDocs, doc, getDoc, addDoc, deleteDoc, setDoc } from "firebase/firestore"

const productsCollection = collection(db, "products")


export const getAllProducts = async () => {
    try {
        const snapsshot = await getDocs(productsCollection)
        return snapsshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) //contruye un array con todos los documentos
    } catch (error) {
        console.error(error)
    }
}

export const getProductById = async (id) => {
    try {
        const productRef = doc(productsCollection, id)
        const snapsshot = await getDoc(productRef)
        return snapsshot.exists() ? { id: snapsshot.id, ...snapsshot.data() } : mull
    } catch (error) {
        console.error(error)
    }
}

//buscar producto FALTA
export const searchProduct = (nombre) => {
   
}

export const createProduct = async (data) => {
    try {
        const docRef = await addDoc(productsCollection, data)
        return {id: docRef.id, ...data }
    } catch (error) {
        console.error(error)
    }
}

export const deleteProduct = async (id) => {
    try {
        const productRef = doc(productsCollection, id)
        const snapsshot = await getDoc(productRef)

        if(!snapsshot.exists()){
            return false
        } 
        await deleteDoc(productRef)
        return true
    } catch (error) {
        console.error(error)
    }
}

export const updateProduct = async (id, productData) => {
    try {
        const productRef = doc(productsCollection, id)
        const snapsshot = await getDoc(productRef)
        
        if(!snapsshot.exists()){
            return false
        }

        await setDoc(productRef, productData)//reemplazo completo PUT
        return {id, ...productData}

    } catch (error) {
        console.error(error)
    }
}