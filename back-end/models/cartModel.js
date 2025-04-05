import mongoose , {Schema,Document, Types} from "mongoose";
const CartStatusEnum = ['active','completed']

const cartItemSchema = new Schema({
    product:{type:Schema.Types.ObjectId,ref:'Product',required:true},
    quantity:{type:Number , required:true , default:1},
    unitPrice :{type:Number,required:true}
})

const cartSchema = new Schema({
    userId :{type:Schema.Types.ObjectId , ref:'User' , required:true},
    items : [cartItemSchema],
    totalAmount:{type:Number,required:true},
    status:{type:String , enum:CartStatusEnum,default:'active'}
})
const cartModel = mongoose.model('Cart',cartSchema)

export default cartModel
