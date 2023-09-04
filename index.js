const express = require("express");
const bodyParser = require('body-parser')
const connectDb = require('./db')
const emproutes =require('./routes/router')
// const env = require("dotenv").config()
// const port = process.env.port || 2000;
const port = 2000;
const app = express();

// middleware
app.use(express.json());

app.use(bodyParser.json())
app.use('/router', emproutes)


connectDb()
.then(()=>{
    console.log("db connect successful");
    app.listen(port,
        () => console.log(`port is running on ${port}`))
})
.catch(err => console.log(err))


