const mongoose = require('mongoose');

const signUpModel =  mongoose.Schema({
first_Name:{
    type: 'string',
    required: [true,'Please enter your First Name ']

},
last_Name:{
    type: 'string',
    required: [true,'Please enter your last Name ']
},
user_Name:{
    type: 'string',
    required: [true,'Please enter your User Name '],

},
email:{
    type: 'string',
    required: [true,'Please enter your email '],
},
phone_number:{
    type: 'string',
    required: [true,'Please enter your phone number '],
},
password:{
    type: 'string',
    required: [true,'Please enter your password'],
},
confirm_password:{
    type: 'string',
    required: [true,'Please enter your confirm password'] 
}

});

module.exports = mongoose.model("SignUp",signUpModel);