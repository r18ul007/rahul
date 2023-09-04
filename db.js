const mongoose = require('mongoose')

const dburl ='mongodb+srv://007rahulp01:12345@cluster0.ezqtfgm.mongodb.net/emp_db?retryWrites=true&w=majority'


module.exports = () => {
    return mongoose.connect(dburl,{useNewUrlParser: true, useUnifiedTopology: true})
}
