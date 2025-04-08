import s from '../styles.module.sass';
import {useForm} from './useForm.js';

import Counter from '../../Counter/index.jsx';
import Button from '../../Button/index.jsx';

export default function ReviewForm({onSubmit, isSubmitButtonDisabled}) {
	const {state, onFormReset, handleInputChange, increment, decrement} =
		useForm();

	const {review, count} = state;

	return (
		<form
			action="/"
			method="GET"
			noValidate
			className={s.form}
			onSubmit={(e) => e.preventDefault(e)}
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

			<div className={s.btns}>
				<Button
					onClick={() =>
						onSubmit({
							text: review,
							rating: count,
							userId: '20bed9b5-9c7b-4771-8221-75b74ed1904a',
						})
					}
				>
					Send
				</Button>
				<Button onClick={onFormReset} disabled={isSubmitButtonDisabled}>
					Cancel
				</Button>
			</div>
		</form>
	);
}
