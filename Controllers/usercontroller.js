const User = require('../Models/User')
const Bcrypt = require('bcrypt')


// register controller
const RegisterController = async(req,res)=>{
    const{firstName,lastName,Gender,dateOfBirth,Email,phoneNumber,password,confirmpassword}=req.body
    try {
        if(!firstName|| !lastName|| !Gender|| !dateOfBirth || !Email || !phoneNumber || !password || !confirmpassword){
            return res.status(400).json('all fields must be filled')
        }
        if(password.lenght <8){
            return res.status(400).json('password must be at least 8 characters')
        }
        if (password !== confirmpassword){
            return res.status(400).json('password and confrimpassword do not match')
        }
    } catch (error) {
        
    }
}
    // Login Controller
const LoginController = async(req,res)=>{
    const{Email, phoneNumber,password }=req.body
    try {
        if(!Email || phoneNumber, password){
            return res.status(400).json('fields cannot be empty')
        }
        // check if email does not exist
        const userExist = await User.findone({Email})
        if(!userExist){
            return res.status(400).json('user is not registered')

        }
        // check if password is correct
        const passwordCorrect = Bcrypt.compareSync(password,userExist)
        if(userExist && passwordCorrect){
            const{_id,firstName,lastName,Email,phoneNumber} = userExist
            const Token = generateToken(_id)
            

            res.status(200).json({
                _id,firstName,lastName,Email,phoneNumber,Token
            })
        }
    } catch (error) {
        res.status(400).json(error.message)
    }
}