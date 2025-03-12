import React from 'react'
import Counter from '../../Counter'
import s from './styles.module.sass'

function Card({ data }) {
    const { name, menu, reviews } = data
    const countDishesRange = {
        min: 0,
        max: 5
    }

    return (
        <article className={s.card}>
            <h2 className={s.card_title}>{name}</h2>
            <h3>Меню</h3>
            <ul className={s.card_list}>
                {menu.map(menu => (
                    <li key={menu.id}>
                        <span>{menu.name}</span>
                        <Counter range={countDishesRange} />
                    </li>
                ))}
            </ul>
            <h3>Отзывы</h3>
            <ul className={s.card_reviews}>
                {reviews.map(review => (
                    <li key={review.id}>{review.text}</li>
                ))}
            </ul>
        </article>
    )
}

export default Card
