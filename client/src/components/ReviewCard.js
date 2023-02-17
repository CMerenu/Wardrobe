import React from 'react'
import axios from 'axios'

const ReviewCard = (props) => {
  const deleteReview = async () => {
    console.log(props)
    const response = await axios.delete(
      `http://localhost:3001/api/review/${props.reviewID}`
    )
    props.getClothes()
  }

  return (
    <div>
      <div>
        <h5>{props.user}</h5>
        <p>{props.comment}</p>
      </div>
      <button onClick={deleteReview} className="change-button">
        delete
      </button>
    </div>
  )
}
export default ReviewCard
