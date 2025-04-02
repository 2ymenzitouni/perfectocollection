import userModel from "../models/userModel";

export async function register( {firstName,lastName,email,password}){
    const findUser = await userModel.findOne({email})
    if(findUser){
        return {message : "User already exists!" , stausCode : 400}
    }
    const newUser = new userModel({firstName,lastName,email,password})
    await newUser.save()

    return {message:newUser,statusCode:200};
}

export async function login({email,password}){
    const findUser = await userModel.findOne({email})
    if(!findUser){
        return { message : "Incorrect email or password!", statusCode:400}
    }
    const passwordMatch = password === findUser.password
    if (passwordMatch){
        return findUser
    }
    return {message : "Incorrect email or password!",statusCode:400}
}