var express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const userRoute = require('./Routes/userRoutes')



app.get('/',(req,res)=>{
    res.send('SERVER HOME PAGE')
})
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(8000,()=>{
        console.log('Server Now Listening To Port 8000');
})    
}).catch((error)=>{
    console.log(error);
})



