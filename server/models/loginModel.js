const mongoose = require('mongoose');

const loginModel =  mongoose.Schema({

email:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'SignUp',

},

password:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'SignUp',
}
},
{ 
    timestamps: true ,
},
);
module.exports = mongoose.model("Login",loginModel);