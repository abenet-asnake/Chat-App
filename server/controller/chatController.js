const asyncHandler = require('express-async-handler');
// importing the model module
const loginModel = require('../models/loginModel');
const chatModel = require('../models/chatModel');
const chats = require('../Data_Test/chatTest');

//@disc Chat 
//@routes POST /api/chat/
//@access public
const chat= asyncHandler (async (req,res) => {
 const {chat_id, suser_Name,ruser_Name,message,date_time}=req.body;
 const suser= await loginModel.findOne({user_Name});
 const ruser= await loginModel.findOne({user_Name});
 if(suser && ruser){
    const chatCreated = await chatModel.create({
        chat_id, 
        suser_Name,
        ruser_Name,
        message,
        date_time 
    });
 }

});

//@disc Chat 
//@routes GET /api/chat/:id
//@access public
const getChat= asyncHandler (async (req,res) => {
    // const singleChat=chats.find((chat) => chat._id === req.params.id);
    // res.send(singleChat);
    res.send(chats);

 });
   
module.exports = {chat,getChat};