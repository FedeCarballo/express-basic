const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.status(200).send(console.log('Hi'))
})

app.listen(3000, () =>{
    console.log('server on');
})