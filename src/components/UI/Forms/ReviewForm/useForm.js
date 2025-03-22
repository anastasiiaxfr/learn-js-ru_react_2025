import {useReducer} from 'react';

export const initialState = {
	name: '',
	review: '',
	count: 0,
	error: ''
};

const SET_FIELD = 'SET_FIELD';
const RESET_FORM = 'RESET_FORM';
const SET_ERROR = 'SET_ERROR';
const SET_INCREMENT_RATING = 'SET_INCREMENT_RATING';
const SET_DECREMENT_RATING = 'SET_DECREMENT_RATING';

export function useForm() {
	function formReducer(state, action) {
		switch (action.type) {
			case SET_FIELD:
				return {...state, [action.field]: action.value};
			case RESET_FORM:
				return {...initialState};
			case SET_ERROR:
				return {...state, error: action.error};
			case SET_INCREMENT_RATING:
				return {...state, count: state.count + 1};
			case SET_DECREMENT_RATING:
				return {...state, count: state.count - 1};
			default:
				return state;
		}
	}

	const [state, dispatch] = useReducer(formReducer, initialState);

	const increment = () => {
		dispatch({type: SET_INCREMENT_RATING});
	};
	const decrement = () => {
		dispatch({type: SET_DECREMENT_RATING});
	};

	const handleInputChange = e => {
		const {name, value} = e.target;
		dispatch({type: SET_FIELD, field: name, value});
	};

	const onFormSubmit = () => {
		if (!state.name || !state.review || state.count === 0) {
			dispatch({
				type: SET_ERROR,
				error: 'Please fill in all fields and set a valid rate.'
			});
		} else {
			dispatch({type: SET_ERROR, error: ''});

			dispatch({type: RESET_FORM});
		}
	};

	const onFormReset = () => {
		dispatch({type: RESET_FORM});
	};

	const isDisabled = !state.name && !state.review && state.count === 0;

	return {
		state,
		onFormSubmit,
		onFormReset,
		handleInputChange,
		increment,
		decrement,
		isDisabled
	};
}
