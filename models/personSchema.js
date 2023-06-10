const mongoose=require('mongoose')

const personSchema=mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},

role:{type:String,default:'user'}},
{timestamps:true})

const Person=mongoose.model('persons',personSchema)
module.exports=Person