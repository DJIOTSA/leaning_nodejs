const express = require('express');

// setup router
const router = express.Router()

const {people} = require('../../../data')

// since we have set the url(/api.people) ant the level of 8_routers.js we don't need it here

// get the default http method
router.get('/', (req, res)=>{
    res.status(200).json({
        status: "SUCCESS",
        results: people
    })
})

// get person details
router.get('/:pk', (req, res)=>{
    const {pk} = req.params
    if(isNaN(Number(pk))){
        return res.status(204).json({SUCCESS:false, msg:"Invalid Person."})
    }
    const person = people.find((person)=> person.id==pk)
    if(!person){
        return res.status(200).json({SUCCESS:false, msg:"Person not found!"})
    }
    res.status(200).json({SUCCESS:true, details:person})
})

// post testing with postman
router.post('/', ((req, res)=>{
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
router.put('/:pk', ((req, res)=>{
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
router.delete('/:pk', ((req, res)=>{
    const {pk} = req.params

    const person = people.find((person)=> person.id == pk)

    if (!person){
        return res.status(404).json({SUCCESS:false, msg:"person no found!"})
    }
    const newPersons = people.filter((person)=> person.id != pk)
    res.status(200).json({"SUCCESS":true, results:newPersons})
}))

module.exports = router