import React from 'react'
import axios from 'axios'

const ClothingCard = (props) => {
  const deleteClothes = async () => {
    const response = await axios.delete(
      `http://localhost:3001/api/clothing/${props.item._id}`
    )
    props.getClothes()
  }

  return (
    <div className="clothing-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="poster" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>
          {props.brand} {props.color} {props.size} {props.category}
        </p>
      </div>
      <button onClick={deleteClothes}>delete</button>
    </div>
  )
}

export default ClothingCard
