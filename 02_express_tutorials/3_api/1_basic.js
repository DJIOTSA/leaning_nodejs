const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.json(
        [
            {
                "name": "djiotsa djouake christian daryn",
                "age": 15,
                "list": [{ 1: "one", 2: "two" }]
            },
            [
                {
                    "name": 'DJIOTSA DJOUAKE CHRISTIAN DARYN',
                    "age": 22,
                    "username": "MHULO",
                    "status": "malabar"
                },
                {
                    "name": 'DJIOTSA DJOUAKE CHRISTIAN DARYN',
                    "age": 22,
                    "username": "MHULO",
                    "status": "malabar"
                },
                {
                    "name": 'DJIOTSA DJOUAKE CHRISTIAN DARYN',
                    "age": 22,
                    "username": "MHULO",
                    "status": "malabar"
                },
                {
                    "name": 'DJIOTSA DJOUAKE CHRISTIAN DARYN',
                    "age": 22,
                    "username": "MHULO",
                    "status": "malabar"
                }
            ],
        ]
    )
})


app.listen(5000, () => {
    console.log("running on port 5000....")
})