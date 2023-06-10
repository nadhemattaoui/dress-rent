const Router=require('express').Router()
const robeController = require('../controllers/robeControllers')
//*const userController=require('../controllers/userController')
const {isAuth,isAdmin}=require('../middlewares/authMiddleware')

//pblic routes
Router.get('/get',robeController.get)
//private route
Router.post('/add',isAuth,isAdmin,robeController.add)

Router.post('/update',isAuth,isAdmin,robeController.update)

Router.post('/deleterb',isAuth,isAdmin,robeController.delete)


module.exports=Router