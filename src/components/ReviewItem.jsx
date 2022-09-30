import { useState } from 'react';

import { patchReview } from '../requests';
import './review-item.css'

export default function ReviewItem ({ review }) {

    const [ liked, setLiked ] = useState(0);
     
    const {
        category,
        created_at,
        designer,
        owner,
        review_body,
        review_id,
        review_img_url,
        title,
        votes } = review;
    
    const handleLike = reviewId => {
        setLiked((currentLikedState) => (currentLikedState += 1))

        patchReview(reviewId)
            .then(() => {
                console.log('working')
            })
            .catch(() => {
                setLiked((currentLikedState) => (currentLikedState -= 1))
                console.log('Something went wrong!')
            })

    }
    

// todo - like should only be clickable once

return (
    <div className="review-item">
            
    <div className="review-item-column-1">
     <div className="review-item-image-container"> <img className="review-item-image" src={review_img_url} alt="game review image"/></div>
      <p>{owner}</p>
      <p>{created_at}</p>
    </div>
    
    <div className="review-item-column-2">
      <p className="title">{title}</p>
      <p>Category: {category}</p>
      <p className='review-body'>{review_body}</p>
      <p>Likes: {votes}</p>
            <button onClick={ () => handleLike( review_id ) }>
              add like      
            </button>
            <p>You have liked this: { liked }</p>

    </div>

    </div>
  )
}
