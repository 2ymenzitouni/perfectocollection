import express from 'express'
import getActiveCartForUser from '../services/cartService.js'
import validateJWT from '../middlewares/validateJWT.js'
import { addItemToCart } from '../services/cartService.js'
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
export default router

