require("dotenv").config()
const express = require("express")
const User = require("./model/user")
const app = express()

app.get("/", (req,res)=>{
    res.send("<h1>Welcome to Node & MongoDB !</h1>")
})


app.post("/signup", async (req,res)=>{

    // For All Mandatory Fileds
    const {firstname, lastname, email, password} = req.body
    if(!(email && password && firstname && lastname) ){
        res.status(400).send("All the Fileds are required")
    }

    // Unique Mail 
     const extuser = await User.findOne(email)
     if(extuser){
        res.status(400).send("User Already Exits")
     }
    
     // Password 





})


module.exports = app;