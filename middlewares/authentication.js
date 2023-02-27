const jwt = require("jsonwebtoken")

const authentication = (req,res,next)=>{
    const token = req.headers.authorization
    if (token){
        jwt.verify(token,"kuttu",(err,decode)=>{
            if (decode){
                req.body.userID = decode.userID;
                req.body.name = decode.name
                next();
            }
            else res.send({"msg":err})
        })
    }
    else res.send({"msg":"Please Login"})
}


module.exports = {
    authentication
}