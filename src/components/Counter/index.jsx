import React from 'react'
import s from './styles.module.sass'

function Counter({ increment, decrement, count = 0, range = {} }) {
    const { min = 0, max = 5 } = range
    return (
        <div className={s.counter}>
            <button onClick={decrement} disabled={count <= min}>
                -
            </button>
            <button onClick={increment} disabled={count >= max}>
                +
            </button>
            <span>{count}</span>
        </div>
    )
}

export default Counter
