import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export async function register ({firstName,lastName,email,password}){
    const findUser = await userModel.findOne({email})
    if (findUser){
        return {message : "Email already exists!",statusCode : 400}
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new userModel({firstName , lastName , email ,password: hashedPassword})
    await newUser.save()

    return {message:jwtgenerator({firstName,lastName,email,password}),statusCode:200}
}
export async function login({email,password}){
    const findUser = await userModel.findOne({email})
    if (!findUser){
        return {message : "Incorrect email or password!",statusCode:400}
    }
    const passwordMatch = await bcrypt.compare(password,findUser.password)
    if(passwordMatch){
        return {message : `Successfully logged in! ${jwtgenerator({email,password})}`,statusCode:200};
    }
    return {message:"Incorrect email or password!",statusCode:400}
}
function jwtgenerator (data){
    return jwt.sign(data,'c7ce91e7d5ed7aac9f7e4b3a0954f6e0fe3634c78905bc58c0')
}