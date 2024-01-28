const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    work: {
        type : String,
        required : true
    },
    completed: {
        type : Boolean,
        required : true
    },
    createdAt: {
        type : Date,
        required : true,
        default : Date.now
    }
})

module.exports = mongoose.model('todoModel', todoSchema)