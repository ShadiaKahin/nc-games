// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// import ReviewItem from '../components/ReviewItem';
// import { getReviews } from '../requests';

// export default function Category() {

//     const [reviews, setReviews] = useState([]);
//     const category = useParams();

//     useEffect(() => {
//       getReviews({ category: category.slug })
//           .then(({ data }) => setReviews(data.reviews))
//     }, []);

//     return <section className="category-reviews">
//       <ul className="category-reviews-list">
//         { reviews.map((review) => (
//         <ReviewItem key={review.review_id} review={review} />
        
//     ))}
//     </ul>
// </section>
// }