const mongoose = require('mongoose')


const Schema = mongoose.Schema


// create user data

const userSchema = new Schema({
  title:{
    required: true,
    type: String
  },
  image:{
    required: true,
    type: String
  },
  description:{
    required: true,
    type: String
  },
  date:{
    type: Date,
    default: Date.now
  }
  
})


const User = mongoose.model('users',userSchema)

module.exports = User