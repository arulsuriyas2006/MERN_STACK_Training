const connection =require('./config/db.js')
const mongoose =require('mongoose')
const env = require("dotenv")
const cors = require('cors')
env.config();
connection();
const express = require('express')
const app =express()
app.use(cors())
app.use(express.json());
const port = process.env.PORT;
const studentRoutes = require('./routes/studentRoute.js')
app.use("/api",studentRoutes)
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})