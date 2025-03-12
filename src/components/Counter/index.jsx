import React, { useState } from 'react'
import s from './styles.module.sass'

function Counter({ range }) {
    const { min, max } = range
    const [count, setCount] = useState(0)
    return (
        <div className={s.counter}>
            <button
                onClick={() => setCount(prev => prev - 1)}
                disabled={count <= min}
            >
                -
            </button>
            <button
                onClick={() => setCount(prev => prev + 1)}
                disabled={count >= max}
            >
                +
            </button>
            <span>{count}</span>
        </div>
    )
}

export default Counter
