const express = require('express');
const router = express.Router();

const emp = require('../modules/employeschema')

// get all
router.get('/',(req,res)=>{
    emp.find()
    .then(data => res.send(data))
    .catch(err=> console.log(err))
});

// to create 
router.post('/',(req,res)=>{
    emp.create(req.body)
    .then(data => res.send(data))
    .catch(err=> console.log(err))
});

// to get data from one id
router.get('/:id',(req,res)=>{
    emp.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err=> console.log(err))

})

// to update record
router.put('/:id',(req,res)=>{
    emp.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(data => res.send(data))
    .catch(err=> console.log(err))
})


// to delete record
router.delete('/:id',(req,res)=>{
    emp.findOneAndDelete(req.params.id)
    .then(data => res.send(data))
    .catch(err=> console.log(err))
})

module.exports =  router