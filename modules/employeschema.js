const mongoose = require('mongoose')
// collection name and schema
module.exports = mongoose.model('emp',{
    fullname:{type:String},
    position:{type:String},
    location:{type:String},
    salary:{type:Number}
}) 