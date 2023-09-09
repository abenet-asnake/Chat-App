//importing the error handler bcrypt package or library package
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
// importing the model module
const signUpModel = require('../models/signUpModel');


//@disc signUp 
//@routes POST /api/users/signup 
//@access public
const signUp = asyncHandler(async (req, res) =>{
// deconstruct 
const {first_Name, last_Name,user_Name, email, password,confirm_password,phone_number}=req.body;
if(!first_Name||!last_Name||!user_Name||!email||!password||!confirm_password||!phone_number){
    throw new Error('You must provide all fields in the form');
}
// if(password!==confirm_password){
//     res.status(404);
//     throw new Error('Please check your password are the same with the confirm password');

// }
const username = await signUpModel.findOne({user_Name});
if(username){
    res.status(400);
    throw new Error('Email already Exists');
}
else{
    const checkPAssword= await bcrypt.hash(confirm_password,13);
    const passwordHash = await bcrypt.hash(password,13);
    console.log("The Hash Password is: " + passwordHash);

    const createUser = await signUpModel.create({
        first_Name,
        last_Name,
        user_Name,
        email,
        phone_number,
        password: passwordHash,
        confirm_password:checkPAssword
    })
}

})

module.exports = signUp;