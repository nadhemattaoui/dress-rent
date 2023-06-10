const mongoose=require('mongoose')

const robeSchema=mongoose.Schema({

    name:{type:String,require:true},
    description:{type:String,require:true},
    rate:{type:Number,require:true},
    price:{type:Number,require:true},
    image:{type:String,require:true},

},
{timestamps:true})

const Robes=mongoose.model('robes',robeSchema)
module.exports=Robes