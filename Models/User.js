// const mongoose = require('mongoose')

// const UserSchema = mongoose.Schema({
//     firstName:{
//         type:String,
//         required:[true,'firstName is required']
//     },
//     lastName:{
//         type:string,
//         required:[true,'lastName is required']
//     },
//     Gender:{
//         type:string,
//         required:[true,'Gender is required']
//     },
//     dateOfBirthL:{
//         type:string,
//         required:[true,'dateOfBirth is required']
//     },
//     Email:{
//         type:string,
//         required:[true,'Email is required']
//     },
//     phoneNumber:{
//         type:string,
//         required:[true,'phoneNumber is required']
//     },
//     password:{
//         type:string,
//         required:[true,'password is required'],
//         minLength:[8,'password must not be less than 8 characters']
//     },
// },{
//     Timestamp:true
// })







// const User = mongoose.model('User', UserSchema)
// module.exports = User


const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    firstName: {
        type: string,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    gender: {
        type: string,
        required: [true, 'Gender is required']
    },
    dateOfBirth: {
        type: Date, 
        required: [true, 'Date of birth is required']
    },
    email: {
        type: string,
        required: [true, 'Email is required'],
        unique: true, 
        match: [/.+\@.+\..+/, 'Please enter a valid email address'] 
    },
    phoneNumber: {
        type: string,
        required: [true, 'Phone number is required']
    },
    password: {
        type: string,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must not be less than 8 characters']
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('User', UserSchema);
