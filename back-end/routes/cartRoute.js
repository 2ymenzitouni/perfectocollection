import express from 'express'
import getActiveCartForUser from '../services/cartService.js'
import validateJWT from '../middlewares/validateJWT.js'
import { addItemToCart } from '../services/cartService.js'
import { updateCartInItem } from '../services/cartService.js'
import { deleteItemIncart } from '../services/cartService.js'
import { clearCart } from '../services/cartService.js'
const router = express.Router()

router.get('/',validateJWT,async (req,res)=>{
    const userId = req.user._id
    const cart = await getActiveCartForUser({userId:userId})
    res.status(200).send(cart)
})
router.post('/items',validateJWT,async(req,res)=>{
    const userId = req.user._id
    const {productId,quantity} = req.body
    const response = await addItemToCart({userId,productId,quantity})
    res.status(response.statusCode).send(response.message)
})

router.put('/items',validateJWT,async(req,res)=>{
    const userId = req.user._id
    const{productId,quantity} = req.body
    const response = await updateCartInItem({userId,productId,quantity})
    res.status(response.statusCode).send(response.message)
})

// delete product by id
router.delete('/items/:productId',validateJWT,async(req,res)=>{
    const userId = req.user._id
    const {productId} = req.params
    const response = await deleteItemIncart({productId,userId})
    res.status(response.statusCode).send(response.message)
})
// clear cart
router.delete("/",validateJWT,async(req,res)=>{
    const userId = req.user._id
    const response = await clearCart({userId})
    res.status(response.statusCode).send(response.message)
})
export default router

