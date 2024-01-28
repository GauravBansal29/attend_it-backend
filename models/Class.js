const mongoose= require('mongoose');
const Response = require('./Response');

let Schema= mongoose.Schema;
const ClassSchema= new mongoose.Schema({
    name:{
        type:String, 
        required: true
    },
    responses:{
        ref: Response,
        type: [Schema.Types.ObjectId]
    }
},
{timestamps: true});

module.exports= mongoose.model("Class", ClassSchema);
