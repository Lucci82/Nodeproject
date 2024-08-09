const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"field cannot be empty"]
    },
    lastName:{
        type:String,
        required:[true,"field cannot be empty"]
    },
    Email:{
        type:String,
        required:[true,"fields cannot be empty"]
    },
    Gender:{
        type:String,
        required:[true,"field cannot be empty"]
    },
    dateOfBirth:{
        type:String,
        required:[true,"field cannot be empty"]
    },
    phoneNumber:{
        type:String,
        required:[true,"fields cannot be empty"]
    }
})






const userModel = mongoose.model("User",userSchema)

module.exports = userModel