import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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


    return <section className="categories">
        <ul className="categories-list">

            {allCategories.map((category, index) => (
                <li className="each-category" key={`${category.slug}-${index}`}>

                  <Link to={`/category/${category.slug}`}><p>{ category.slug }</p></Link>
                  <p>{ category.description }</p>
                
                </li>

        ))}

        </ul>
    </section>
}