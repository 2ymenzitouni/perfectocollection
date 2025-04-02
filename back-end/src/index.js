import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js"

const app = express()

app.use(express.json())

const port = 3000;

mongoose
.connect("mongodb://localhost:27017/Ecommerce")
.then(()=>{console.log("Mongo Connected")})
.catch((err)=>{console.log("sever failed to connect:",err)})


app.use('/user',userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
