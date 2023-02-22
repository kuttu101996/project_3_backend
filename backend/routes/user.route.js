const express = require("express")
const {UserModel} = require("../models/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userRoute = express.Router();

userRoute.post("/login", async(req,res)=>{
    try{
        const {email,pass} = req.body;
        const user = await UserModel.find({email})
        if (user.length>0){
            bcrypt.compare(pass, user[0].pass, function(err, result) {
                // result == true
                if (result){
                    const token = jwt.sign({userID: user[0]._id, name: user[0].name}, 'kuttu')
                    res.send({"msg":"Login Successful"})
                }
                else{
                    res.send(err.message)
                }
            });
            res.send({"msg":"User already exist with this Email-ID"})
        }
        else {
            res.send({"msg":"Please Signup"})
        }
    }
    catch(err){
        res.send(err.message)
    }
})

userRoute.post("/register", async(req,res)=>{
    try{
        const {email,pass,name,dob,mobile} = req.body;
        const userCheck = await UserModel.find({email})
        if (userCheck.length>0){
            res.send({"msg":"User already exist with this Email-id"})
        }
        else {
            bcrypt.hash(pass, 4, async function(err, hash){
                if (err){
                    res.send(err.message)
                }
                else {
                    const newUser = new UserModel({email,pass:hash,name,dob,mobile})
                    await newUser.save()
                    res.send("Registration Successful")
                }
            })
        }
    }catch(err){
        res.send(err.message)
    }
})




module.exports = {
    userRoute
}