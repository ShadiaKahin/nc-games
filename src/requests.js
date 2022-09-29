import axios from 'axios';

// todo, add catch and error handling

const gamesApi = axios.create({
    baseURL: 'https://shadia-nc-games.herokuapp.com/api',
});

export const getReviews = () => {
    return gamesApi
        .get('/reviews')
        .then((res) => {
            return res;
        })
};

export const getCategories = () => {
    return gamesApi
        .get('/categories')
        .then((res) => {
            return res;
    })
}

export const getCategoryReviews = (category) => {
    return gamesApi
        .get('/reviews', { params: { category } })
        .then((res) => {
            return res;
        })
};
