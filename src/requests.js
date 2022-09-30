import axios from 'axios';

// todo, add catch and error handling

const gamesApi = axios.create({
    baseURL: 'https://shadia-nc-games.herokuapp.com/api',
});

export const getCategories = () => {
    return gamesApi
        .get('/categories')
        .then((res) => {
            return res;
        })
};

export const getReviewById = (review_id) => {
    return gamesApi
        .get(`/reviews?review_id=${review_id}`)
        .then((res) => {
            return res.data.reviews[0];
        })
};

export const getReviews = (queryObject) => {

    let queryStr = '';

    if (queryObject && queryObject.category) queryStr += `?category='${queryObject.category}'`;
    if (queryObject && queryObject.review_id) queryStr += `?review_id=${queryObject.review_id}`;
        
    return gamesApi
        .get(`/reviews${queryStr}`)
        .then((res) => {
            return res;
        })
};


// todo - error when filtering by category and id

export const patchReview = (reviewId) => {
    return gamesApi
        .patch(`/reviews/${ reviewId }`, { inc_votes: 1 })
        .then((res) => {
            return res.data;
    })
}
