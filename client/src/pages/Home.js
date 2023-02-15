import axios from 'axios'
import ClothingCard from '../components/ClothingCard'
import { useEffect, useState } from 'react'

const Home = () => {
  const [clothes, setClothes] = useState([])
  const [filteredClothes, setFilteredClothes] = useState([])

  const getClothes = async () => {
    const response = await axios.get(`http://localhost:3001/api/clothing`)

    setClothes(response.data.clothing)
    setFilteredClothes(response.data.clothing)
    console.log(response.data.clothing)
  }

  useEffect(() => {
    getClothes()
  }, [])

  const chooseType = (type) => {
    setFilteredClothes(clothes.filter((clothe) => clothe.category === type))
    console.log(type)
  }

  // const handleChange = (e) => {
  //   setSearchQuery(e.target.value)
  // }

  return (
    <div className="search">
      <div>
        <h1>Categories</h1>
        <button name="Top" onClick={() => chooseType('Top')}>
          Tops
        </button>
        <button name="Bottom" onClick={() => chooseType('Bottom')}>
          Bottoms
        </button>
        <button name="Accessory" onClick={() => chooseType('Accessory')}>
          Accessories
        </button>
      </div>
      <div className="clothing">
        <h1>Clothes</h1>
        <section className="container-grid">
          {filteredClothes.map((item) => (
            <ClothingCard
              name={item.name}
              image={item.image}
              brand={item.brand}
              size={item.size}
              color={item.color}
              category={item.category}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default Home
