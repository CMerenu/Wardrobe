const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Clothing = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    color: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: String, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Clothing', Clothing)
