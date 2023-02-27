const express = require("express")
const {CartModel} = require("../models/cart.model")

const cartRoute = express.Router();

// When i click on the add to cart button i will fetch this route and i will pass the productid and the userid from the 
// In this route i will catch all the data from database and 

cartRoute.get("/:id", async(req,res)=>{
    const id = req.params.id;
    try{
        const data = await CartModel.find({userID:id})
        console.log(data)
        res.send(data)
    }
    catch(err){
        res.send({"msg":err})
    }
})

cartRoute.post("./addtocart", async(req,res)=>{
    const data = req.body;
    try{
        const adding = new CartModel(data)
        await adding.save();
        req.send({"msg":"Added","data":data})
    }catch(err){
        req.send({"msg":err})
    }
})

module.exports = {
    cartRoute
}