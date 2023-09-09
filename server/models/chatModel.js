const mongoose = require('mongoose');

const chatModel =  mongoose.Schema({
chat_id:{
    type: 'string',
    required: [true,'chat_id'], 

},
suser_name:{
    type: 'string',
    required: [true,'Please enter your First Name ']
},
ruser_Name:{
    type: 'string',
    required: [true,'Please enter your First Name '],

},
message:{
    type: 'string',
    required: [true,'Please enter your First Name '],
},
date_time:{
    type: 'date',
    required: [true,'Please enter your First Name '],
}

});
module.exports = mongoose.model("Chat",chatModel);