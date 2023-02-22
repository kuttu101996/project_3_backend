const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    image: [String],
    name:{
        type:String,
        required:true
    },
    desc: String,
    price: Number,
    brand:{
        type:String,
        required:true
    },
    users: [String],
    addedAt:{
        type: Date,
        default: Date.now()
    },
    women: Boolean,
    men: Boolean,
    men_shoe: Boolean,
    women_shoe: Boolean
})

const ProductModel = mongoose.model("product", productSchema)



module.exports = {
    ProductModel
}