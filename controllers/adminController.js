
const bcrypt=require ('bcrypt');
const jwt=require('jsonwebtoken');
const Person = require('../models/personSchema');
require ('dotenv').config()
const adminController={

login: async(req,res)=>{
const {email,password}=req.body;
if (!email || !password){
return res.status(400).json ({msg:'Fill all fields'})
}
const admin= await Person.findOne({email})

    if (!admin){
    return res.status(400).json ({msg:'admin does not exist'})
}
const isMatch=await bcrypt.compare(password,admin.password)
if (!isMatch){
return res.status (400).json({msg:'invalid password'})
}
res.status(200).json({
    _id:admin._id,
    name:admin.name,
    email:admin.email,
    token:genToken(admin.id)
})   },
me: (req,res)=>{
    res.status(200).json({
        _id:req.user._id,
        name:req.user.name,
        email:req.user.email,
        token:genToken(req.user.id)
    })    },
update:async (req,res)=>{
await Person.updateOne({name:req.body.name},{name:req.body.newname})
res.send("user updated")
},
delete:async(req,res)=>{
    const testus=await Person.deleteOne({name:req.body.name})
    if (testus.deletedCount>0)
    res.send('user deleted')
    else
    res.send("erreur")
}
}
const genToken=(id)=>{
    return  jwt.sign({id},process.env.TOKEN_SECRET,{expiresIn:'30d'})
}
module.exports=adminController