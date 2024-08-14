var express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()


app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("server home page")
})
    


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(6000,()=>{
        console.log('Server Now Listening To Port 6000');
        
    })
}).catch((error)=>{
    console.log(error);
    
})
