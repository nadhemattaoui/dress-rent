const jwt=require ('jsonwebtoken')
const Person = require('../models/personSchema')
const isAuth=(req,res,next)=>{
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer')){
        return res.status(401).json({msg:'no token, unauthorized'})
    }
    else{
        const token=req.headers.authorization.split(" ")[1]
        jwt.verify(token,process.env.TOKEN_SECRET,async(err,decoded)=>{
            if (err){
    return res.status (401).json({msg:'unauthorized'})
            }
            else {
                console.log(decoded)
                const user=await Person.findById(decoded.id)
                req.user=user
                next() }
        })
}}
//admin middleware
const isAdmin=(req,res,next)=>{
    console.log(req.user)
    if(req.user.role!=="admin"){
    return res.status (401).json({msg:'not admin,unauthoized'})  
    }
    next()
}
module.exports={isAuth,isAdmin};