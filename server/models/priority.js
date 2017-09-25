const mongoose = require('mongoose')

const PrioritySchema = new mongoose.Schema({
    title: String
})

module.exports = exports = mongoose.model('Priority', PrioritySchema)