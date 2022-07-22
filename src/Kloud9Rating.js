import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Kloud9Rating.css';


function Kloud9Rating(props) {
    // const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        [...Array(props.starNumber)].map((star, index) => {
            const ratingValue = index +1
            return (
                <div >
                <label>
                    <input 
                    type='radio' 
                    name='rating' 
                    value={ratingValue} 
                    onClick={() => props.onRating(ratingValue)}
                    />

                    <FaStar 
                    className="star" 
                    color={ratingValue <= (hover || props.rating) ? "#ffc107" : "#e4e5e9"} 
                    size={props.size}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
                </label>            
            </div>
            )
          })
    )
}

export default Kloud9Rating;