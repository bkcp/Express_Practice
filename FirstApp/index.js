const express = require('express');
const app = express();

app.use((req,res)=>{
    res.send("<h1>this is the response</h1>")
    //res.send({color: 'red'});
    // console.log(res)
})

app.listen(3000,()=>{
    console.log('Listening on Port 3000')
})
