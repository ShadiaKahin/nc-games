import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getCategories } from '../requests';
import './categories.css';

export default function Categories() {

    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        getCategories()
            .then(({ data }) => setCategories(data.categories))
    }, []);


    return <section className="categories">
        <ul className="categories-list">

            { categories.map((category, index) => (
                <li className="each-category" key={`${category.slug}-${index}`}>

                  <Link to={`/reviews/${category.slug}`}><p>{ category.slug }</p></Link>
                  <p>{ category.description }</p>
                
                </li>

        ))}

        </ul>
    </section>
}