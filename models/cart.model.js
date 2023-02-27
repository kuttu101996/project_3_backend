const mongoose = require("mongoose")
const {productSchema,ProductModel} = require("./product.model")

const cartSchema = mongoose.Schema({
    productSchema,
    userID:{type:String,required:true}
})

const CartModel = mongoose.model("cart", cartSchema)

module.exports = {
    CartModel
}