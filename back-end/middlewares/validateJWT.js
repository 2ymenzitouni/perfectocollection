import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

function validateJWT (req,res,next){
    // 403 unauthorized
    const authorizationHeader = req.get('authorization')
    if(!authorizationHeader){
        res.status(403).send("Authorization header was not provided")
        return
    }
    const token = authorizationHeader.split(" ")[1]
    if(!token){
        res.status(403).send("bearer not found")
        return
    }
    jwt.verify(token,'c7ce91e7d5ed7aac9f7e4b3a0954f6e0fe3634c78905bc58c0', async(err,payload)=>{
        if(err){
            res.status(403).send("invalid token")
            return
        }
        if(!payload){
            res.status(403).send("invalid token payload")
            return;
        }
        // Fetch user from database
        const user = await userModel.findOne({email:payload.email})
        req.user = user
        next()
    })
}
export default validateJWT;