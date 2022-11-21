const { Schema, model } = require('mongoose')

const schema = new Schema({
    name: String,
    code: {
        type: String,
        unique: true,
    }
})

module.exports = model('station', schema)
