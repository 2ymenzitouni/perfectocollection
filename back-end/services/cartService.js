import cartModel from "../models/cartModel.js";
import mongoose from "mongoose";
async function createCartForUser({userId}){
    const cart = cartModel.create({userId,totalAmount:0})
    await cart.save()
    return cart
}

export default async function getActiveCartForUser({userId}) {
    let cart = await cartModel.findOne({userId,status:'active'})
    console.log(cart)
    //if new user create cart
    if(!cart){
        return await createCartForUser({userId})
    }
    return cart;
}