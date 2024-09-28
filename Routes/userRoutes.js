const express = require('express')
const {CreateUserController,UserLogin,searchAllUsers,searchOneUsers} = require('../Controllers/usercontroller')

const router = express.Router()

router.post('/create',Createusercontroller)
router.get('/login',UserLogin)
router.get("/search",searchAllUsers)
router.get("/searchOne",searchOneUsers)



module.exports = router