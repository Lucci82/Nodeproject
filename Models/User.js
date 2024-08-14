const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true,'firstName is required']
    },
    lastName:{
        type:string,
        required:[true,'lastName is required']
    },
    Gender:{
        type:string,
        required:[true,'Gender is required']
    },
    dateOfBirthL:{
        type:string,
        required:[true,'dateOfBirth is required']
    },
    Email:{
        type:string,
        required:[true,'Email is required']
    },
    phoneNumber:{
        type:string,
        required:[true,'phoneNumber is required']
    },
    password:{
        type:string,
        required:[true,'password is required'],
        minLength:[8,'password must not be less than 8 characters']
    },
},{
    Timestamp:true
})







const User = mongoose.model('User', UserSchema)
module.exports = User