const express = require('express');

const router = express.Router()

// get the default http method
app.get('/api/people', (req, res)=>{
    res.status(200).json({
        status: "SUCCESS",
        results: people
    })
})

// post request
app.post('/api/people', (req, res)=>{
    const {name} = req.body;

    if(!name){
        res.status(400).json({SUCCESS:false, msg:"please provide name value!"})
    }
    // 201 status for successful post request
    res.status(201).json({SUCCESS:true, person:name})
})



// post testing with postman
app.post('/api/postman', ((req, res)=>{
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
app.put('/api/postman/:pk', ((req, res)=>{
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
app.delete('/api/postman/:pk', ((req, res)=>{
    const {pk} = req.params

    const person = people.find((person)=> person.id == pk)

    if (!person){
        return res.status(404).json({SUCCESS:false, msg:"person no found!"})
    }
    const newPersons = people.filter((person)=> person.id != pk)
    res.status(200).json({"SUCCESS":true, results:newPersons})
}))

