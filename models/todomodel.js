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
//todoModel is name of model in database  //todoSchema is name of schema corrospoding to that model
//when we import this in a different file the model function allows us to directly interact with database using this schema