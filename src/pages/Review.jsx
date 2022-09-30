import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewById } from '../requests';

export default function Review() {

    const [review, setReview] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const params = useParams();

    useEffect(() => {
        getReviewById(params.review_id)
          .then((data) => setReview(data))
            setIsLoading(false)
    }, []);
    
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

   
   return isLoading ? <p>Loading...</p> :
   (
      <div>
        <div >
          <img  src={review_img_url} alt="game review image" />
        </div>
      <p>{owner}</p>
      <p>{created_at}</p>
    
      <p>{title}</p>
      <p>Category: {category}</p>
      <p>Designer: {designer}</p>
      <p>{review_body}</p>
      <p>{votes}</p>    
      </div>          
    )
}
