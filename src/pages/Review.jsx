import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReviews } from '../requests';

export default function Review() {

    const [reviews, setReviews] = useState([]);

    const params = useParams();
    let paramsObject = {}; 
    if (params.review_id) { paramsObject.review_id = params.review_id };


    useEffect(() => {
        getReviews(paramsObject)
            .then(({ data }) => setReviews(data.reviews))
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
        votes} = reviews[0];

    return (
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
