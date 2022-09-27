import './review-item.css'

export default function reviewItem({ review }) {
 
    const {
        category,
        created_at,
        // designer,
        owner,
        review_body,
        // review_id,
        review_img_url,
        title,
        votes} = review;
    
return <div className="review-item">
    <p>{owner}</p>
    <p>{title}</p>
    <p>{created_at}</p>
    <p>{category}</p>
    <p>{review_body}</p>
    {/* <img src={review_img_url} alt="image"/> */}
    <p>{votes}</p>
</div>

}
