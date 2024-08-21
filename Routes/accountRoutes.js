// const express = require('express')
// const router = express.Router()
// const {createAccount,getAllAccount,deleteSingleAccount,getSingleAccount,updateAccount}=require("./Controllers/accountController")


// router.post('/create', createAccount)
// router.get('/getall', getAllAccount)
// router.delete('/delete/:id',deleteSingleAccount)
// router.get('/getone/:id',getSingleAccount)
// router.patch('/updateaccount/:id',updateAccount)



// module.exports = router



const express = require('express');
const router = express.Router();
const {
  createAccount,
  getAllAccounts,
  deleteAccount,
  getAccountById,
  updateAccountById
} = require('./Controllers/accountController');

// Create a new account
router.post('/create', createAccount);

// Get all accounts
router.get('/getall', getAllAccounts);

// Delete a single account by ID
router.delete('/delete/:id', deleteAccount);

// Get a single account by ID
router.get('/getone/:id', getAccountById);

// Update a single account by ID
router.patch('/update/:id', updateAccountById);




module.exports = router;
