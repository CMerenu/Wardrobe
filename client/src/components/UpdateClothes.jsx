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
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        onChange={handleChange}
        value={updateItem.name}
      />
      <label htmlFor="brand">Brand:</label>
      <input
        id="brand"
        type="brand"
        onChange={handleChange}
        value={updateItem.brand}
      />
      <label htmlFor="color">Color:</label>
      <input
        id="color"
        type="color"
        onChange={handleChange}
        value={updateItem.color}
      />
      <label htmlFor="category">Category:</label>
      <select id="category">
        <option value="Top">Top</option>
        <option value="Bottom">Bottom</option>
        <option value="Accessory">Accessory</option>
      </select>
      <label htmlFor="size">Size:</label>
      <input
        id="size"
        type="size"
        onChange={handleChange}
        value={updateItem.size}
      />
      <label htmlFor="image">image:</label>
      <input
        id="image"
        type="image"
        onChange={handleChange}
        value={updateItem.image}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
)
}

export default UpdateClothes