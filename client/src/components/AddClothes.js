import { useState } from 'react'
import axios from 'axios'

const AddClothes = () => {
  const initialState = {
    name: ' ',
    brand: ' ',
    color: ' ',
    category: ' ',
    size: ' ',
    image: ' '
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // do something with the data in the component state
    console.log(formState)
    await axios.post('http://localhost:3001/api/clothing', formState)
    // clear the form
    setFormState(initialState)
  }
  // Note that we need to use `htmlFor` instead of `for` in JSX
  return (
    <div className="Add-clothes">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor="brand">Brand:</label>
        <input
          id="brand"
          type="text"
          onChange={handleChange}
          value={formState.brand}
        />
        <label htmlFor="color">Color:</label>
        <input
          id="color"
          type="text"
          onChange={handleChange}
          value={formState.color}
        />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          onChange={handleChange}
          value={formState.category}
        >
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
          value={formState.size}
        />
        <label htmlFor="image">image:</label>
        <input
          id="image"
          type="text"
          onChange={handleChange}
          value={formState.image}
        />
        <button type="submit" className="change-button">
          Submit!
        </button>
      </form>
    </div>
  )
}

export default AddClothes
