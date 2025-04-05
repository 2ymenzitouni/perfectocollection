import express from 'express'
import { getActiveCartForUser } from '../services/cartService.js'

const router = express.Router()

router.get('/',async (req,res)=>{
    // get Active Cart
    const cart = await getActiveCartForUser({userId:'XaymenX'})
    res.status(200).send(cart)
})
export default router