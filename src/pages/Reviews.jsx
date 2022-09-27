import { useEffect, useState } from "react";
import axios from 'axios'
import ReviewItem from '../components/ReviewItem'

export default function Reviews() {
    
    const [allReviews, setAllReviews] = useState([])

    useEffect(() => {
        axios.get('https://shadia-nc-games.herokuapp.com/api/reviews')
            .then(({ data }) => setAllReviews(data.reviews))
            .catch((err) => {
                console.log('error', err)
            })
    }, [])
    console.log(allReviews)
    return <section className="reviews">
        <ul>
            {allReviews.map((review) => (
                <ReviewItem key={review.review_id} review={review} />
                
        ))}

        </ul>
    </section>
}