const express = require("express")
const {UserModel} = require("../models/user.model")
const {ProductModel} = require("../models/product.model")
const {CartModel} = require("../models/cart.model")

const adminRouter = express.Router();

adminRouter.get("/alluser", async(req,res)=>{
    try{
        const allUser = await UserModel.find()
        res.send(allUser)
    }
    catch(err){
        res.send({"msg":err})
    }
})

adminRouter.get("/allproduct", async(req,res)=>{
    try{
        const allProduct = await ProductModel.find()
        res.send(allProduct)
    }
    catch(err){
        res.send({"msg":err})
    }
})

adminRouter.get("/allcart", async(req,res)=>{
    try{
        const data = await CartModel.find()
        res.send(data)
    }
    catch(err){
        res.send({"msg":err})
    }
})

adminRouter.post("/addproduct", async(req,res)=>{
    try{
        const adding = new ProductModel(req.body)
        await adding.save()
        res.send({"msg":"Product Added","detail":adding})
    }
    catch(err){
        res.send({"msg":err})
    }
})

adminRouter.post("/addmanyPro", async(req,res)=>{
    try{
        await ProductModel.insertMany(req.body)
        res.send({"msg":"Success"})
    }catch(err){
        res.send({"msg":err})
    }
})

adminRouter.delete("/deleteproduct/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        await ProductModel.findByIdAndDelete({_id:id})
        res.send({"msg":"Product Deleted"})
    }catch(err){
        res.send({"msg":err})
    }
})

adminRouter.delete("/deleteuser/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        await ProductModel.findByIdAndDelete({_id:id})
        res.send({"msg":"Product Deleted"})
    }catch(err){
        res.send({"msg":err})
    }
})

adminRouter.patch("/updateproduct/:id", async(req,res)=>{
    try{
        const id = req.params.id;
        await ProductModel.findByIdAndDelete({_id:id})
        res.send({"msg":"Product Deleted"})
    }catch(err){
        res.send({"msg":err})
    }
})

module.exports = {
    adminRouter
}