import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewItem from '../components/ReviewItem';
import { getCategoryReviews } from '../requests';

export default function Category() {

    const [categoryReviews, setCategoryReviews] = useState([]);
    const category = useParams();

    useEffect(() => {
        getCategoryReviews(category)
          .then(({ data }) => setCategoryReviews(data.reviews))
    }, []);

    return <section className="category-reviews">
      <ul className="category-reviews-list">
        { categoryReviews.map((categoryReview) => (
        <ReviewItem key={categoryReview.review_id} review={categoryReview} />
        
    ))}

    </ul>
</section>
}