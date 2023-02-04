const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserScehema = new Schema({
    name:{
        type: String,
        required:true,
    }, 
    email:{
        type: String,
        required:true,
        unique: true,
    },
    password:{
        type: String,
        required:true,
    }  
});
const User = mongoose.model('user', UserScehema);
// User.createIndexes();
module.exports = User;