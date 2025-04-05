import express from 'express'
import { getAllProducts } from '../services/productService.js'

const router = express.Router()

router.get('/',async (req,res)=>{
    res.status(200).send(await getAllProducts())
})
export default router