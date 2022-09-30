import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getCategories } from '../requests';
import './categories.css';

export default function Categories() {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCategories()
            .then(({ data }) => setCategories(data.categories))
            setIsLoading(false)
    }, []);


    return isLoading ? <p>Loading...</p> :
    <section className="categories">
        <ul className="categories-list">

            { categories.map((category, index) => (
                <li className="each-category" key={`${category.category}-${index}`}>

                  <Link to={`/reviews/${category.category}`}><p>{ category.category }</p></Link>
                  <p>{ category.description }</p>
                
                </li>

        ))}

        </ul>
    </section>
}