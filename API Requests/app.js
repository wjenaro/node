const express=require('express');
const bodyParser=require('body-parser');
const axios=require('axios');

const app=express();
port=3000;


app.get('/', async (req, res)=>{
    try {
        const response=await axios.get('https://dog.ceo/api/breeds/image/random');
        const results= response.data;
        res.send(results); 
    } catch (error) {
        console.log(error);
    }
    
});

app.listen(port, ()=>{
    console.log(`Server at ${port}`);
});