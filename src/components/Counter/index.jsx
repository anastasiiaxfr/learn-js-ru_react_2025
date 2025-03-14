import s from './styles.module.sass'
import { useCounter } from './useCounter.js'

function Counter({ range }) {
    const { min, max } = range
    const { count, increment, decrement } = useCounter(0)

    return (
        <div className={s.counter}>
            <button onClick={increment} disabled={count <= min}>
                -
            </button>
            <button onClick={decrement} disabled={count >= max}>
                +
            </button>
            <span>{count}</span>
        </div>
    )
}

export default Counter
