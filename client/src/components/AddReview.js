import { useState } from 'react'
import axios from 'axios'

const AddReview = (props) => {
  const initialReviewState = {
    user: '',
    clothing: '',
    comment: ''
  }

  const [reviewFormState, setReviewFormState] = useState(initialReviewState)

  const handleChange = (event) => {
    setReviewFormState({
      ...reviewFormState,
      [event.target.id]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios.post(
      `http://localhost:3001/api/clothing/${props.item._id}/review`,
      reviewFormState
    )
    props.getClothes()
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="user">User:</label>
      <input
        id="user"
        type="text"
        onChange={handleChange}
        value={reviewFormState.name}
      />
      <label htmlFor="comment">Comment:</label>
      <input
        id="comment"
        type="text"
        onChange={handleChange}
        value={reviewFormState.comment}
      />
      <button type="submit">Add Review!</button>
    </form>
  )
}
export default AddReview
