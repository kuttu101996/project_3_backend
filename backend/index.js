const express = require("express")
const cors = require("cors")
require("dotenv").config();
const {connection} = require("./db");
const {ProductModel} = require("./models/product.model")
const {userRoute} = require("./routes/user.route")
const {cartRoute} = require("./routes/cart.route")

const app = express();

app.use(cors());
app.use(express.json())

app.get("/", async(req,res)=>{
    try{
        const data = await ProductModel.find()
        res.send(data)
    }catch(err){
        res.send({"message":"Unable to get the data from Database"})
    }
})

app.get("/user", userRoute)

app.get("/cart", cartRoute)





app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log("Connected to DB")
    }catch(err){
        console.log(err)
    }
    console.log("Server at 11000")
})