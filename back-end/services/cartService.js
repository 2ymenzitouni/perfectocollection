import cartModel from "../models/cartModel";

async function createCartForUser({userId}){
    const cart = cartModel.create({userId})
    await cart.save()
    return cart
}

export async function getActiveCartForUser({userId}) {
    let cart = cartModel.findOne({userId,status:'active'})
    //if new user create cart
    if(!cart){
        return await createCartForUser({userId})
    }
    return cart;
}