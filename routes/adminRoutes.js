const Router=require('express').Router()
const adminController=require('../controllers/adminController')
const {isAuth,isAdmin}=require('../middlewares/authMiddleware')


//pblic routes
Router.post('/login',adminController.login)
//private route
Router.get('/hotels',isAuth,adminController.me)
Router.post('/deleteuser',isAuth,isAdmin,adminController.delete)
module.exports=Router