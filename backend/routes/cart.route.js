const express = require("express")


const cartRoute = express.Router();

// When i click on the add to cart button i will fetch this route and i will pass the productid and the userid from the 
// In this route i will catch all the data from database and 
cartRoute.get("/all", async(req,res)=>{
    try{
        // const data = await 
    }
    catch(err){
        res.send({"msg":err})
    }
})



module.exports = {
    cartRoute
}