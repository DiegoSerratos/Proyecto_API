const express = require('express')
const app = express()
var bodyParser = require('body-parser')        
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 
const router=require("./routers");
app.use("/api",router)
console.log("escuchando en le puerto");
app.listen(3000)