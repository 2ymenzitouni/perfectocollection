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

    if (product.stock < quantity){
        return {message:"this item is out of stock",statusCode:400}
    }
    // update the totalamount for the cart
    cart.items.push({product:productId, unitPrice:product.price,quantity })
    cart.totalAmount += product.price * quantity

    const updateCart = await cart.save()
    return {message:updateCart,statusCode:200}
}

export async function updateCartInItem({productId,quantity,userId}) {
    const cart = await getActiveCartForUser({userId})
    const existsInCart = cart.items.find((p)=>p.product.toString() === productId)
    if(!existsInCart){
        return {message:"item does not exist in cart",statusCode:400}
    }

    const product = await productModel.findById(productId)

    if(!product){
        return {message:"product not found!",statusCode:400}
    }

    if (product.stock < quantity){
        return {message:"this item is out of stock",statusCode:400}
    }
    // const existsInCart = cart.items.find((p)=>p.product.toString() === productId)
    // existsInCart.quantity = quantity

    const otherCartItems = cart.items.filter((p)=> p.product.toString() !== productId)
    // calculate total amount for cart
    let total = otherCartItems.reduce((sum,product)=>{
        sum += product.quantity * product.unitPrice
        return sum
    },0)

    existsInCart.quantity = quantity
    total += existsInCart.quantity  * existsInCart.unitPrice
    cart.totalAmount = total
    
    const updatedCart = await cart.save()
    return {message:updatedCart , statusCode:200}
}
export async function deleteItemIncart({productId,userId}){
    const cart = await getActiveCartForUser({userId:userId})
    const existsInCart = cart.items.find((p)=>p.product.toString() === productId)
    if(!existsInCart){
        return {message:"item does not exist in cart",statusCode:400}
    }
    const otherCartItems = cart.items.filter((p)=> p.product.toString() !== productId)
    const total = otherCartItems.reduce((sum,product)=>{
        sum += product.quantity * product.unitPrice
        return sum
    },0)
    cart.items = otherCartItems
    cart.totalAmount = total
    const updatedCart = await cart.save()
    return {message:updatedCart , statusCode:200}
}

export async function clearCart ({userId}) {
    const cart = await getActiveCartForUser({userId})
    cart.items = []
    cart.totalAmount = 0
    const updatedCart = await cart.save()
    return {message:updatedCart , statusCode:200}
}