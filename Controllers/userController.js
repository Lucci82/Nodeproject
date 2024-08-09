const userModel = require('../Models/User')


const createUser = async (req, res) => {
    console.log(req.body);
    
    const{first_Name,last_Name,Email,Gender,date_Of_Birth,phone_Number} =req.body;
    res.send('User created successfully')


    if(!first_Name ||!last_Name ||!Email ||!Gender ||!date_Of_Birth ||!phone_Number){
        res.status(400).json('fields cannot be empty')}


       const creetedUser= await userModel.create({
            first_Name:firstName,
            last_Name:lastName,
            Email:Email,
            Gender:Gender,
            date_Of_Birth:dateOfBirth,
            phone_Number:phoneNumber
        })

        if (creetedUser) {
            const{firstName,lastName,Email,Gender,dateOfBirth,phoneNumber}=creetedUser
            res.status(210).json(
                {first_Name,
                 last_Name,
                 Email,
                 Gender,
                 date_Of_Birth,
                 phone_Number}
            )
        }else{
            res.status(400).json("error creating User")
        }
    
        
}

module.exports ={createUser}











module.exports = {createUser}