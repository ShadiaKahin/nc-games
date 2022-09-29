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
}

export const getReviews = (category) => {

    let queryParams = category && category.slug ? `?category='${category.slug}'` : '';
        
    return gamesApi
        .get(`/reviews${queryParams}`)
        .then((res) => {
            return res;
        })
};
