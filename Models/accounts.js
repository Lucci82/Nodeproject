const mongoose = require('mongoose')


const accountSchema = mongoose.Schema({
    Email:{
        type:String,
        required:[true,'field cannot be empty']
    },
    phoneNumber:{
        type:String,
        required:[true,"field cannot be empty"]
    },
    password:{
        type:String,
        required:[true,'field cannot be empty'],
        minLenght:[8, 'password must be at least 8 characters']
    },
},{
    Timestamp:true
})


const Account = mongoose.model('account', accountSchema)
module.exports= Account