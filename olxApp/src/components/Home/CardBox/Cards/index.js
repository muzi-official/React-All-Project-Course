import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom';


function Cards({ id, title, price, category, image, location, timestamp, description }) {


    return (
        <Link className="cards" to={`/Item/${category}/${title}/${id}`}>
            <div className="card__image">
                <img src={image} alt="Item-Image" className="card__img" />
            </div>
            <div className="card__details">
                <h3 className="card__price">
                    Rs {price}
                </h3>
                <p className="card__title">
                    {title}
                </p>
                <div className="card__footer">
                    <small className="card__location">
                        {location}
                    </small>
                    <small className="card__timestamp">
                        {new Date(timestamp?.toDate()).toDateString()}
                    </small>
                </div>
            </div>

        </Link>
    )
}


export default Cards
