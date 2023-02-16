import axios from 'axios'
import { useEffect, useState } from 'react'
import ClothingCard from '../components/ClothingCard'
import UpdateClothes from '../components/UpdateClothes'
import ReviewCard from '../components/ReviewCard'
import AddReview from '../components/AddReview'

const Wardrobe = () => {
  const [clothes, setClothes] = useState([])
  const [filteredClothes, setFilteredClothes] = useState([])

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
      <div className="category-button-container">
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
          Bottom
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
      </div>
      <h1>Clothes</h1>
      <div className="clothing">
        <section className="container-grid">
          {filteredClothes.map((item) => (
            <div className="clothing-card">
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
              <h4>Reviews</h4>
              {item.reviews.map((review) => (
                <ReviewCard user={review.user} comment={review.comment} />
              ))}
              <AddReview item={item} getClothes={getClothes} />
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
export default Wardrobe