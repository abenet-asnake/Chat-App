const mongoose = require('mongoose');

const signUpModel =  mongoose.Schema({
first_Name:{
    type: String,
    required: [true,'Please enter your First Name ']

},
last_Name:{
    type: String,
    required: [true,'Please enter your last Name ']
},
user_Name:{
    type: String,
    required: [true,'Please enter your User Name '],

},
email:{
    type: String,
    required: [true,'Please enter your email '],
},
phone_number:{
    type: String,
    required: [true,'Please enter your phone number '],
},
password:{
    type: String,
    required: [true,'Please enter your password'],
},
confirm_password:{
    type: String,
    required: [true,'Please enter your confirm password'] 
},
picture:{
    type: String,
    required: [true,'Please insert your picture'] ,
    default: 'https://cdn.pixabay.com/photo/2016/03/31/17/33/avatar-1293744_1280.png',
}

},
{ 
    timestamps: true ,
},
);

module.exports = mongoose.model("SignUp",signUpModel);