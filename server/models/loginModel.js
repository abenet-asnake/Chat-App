const mongoose = require('mongoose');

const loginModel =  mongoose.Schema({

user_Name:{
    type: 'string',
    required: [true,'Please enter your user name '],

},

password:{
    type: 'string',
    required: [true,'Please enter your password'],
}


});
module.exports = mongoose.model("Login",loginModel);