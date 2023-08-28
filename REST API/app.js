const express =require('express');

const app=express();
port=3000;

app.get('/', (req, res)=>{
    res.send("Hello");
});
app.get('/api/courses', (req, res)=>{
    res.send([1,2,4]);
});
app.listen(port, ()=>{
    console.log(`server ${port}`);
} );