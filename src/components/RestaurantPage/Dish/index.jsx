import React from 'react'
import Counter from '../../Counter'
import { useCounter } from '../../Counter/useCounter.js'
import s from '../Card/styles.module.sass'

function Dish({ menu }) {
    const { increment, decrement, count } = useCounter()

    return (
        <ul className={s.card_list}>
            {menu.map(({ id, name }) => (
                <li key={id}>
                    <span>{name}</span>
                    <Counter
                        increment={increment}
                        decrement={decrement}
                        count={count}
                        key={id}
                    />
                </li>
            ))}
        </ul>
    )
}

export default Dish
