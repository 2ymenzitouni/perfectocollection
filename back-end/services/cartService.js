import cartModel from "../models/cartModel.js";
import mongoose from "mongoose";
import productModel from "../models/productModel.js";
async function createCartForUser({userId}){
    const cart = cartModel.create({userId,totalAmount:0})
    // await cart.save()
    return cart
}

export default async function getActiveCartForUser({userId}) {
    let cart = await cartModel.findOne({userId,status:'active'})
    //if it's new user create a cart
    if(!cart){
        return await createCartForUser({userId})
    }
    return cart;
}

export async function addItemToCart({userId,productId,quantity}) {
    const cart = await getActiveCartForUser({userId})
    // Does the item exist in the cart?
    const existsInCart = cart.items.find((p)=>p.product.toString() === productId)
    if(existsInCart){
        return {message:"item already exists in cart",statusCode : 400}
    }
    // Fetch the product
    const product = await productModel.findById(productId)
    if(!product){
        return {message:"product not found!",statusCode:400}
    }

    if (product.Stock < quantity){
        return {message:"this item is out of stock",statusCode:400}
    }
    // update the totalamount for the cart
    cart.items.push({product:productId, unitPrice:product.price,quantity })
    cart.totalAmount += product.price * quantity

    const updateCart = await cart.save()
    return {message:updateCart,statusCode:200}
}
