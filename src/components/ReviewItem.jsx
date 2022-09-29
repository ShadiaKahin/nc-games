import { Link } from 'react-router-dom';

import './review-item.css'

export default function reviewItem({ review }) {
 
    const {
        category,
        created_at,
        designer,
        owner,
        review_body,
        review_id,
        review_img_url,
        title,
        votes} = review;
    
    return (

  <div className="review-item">
    
    <div className="review-item-column-1">
     <div className="review-item-image-container"> <img className="review-item-image" src={review_img_url} alt="game review image"/></div>
      <p>{owner}</p>
      <p>{created_at}</p>
    </div>
    
   <Link to={`/review/${ review_id }`}>
    <div className="review-item-column-2">
      <p className="title">{title}</p>
      <p>Category: {category}</p>
      <p>Designer: {designer}</p>
      <p className='review-body'>{review_body}</p>
      <p>{votes}</p>
    </div>
    </Link>
            
  </div>  
  )
}
