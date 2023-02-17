import { useState } from "react"
import axios from "axios"

const UpdateClothes = ({item, getClothes}) => {
  
  const [updateItem, setUpdateItem] = useState(item)
  const handleChange = (event) => {
    setUpdateItem({ ...updateItem, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    await axios.put(`http://localhost:3001/api/clothing/${updateItem._id}`, updateItem)
  getClothes()
  }
return(
  <div>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={updateItem.name}
      />
      <label htmlFor="brand">Brand:</label>
      <input
        id="brand"
        type="text"
        onChange={handleChange}
        value={updateItem.brand}
      />
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        type="text"
        onChange={handleChange}
        value={updateItem.color}
      />
      <label htmlFor="category">Category:</label>
      <select id="category" onChange={handleChange} value={updateItem.category}>
        <option value="Top">Top</option>
        <option value="Bottom">Bottom</option>
        <option value="Accessory">Accessory</option>
        <option value="Shoes">Shoes</option>
      </select>
      <label htmlFor="size">Size:</label>
      <input
        id="size"
        type="text"
        onChange={handleChange}
        value={updateItem.size}
      />
      <label htmlFor="image">Image URL:</label>
      <input
        id="image"
        type="text"
        onChange={handleChange}
        value={updateItem.image}
      />
      <button type="submit" className="edit-button">Edit!</button>
    </form>
  </div>
)
}

export default UpdateClothes