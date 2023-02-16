import axios from 'axios'
import ClothingCard from '../components/ClothingCard'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import AddClothes from '../components/AddClothes'
import UpdateClothes from '../components/UpdateClothes'

const Home = () => {
  const [clothes, setClothes] = useState([])
  const [filteredClothes, setFilteredClothes] = useState([])
  const [deletedClothes, setDeletedClothes] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searched, toggleSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [updateClothes, setUpdateClothes] = useState('')

  const getClothes = async () => {
    const response = await axios.get(`http://localhost:3001/api/clothing`)

    setClothes(response.data.clothing)
    setFilteredClothes(response.data.clothing)
    console.log(response.data.clothing)
  }

  const chooseCategory = (type) => {
    setFilteredClothes(clothes.filter((clothe) => clothe.category === type))
    console.log(type)
  }
  useEffect(() => {
    getClothes()
  }, [])

  return (
    <div>
      <h1>Categories</h1>
      <button
        className="category-button"
        name="Top"
        onClick={() => chooseCategory('Top')}
      >
        Tops
      </button>
      <button
        className="category-button"
        name="Bottom"
        onClick={() => chooseCategory('Bottom')}
      >
        Bottoms
      </button>
      <button
        className="category-button"
        name="Accessory"
        onClick={() => chooseCategory('Accessory')}
      >
        Accessories
      </button>
      <button
        className="category-button"
        name="Shoes"
        onClick={() => chooseCategory('Shoes')}
      >
        Shoes
      </button>
      <div className="clothing">
        <h1>Clothes</h1>
        <section className="container-grid">
          {filteredClothes.map((item) => (
            <div>
              <ClothingCard
                name={item.name}
                image={item.image}
                brand={item.brand}
                size={item.size}
                color={item.color}
                category={item.category}
                item={item}
                getClothes={getClothes}
              />
              <UpdateClothes item={item} getClothes={getClothes} />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
export default Home
