const mongoose=require('mongoose')
require('dotenv').config();
const connect=()=>{
    mongoose.connect(`mongodb://0.0.0.0:27017/nadhem`)
    .then(()=>console.log('database connected'))
    .catch(err=>console.log(err))
}
module.exports=connect