const { Schema, model } = require('mongoose')

const schema = new Schema({
    wagons: [{
        type: String
    }],
    chairs: [{
        type: String,
    }],
    type_id: {
        type: Schema.Types.ObjectId,
        ref: 'type'
    }
})

module.exports = model('seat', schema)
