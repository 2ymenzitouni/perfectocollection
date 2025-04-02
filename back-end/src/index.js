import express from 'express'
import mongoose from 'mongoose'
import {register} from '../services/userServices.js'
import userRoute from '../routes/userRoute.js'

const app = express()
const port = 3000

app.use(express.json())

mongoose
.connect("mongodb://localhost:27017/Ecommerce")
.then(()=>{console.log("MongoDb Connected")})
.catch((err)=>{console.log("Connection Failted",err)})

app.use('/user',userRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
