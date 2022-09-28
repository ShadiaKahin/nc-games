import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import ReviewItem from '../components/ReviewItem';
// import './category.css';

export default function Category() {

    const [categoryReviews, setCategoryReviews] = useState([]);
    const category = useParams();

    useEffect(() => {
        axios.get(`https://shadia-nc-games.herokuapp.com/api/reviews/?category='${category.slug}'`)
            .then(({ data }) => setCategoryReviews(data.reviews))
            .catch((err) => {
                console.log('error', err)
            })
    }, []);

    return <section className="category-reviews">
      <ul className="category-reviews-list">
        { categoryReviews.map((categoryReview) => (
        <ReviewItem key={categoryReview.review_id} review={categoryReview} />
        
    ))}

    </ul>
</section>
}