const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sb =new Schema({
    name :String,
    age  :Number,
    job  :String,

})
module.exports =  mongoose.model('Sb',sb)