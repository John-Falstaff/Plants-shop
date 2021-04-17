const {Schema, model} = require('mongoose')

const plant = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
})

module.exports = model('Plant', plant)
