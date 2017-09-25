const mongoose = require('mongoose')

const GroupSchema = new mongoose.Schema({
    title: String
})

module.exports = exports = mongoose.model('Group', GroupSchema)