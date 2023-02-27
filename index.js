const express = require("express")
const cors = require("cors")
require("dotenv").config();
const {connection} = require("./db");
const {ProductModel} = require("./models/product.model")
const {userRoute} = require("./routes/user.route")
const {cartRoute} = require("./routes/cart.route")
const {authentication} = require("./middlewares/authentication")
const {productRoute} = require("./routes/product.route")
const {adminRouter} = require("./routes/admin.route")

const app = express();

app.use(cors());
app.use(express.json())

app.get("/", async(req,res)=>{
    res.send({"msg":"HELLO"})
})

app.post("/search", async(req,res)=>{
    try{
        const payload = req.body.payload.trim();
        const data = await ProductModel.find({name: {$regex: new RegExp('^'+payload+'.*','i')}}).exec();
        console.log(data)
        res.send({"msg":"Hi There","data":data})
    }catch(err){
        res.send(err)
    }
})

app.use("/user", userRoute)
app.use("/product", productRoute)
app.use("/admin", adminRouter)


app.use(authentication)
app.use("./cart",cartRoute)



app.listen(process.env.port, async()=>{
    try{
        await connection;
        console.log("Connected to DB")
    }catch(err){
        console.log(err)
    }
    console.log("Server at 4000")
})