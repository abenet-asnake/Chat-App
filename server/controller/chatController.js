const asyncHandler = require('express-async-handler');
// importing the model module
const loginModel = require('../models/loginModel');
const chatModel = require('../models/chatModel');

const chat= asyncHandler(async (req,res) => {
 const {chat_id, suser_Name,ruser_Name,message,date_time}=req.body;
 const suser= await loginModel.findOne({user_Name});
 const ruser= await loginModel.findOne({user_Name});
 if(suser && ruser){
    
 }

});