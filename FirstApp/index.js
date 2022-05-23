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
app.get('/r/:subreddit',(req,res)=>{
    const{subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} page</h1>`)
})
app.get('/r/:subreddit/:postID',(req,res)=>{
    const {subreddit, postID} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit with post id of ${postID}</h1>`);
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

app.get('/search',(req,res)=>{
    const {q} = req.query;
    console.log(q);
    if(!q){
        res.send('nothing found if nothing searched');
    }
    res.send(`<h1>Search results from: ${q}</h1>`);
})


app.get('*',(req,res)=>{
    res.send('idunno that path!')
})