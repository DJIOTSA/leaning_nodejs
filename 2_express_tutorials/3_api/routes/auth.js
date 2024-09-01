const express = require('express')
const router = express.Router()

const users = require('./users')

router.post('/', (req, res)=>{
    const {name, password} = req.body;
    // const {}

    if(!name || !password){
        return res.status(404).json({SUCCESS:false, msg:"Provide name and password values!"})
    }

    const user = users.find((user)=>{
        if (user.name== name && user.password==password){
            return user
        }
    })

    if(!user){
        return res.status(404).json({SUCCESS: false, msg:"Invalid credentials!"})
    }

    res.status(200).json({SUCCESS:true, msg:"User Logged in successfully!", results:user})
})



module.exports = router