const express = require('express');
const app = express();

// app.use((req,res)=>{
//     res.send("<h1>this is the response</h1>")
//     //res.send({color: 'red'});
//     // console.log(res)
// })

app.listen(3000,()=>{
    console.log('Listening on Port 3000')
})


// /cats => 'meow'
// /dogs => 'woof'

app.get('/',(req,res)=>{
    res.send('This is home page')
})
app.post('/cats',(req,res)=>{
    res.send("this is a post request")
})
app.get('/cats',(req,res)=>{
console.log('cat request!');
res.send('meow');
})

app.get('/dogs',(req,res)=>{
    res.send('woof');
})

app.get('*',(req,res)=>{
    res.send('idunno that path!')
})