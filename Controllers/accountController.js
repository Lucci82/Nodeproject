// const AccountModel = require('../Models/accounts')




// const createAccount = async(req,res)=>{
//     const{Email,phoneNumber,password}=req.body

//     if(!Email || !phoneNumber || !password){
//         res.status(400).json('fields cannot be empty')
//     }

//     const createdAccount = await AccountModel.create({
//         Email:Email,
//         phoneNumber:phoneNumber,
//         password:password
//     })

//     if(createdAccount){
//         const{Email,phoneNumber,password}=createdAccount
//         res.status(200).json({
//             Email,
//             phoneNumber,
//             password
//         })
//     }else{
//         res.status(400).json('error while creating account')
//     }
// }
// //  get All Accounts
//     const getAllAccount = async(req,res)=>{
//         try {
//             const Accounts = await AccountModel.find({})

//             res.status(200).json(Accounts)
//         } catch (error) {
//             res.status(500).json(error.message)
//         }
//     }
// //  delete single Account

//     const deleteSingleAccount = async(req,res)=>{
//         const{id}=req.params
//         try {
//             const deleteSingleAccount = await AccountModel.findByIdAndDelete(id)
//             res.status(200).json('Account Deleted Successfully')
//         } catch (error) {
//             res.status(500).json(error.message)
//         }
//     }
//     // get single Account
//     const getSingleAccount = async(req,res)=>{
//         const {id}=req.params
//         try {
//             const getSingleAccount = await AccountModel.findById(id)
//             res.status(200).json('Account fetched successfully')
//         } catch (error) {
//             res.status(500).json(error.message)
//         }
//     }
//     // update Account Details
//     const updateAccount = async(req,res)=>{
//         const{id} = req.params
//         try {
//             const updateAccount = await AccountModel.findByIdAndUpdate(
//                 {_id:id},
//                 req.body,
//                 {
//                     runValidators:true,
//                     new:true
//                 }
//             )
//             res.status(200).json(updateAccount)
//         } catch (error) {
//             res.status(500).json(error.message)
//         }
//     }






//     module.exports= {createAccount,getAllAccount,deleteSingleAccount,getSingleAccount,updateAccount}


const AccountModel = require('../Models/accounts');

// Create a new account
const createAccount = async (req, res) => {
    const { Email, phoneNumber, password } = req.body;

    if (!Email || !phoneNumber || !password) {
        return res.status(400).json({ message: 'Fields cannot be empty' });
    }

    try {
        const createdAccount = await AccountModel.create({
            Email,
            phoneNumber,
            password // Ensure this is hashed before saving to database
        });

        return res.status(201).json({
            Email: createdAccount.Email,
            phoneNumber: createdAccount.phoneNumber
            // Exclude password from response for security reasons
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error while creating account', error: error.message });
    }
};

// Get all accounts
const getAllAccount = async (req, res) => {
    try {
        const accounts = await AccountModel.find({});
        return res.status(200).json(accounts);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching accounts', error: error.message });
    }
};

// Delete a single account by ID
const deleteSingleAccount = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAccount = await AccountModel.findByIdAndDelete(id);
        if (deletedAccount) {
            return res.status(200).json({ message: 'Account deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error deleting account', error: error.message });
    }
};

// Get a single account by ID
const getSingleAccount = async (req, res) => {
    const { id } = req.params;
    try {
        const account = await AccountModel.findById(id);
        if (account) {
            return res.status(200).json(account);
        } else {
            return res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching account', error: error.message });
    }
};

// Update account details
const updateAccount = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedAccount = await AccountModel.findByIdAndUpdate(
            id,
            req.body,
            {
                runValidators: true,
                new: true
            }
        );
        if (updatedAccount) {
            return res.status(200).json(updatedAccount);
        } else {
            return res.status(404).json({ message: 'Account not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error updating account', error: error.message });
    }
};

module.exports = { createAccount, getAllAccount, deleteSingleAccount, getSingleAccount, updateAccount };
