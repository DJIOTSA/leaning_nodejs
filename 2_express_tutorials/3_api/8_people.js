const express = require('express');

// setup router
const router = express.Router()

const {people} = require('../../data')

// get the default http method
router.get('/api/people', (req, res)=>{
    res.status(200).json({
        status: "SUCCESS",
        results: people
    })
})


// post testing with postman
router.post('/api/people', ((req, res)=>{
    const {name} = req.body;

    if (!name){
        return res.status(404).json({SUCCESS:false, msg:"Provide name value!"})
    }
    let data = people
    newPerson ={
        id: people.length + 1,
        name: name
    }
    people.push(newPerson)
    res.status(200).json({SUCCESS:true,data:people})
}))

// put method
router.put('/api/people/:pk', ((req, res)=>{
    const {pk} = req.params
    const {name} = req.body

    const person = people.find((person)=> person.id == pk)

    if (!person){
        return res.status(404).json({SUCCESS:false, msg:"Person no found!"})
    }

    people.map((person)=>{
        if (person.id==pk){
            person.name = name
        }
    })  

    res.status(200).json({SUCCESS:true, results:people})
    
}))

// delete method
router.delete('/api/people/:pk', ((req, res)=>{
    const {pk} = req.params

    const person = people.find((person)=> person.id == pk)

    if (!person){
        return res.status(404).json({SUCCESS:false, msg:"person no found!"})
    }
    const newPersons = people.filter((person)=> person.id != pk)
    res.status(200).json({"SUCCESS":true, results:newPersons})
}))

// router.listen(5000, ()=> console.log('listening to port 5000.....'))