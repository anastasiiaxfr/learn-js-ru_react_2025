import React from 'react'
import Counter from '../../Counter'
import { useCount } from '../../Counter/useCount.js'
import s from '../styles.module.sass'

function Dish({ menu }) {
    const { increment, decrement, count } = useCount()

    return (
        <ul className={s.card_list}>
            {menu.map(({ id, name }) => (
                <li key={id}>
                    <span>{name}</span>
                    <Counter
                        increment={increment}
                        decrement={decrement}
                        count={count}
                    />
                </li>
            ))}
        </ul>
    )
}

export default Dish
