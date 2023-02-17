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
        <h3>
          {props.brand} {props.name}
        </h3>
        <p>
          {props.color} {props.category} {props.size}
        </p>
      </div>
      <button onClick={deleteClothes} className="change-button">
        delete
      </button>
    </div>
  )
}

export default ClothingCard
