import { useEffect, useState } from 'react';
import axios from 'axios';

import './categories.css';

export default function Categories() {

    const [allCategories, setAllCategories] = useState([])

    useEffect(() => {
        axios.get('https://shadia-nc-games.herokuapp.com/api/categories')
            .then(({ data }) => setAllCategories(data.categories))
            .catch((err) => {
                console.log('error', err)
            })
    }, []);

    console.log('allCategories', allCategories);

    return <section className="categories">
        <ul className="categories-list">

            {allCategories.map((category, index) => (
                <li key={`${category.slug}-${index}`}>
                  { category.slug }
                  { category.description }
                </li>

        ))}

        </ul>
    </section>
}