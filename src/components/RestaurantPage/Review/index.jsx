import React from 'react'
import s from '../styles.module.sass'

function ReviewRestaurant({ reviews }) {
    return (
        <ul className={s.card_reviews}>
            {reviews.map(({ id, text }) => (
                <li key={id}>{text}</li>
            ))}
        </ul>
    )
}

export default ReviewRestaurant
