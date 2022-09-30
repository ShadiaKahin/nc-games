import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewItem from '../components/ReviewItem';
import { getReviews } from '../requests';
import './reviews.css'

export default function Reviews() {
    
    const [reviews, setReviews] = useState([]);

    const params = useParams();
    let paramsObject = {}; 

    if (params.category) { paramsObject.category = params.category };

    useEffect(() => {
        getReviews(paramsObject)
            .then(({ data }) => setReviews(data.reviews))
    }, [])
    

  // todo - make a different title for category reviews??? to show its filtered?

    return <section className="reviews">
        <ul className="reviews-list">
            {reviews.map((review) => (
                <ReviewItem key={review.review_id} review={review} />
        ))}

        </ul>
    </section>
}