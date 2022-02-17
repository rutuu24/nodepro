const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const schema = new Schema(
    {
       title: {type:String},
        malecontents : {type:String},
        femalecontents : {type:String}
        }
    
);
const Words = mongoose.model("Words",schema);
module.exports =Words;