import productModel from "../models/productModel.js";


export async function getAllProducts() {
  return await productModel.find()
}

export async function seedInitialProducts() {
    const products = [
        {title:'Product1',image:'https://m.media-amazon.com/images/I/71bw+-RvJ9L.jpg',price:1500,stock:40},
    ];
    const exsitingProducts = await getAllProducts()

    if(exsitingProducts.length === 0){
        productModel.insertMany(products)
    }
}