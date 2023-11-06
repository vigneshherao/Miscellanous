const express = require("express");

const app = express();


const port = 4000;


app.use(express.urlencoded({extended:true}));
app.use(express.json())


app.listen(port,()=>{
    console.log("app is started");
})


app.get("/register",(req,res)=>{
    let {user,password} = req.query;

    res.send(`Hello ${user} and your password is set to ${password}`);
})
app.post("/register",(req,res)=>{
    let {user,password} = req.body;
    res.send(`Hello ${user} and your password is set to ${password}`);
})