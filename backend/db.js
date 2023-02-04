
const mongoose = require('mongoose');
// ?readPreference=primary&appname=MongoDB&20Compass&directConnection=true&ssl=false
const mogooseURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";



const connectToMango = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(mogooseURI , (err)=>{
        if(err) {

            console.log(err);
        }else{
             console.log('connected to mongoose successfully 123');
        }

    })
}
module.exports = connectToMango;