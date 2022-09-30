import { useEffect, useState } from "react";
import ReviewItem from '../components/ReviewItem'
import { getReviews } from '../requests';
import './reviews.css'

export default function Reviews() {
    
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getReviews()
            .then(({ data }) => setReviews(data.reviews))
            setIsLoading(false)
    }, [])
    
    return isLoading ? <p>Loading...</p> :
      <section className="reviews">
        <ul className="reviews-list">
            {reviews.map((review) => (
                <ReviewItem key={review.review_id} review={review} />
        ))}

        </ul>
      </section>
}