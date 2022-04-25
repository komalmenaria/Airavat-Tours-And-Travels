const mongoose = require('mongoose')
const { Schema } = mongoose;

const ContactSchema = new Schema({
    username:{
        type : String,
        require : true
    },
    useremail:{
        type : String,
        require : true,
        unique : true
    },
    userphone:{
        type : String,
        require : true,
        unique : true
    },
    userquery:{
        type : String
    },
    date:{
        type:Date,
        default:Date.now
    }
  });

const Contact = mongoose.model('contact' ,ContactSchema)
  module.exports = Contact