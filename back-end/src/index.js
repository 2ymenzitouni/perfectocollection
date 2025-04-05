import express from 'express'
import mongoose from 'mongoose'
import { seedInitialProducts } from '../services/productService.js'
import productRoute from '../routes/productsRoute.js'
import userRoute from '../routes/userRoute.js'
const app = express()
const port = 3000

app.use(express.json())

mongoose
.connect("mongodb://localhost:27017/Ecommerce")
.then(()=>{console.log("MongoDb Connected")})
.catch((err)=>{console.log("Connection Failted",err)})

// seedInitialProducts
seedInitialProducts()

app.use('/products',productRoute)
app.use('/user',userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
