const Robes =require ('../models/robesSchema')
const robeController={
get:async (req,res)=>{
const robes=await Robes.find()
res.send(robes)

},
add:async (req,res)=>{ 
const{name,description,rate,price,image}=req.body
const robe=await Robes.create({name,description,rate,price,image})
res.status(200).json({status:'success',body:robe})
},



update:async (req,res)=>{
    await Robes.updateOne({name:req.body.name},{name:req.body.newname})
    res.send("robe updated")
    },



    
delete:async(req,res)=>{
        const test=await Robes.deleteOne({name:req.body.name})
        if (test.deletedCount>0)
        res.send('robe deleted')
        else
        res.send("erreur")
    }

}
module.exports=robeController