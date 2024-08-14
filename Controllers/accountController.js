const AccountModel = require('../Models/accounts')




const createAccount = async(req,res)=>{
    const{Email,phoneNumber,password}=req.body

    if(!Email || !phoneNumber || !password){
        res.status(400).json('fields cannot be empty')
    }

    const createdAccount = await AccountModel.create({
        Email:Email,
        phoneNumber:phoneNumber,
        password:password
    })

    if(createdAccount){
        const{Email,phoneNumber,password}=createdAccount
        res.status(200).json({
            Email,
            phoneNumber,
            password
        })
    }else{
        res.status(400).json('error while creating account')
    }
}
//  get All Accounts
    const getAllAccount = async(req,res)=>{
        try {
            const Accounts = await AccountModel.find({})

            res.status(200).json(Accounts)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
//  delete single Account

    const deleteSingleAccount = async(req,res)=>{
        const{id}=req.params
        try {
            const deleteSingleAccount = await AccountModel.findByIdAndDelete(id)
            res.status(200).json('Account Deleted Successfully')
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    // get single Account
    const getSingleAccount = async(req,res)=>{
        const {id}=req.params
        try {
            const getSingleAccount = await AccountModel.findById(id)
            res.status(200).json('Account fetched successfully')
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    // update Account Details
    const updateAccount = async(req,res)=>{
        const{id} = req.params
        try {
            const updateAccount = await AccountModel.findByIdAndUpdate(
                {_id:id},
                req.body,
                {
                    runValidators:true,
                    new:true
                }
            )
            res.status(200).json(updateAccount)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }






    module.exports= {createAccount,getAllAccount,deleteSingleAccount,getSingleAccount,updateAccount}