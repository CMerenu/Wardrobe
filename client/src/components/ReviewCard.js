import React from 'react'
import axios from 'axios'

const ReviewCard = (props) => {
  const deleteReview = async () => {
    const response = await axios.delete(
      `http://localhost:3001/api/clothing/${props.item.comment}`
    )
    props.getClothes()
  }

  return (
    <div>
      <div>
        <h5>{props.user}</h5>
        <p>{props.comment}</p>
      </div>
      <button onClick={deleteReview}>delete</button>
    </div>
  )
}
export default ReviewCard
