const db = require('../db')
const Clothing = require('../models/clothing')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const clothing = [
    {
      name: 'Sweater',
      brand: 'Warren Lotas',
      color: 'Black',
      size: 'XL',
      category: 'Top',
      image:
        'https://cdn.shopify.com/s/files/1/0727/7851/products/WARRENLOTASPISTOLEROHOODIEBLACKWLPHBLKMYCADb_600x.jpg?v=1661802753'
    },
    {
      name: 'Shirt',
      brand: 'Nike',
      color: 'Blue',
      size: 'XL',
      category: 'Top',
      image: 'https://i.ebayimg.com/images/g/WyAAAOSwLpNgXnkG/s-l500.jpg'
    },
    {
      name: 'Jeans',
      brand: 'Levis',
      color: 'BLue',
      size: 'XL',
      category: 'Bottom',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpoXUuyS3NECwOb6KLV9ZHr-3dML5eS_X5g&usqp=CAU'
    }
  ]

  await Clothing.insertMany(clothing)
  console.log('Created some clothes!')
}
const run = async () => {
  await main()
  db.close()
}

run()
