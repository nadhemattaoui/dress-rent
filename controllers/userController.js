
const bcrypt=require ('bcrypt');
const jwt=require('jsonwebtoken');

require('dotenv').config()
const Person = require('../models/personSchema');
const userController={
register: async(req,res)=>{
const {name,email,password,role}=req.body;
if(!name||!email||!password){
    return res.status (400).json({msg:'please fill all fields'})
}
if (await Person.findOne({email})){
    return res.status(400).json({msg:'user already exists'})
}
const salt=await bcrypt.genSalt(10)
const hashedPassword=await bcrypt.hash(password,salt)
const person=await Person.create ({name,email,password:hashedPassword,role})
if (person){
    res.status(201).json({
        _id:person._id,
        name:person.name,
        email:person.email,
        role:person.role,
        token:genToken(person.id)
    })
}
},
login: async(req,res)=>{
const {email,password}=req.body;
if (!email || !password){
return res.status(400).json ({msg:'Fill all fields'})
}
const person= await Person.findOne({email})

    if (!person){
    return res.status(400).json ({msg:'user does not exist'})
}
const isMatch=await bcrypt.compare(password,person.password)
if (!isMatch){
return res.status (400).json({msg:'invalid password'})
}
res.status(200).json({
    _id:person._id,
    name:person.name,
    email:person.email,
    role:person.role,
    token:genToken(person.id)
})   },

me: (req,res)=>{
    res.status(200).json({
        _id:req.user._id,
        name:req.user.name,
        email:req.user.email,
        token:genToken(req.user.id)
    })    }}
const genToken=(id)=>{
    return  jwt.sign({id},process.env.TOKEN_SECRET,{expiresIn:'30d'})
}
module.exports=userController