const mongoose = require('mongoose')
const { Schema } = mongoose;

const SubscribeSchema = new Schema({
    
    useremail:{
        type : String,
        require : true,
        unique : true
    },
    date:{
      type:Date,
      default:Date.now
  }
  });

const Subscribe = mongoose.model('subscribe' ,SubscribeSchema)
  module.exports = Subscribe