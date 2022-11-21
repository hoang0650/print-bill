const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: String,
    train: String,
    time: String
})

module.exports = model('schedule', schema)
