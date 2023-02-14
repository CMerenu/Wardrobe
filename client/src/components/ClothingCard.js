import React from 'react'

const ClothingCard = () => {
  return (
    <div className="clothing-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="poster" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <p>
          {props.brand} {props.color} {props.size}
        </p>
      </div>
    </div>
  )
}

export default ClothingCard
