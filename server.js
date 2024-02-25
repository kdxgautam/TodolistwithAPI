
//npm init
//npm i express mongoose
//npm i --save-dev dotenv nodemon
//in package.json scripts add --> "dev":"nodemon index.js",




require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)   //todolist is database name, if it exists already it will connect to it or create it if it doesn't exist
const db = mongoose.connection



db.on('error', (err) => {console.log("error")})
db.once('open', () => {console.log("connected")})

app.use(express.json())
//app.use allows us to use any middleware we want
//express.json() lets our server acccept json as a body inside a post or get element or whatever

const cors = require('cors')
app.use(cors())

const todoRouter = require('./api/v1/routes/todoroute')
//links router file


app.use('/todo',todoRouter)
//url will be localhost:7000/todo   anything which have it will go into todo router


app.listen(7000,() => console.log("Server started"))
