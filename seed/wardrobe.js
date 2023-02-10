const db = require('../db')
const Clothing = require('../models/clothing')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const clothing = []

  await Clothing.insertMany(clothing)
  console.log('Created some clothes!')
}
const run = async () => {
  await main()
  db.close()
}

run()
