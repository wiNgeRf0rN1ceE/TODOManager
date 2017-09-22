const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    duoDate: Date,
    comments: String,
    priority: {
        type: String,
        enum: ['red','yellow','grey']
    }
})

module.exports = exports =  mongoose.model('Todo', TodoSchema)