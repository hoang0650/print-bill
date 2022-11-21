const { Schema, model } = require('mongoose')

const schema = new Schema({
    code: {
        type: String,
        unique: true,
    },
})

module.exports = model('train', schema)
