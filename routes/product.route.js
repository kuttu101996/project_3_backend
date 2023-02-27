const express = require("express")
const {ProductModel} = require("../models/product.model")

const productRoute = express.Router();

productRoute.get("/all", async(req,res)=>{
    const data = await ProductModel.find()
    res.send(data);
})

productRoute.post("/addProduct", async(req,res)=>{
    try{
        const newProduct = new ProductModel(req.body)
        await newProduct.save();
        res.send({"msg":"Product added successfully","data":newProduct})
    }catch(err){
        console.log(err)
        res.send({"msg":err})
    }
})




module.exports = {
    productRoute
}