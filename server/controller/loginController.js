//importing the error handler bcrypt package or library package
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt= require('jsonwebtoken');
// importing the model module
const loginModel = require('../models/loginModel');

const login = asyncHandler(async (req, res) =>{
   // deconstruct the 
   const {email , password}=req.body;
   if(!email || !password){
    res.status(400);
    throw new Error('Fill the required');
   }
 const isUser=await loginModel.findOne({email});

if(isUser && (await bcrypt.compare(password, isUser.password))) {
    // user  Authentication is need when a user wants to login it gives json  web token
     accessToken= jwt.sign(
        {
        thisUser:{
            email:loginModel.email,
           
            id:loginModel.id,

        },
    } ,
    process.env.ACCESS_TOKE_SECRET_KEY,
    {expiresIn:"3m"}
    );
    res.json({accessToken});
   } 
   else{
    res.status(401);
    throw new Error("Invalid Email Address or Password");
   }

});

module.exports = login;