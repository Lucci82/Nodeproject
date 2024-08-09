const mongoose = require ('mongoose')

const userSchema = mongoose.Schema({
    first_Name:{
        type:String,
        required:[true,"field cannot be empty"]
    },
    last_Name:{
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
    date_Of_Birth:{
        type:String,
        required:[true,"field cannot be empty"]
    },
    phone_Number:{
        type:String,
        required:[true,"fields cannot be empty"]
    }
})






const userModel = mongoose.model("User",userSchema)

module.exports = userModel