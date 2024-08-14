const express = require('express')
const router = express.Router()
const {createAccount,getAllAccount,deleteSingleAccount,getSingleAccount,updateAccount}=require("./Controllers/accountController")


router.post('/create', createAccount)
router.get('/getall', getAllAccount)
router.delete('/delete/:id',deleteSingleAccount)
router.get('/getone/:id',getSingleAccount)
router.patch('/updateaccount/:id',updateAccount)



module.exports = router