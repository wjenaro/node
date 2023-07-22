const express=require('express');
const app=express();
// get method
app.get("/", function(req, res){
    res.send("Good , Moving on welllllllllllll");

    
});
app.post("/", function(req, req){
    console.log(req.rawHeaders)
});

//server
app.listen(3000, ()=> {
    console.log("Server Started at 3000")
});