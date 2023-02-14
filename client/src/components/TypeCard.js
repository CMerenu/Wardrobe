import React from 'react'

const TypeCard = () => {
  return (
    <div className="type-card" onClick={props.onClick}>
      <div className="img-wrapper">
        <img src={props.image} alt="poster" />
      </div>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}

export default TypeCard
