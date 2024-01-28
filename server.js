
const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/todolist")
const db = mongoose.connection




db.on('error', (err) => {console.log("error")})
db.once('open', () => {console.log("connected")})

app.use(express.json())

const cors = require('cors')
app.use(cors())

const todoRouter = require('./api/v1/routes/todoroute')


app.use('/todo',todoRouter)






app.listen(7000,() => console.log("Server started"))