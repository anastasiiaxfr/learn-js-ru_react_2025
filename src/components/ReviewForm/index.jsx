import s from './styles.module.sass'
import Counter from '../Counter'
import { useForm } from './useForm.js'

export default function ReviwForm() {
    const {
        state,
        onFormSubmit,
        onFormReset,
        handleInputChange,
        increment,
        decrement,
    } = useForm()

    return (
        <form
            action="/"
            method="GET"
            noValidate
            className={s.form}
            onSubmit={(e) => e.preventDefault()}
        >
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={state.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="review">Review</label>
                <textarea
                    id="review"
                    name="review"
                    rows="3"
                    value={state.review}
                    onChange={handleInputChange}
                    required
                ></textarea>
            </div>
            <div>
                <label htmlFor="rate">Rate</label>
                <Counter
                    increment={increment}
                    decrement={decrement}
                    count={state.count}
                />
            </div>

            {state.error && <div className={s.error}>{state.error}</div>}

            <div>
                <button type="button" onClick={onFormSubmit}>
                    Send
                </button>
                <button type="button" onClick={onFormReset}>
                    Cancel
                </button>
            </div>
        </form>
    )
}
