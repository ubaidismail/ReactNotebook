const mongoose = require('mongoose');


const NotesScehema = new Schema({
    title:{
        type: String,
        required:true,
    }, 
    description:{
        type: String,
        required:true,
    },
    tag:{
        type: String,
        default: 'general',
    }  
});
module.exports = mongoose.model('notes', NotesScehema);