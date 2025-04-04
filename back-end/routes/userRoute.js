import express from 'express'
import {register,login} from '../services/userServices.js'

const router = express.Router()

router.post('/register',async (request,response)=>{
    const {firstName , lastName , email , password} = request.body
    const {message , statusCode} = await register({firstName , lastName , email , password})
    response.status(statusCode).send(message)
})
router.post('/login',async (request,response)=>{
    const {email , password} = request.body
    const {message , statusCode} = await login({email , password})
    response.status(statusCode).send(message)
})
export default router;