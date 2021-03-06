import { resetReviewForm } from './reviewFormData'
const API_URL = process.env.REACT_APP_API_URL;

//Action Creators
const setReview = reviews => {
  return {
    type: 'GET_REVIEWS_SUCCESS',
    reviews
  }
}

const addReview = review => {
    return {
      type: "CREATE_REVIEW_SUCCESS",
      review
    }
}

// Async Actions
export const getReviews = (id) => {
  return (dispatch) => {
    return fetch(`${API_URL}/makeup/${id}/reviews`)
    .then(response => response.json())
    .then(reviews => dispatch(setReview(reviews)))
    .catch(error => console.log(error))
  }
}

export const createReviews = (review, id) => {
    return (dispatch) => {
      return fetch(`${API_URL}/makeup/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(review)
      })
      .then(response => response.json())
      .then( review => { dispatch(addReview(review))
                         dispatch(resetReviewForm())})
      .catch( error => console.log(error))
    }
  }
