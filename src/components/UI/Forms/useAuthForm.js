import {useReducer} from 'react';

const initialState = {
	formData: {
		name: '',
		email: '',
		password: ''
	},
	error: ''
};

const formReducer = (state, action) => {
	switch (action.type) {
		case 'SET_FIELD':
			return {
				...state,
				formData: {
					...state.formData,
					[action.field]: action.value
				}
			};
		case 'SET_ERROR':
			return {
				...state,
				error: action.error
			};
		case 'RESET_FORM':
			return initialState;
		default:
			return state;
	}
};

const useAuthForm = () => {
	const [state, dispatch] = useReducer(formReducer, initialState);

	const setField = (field, value) => {
		dispatch({type: 'SET_FIELD', field, value});
	};

	const setError = error => {
		dispatch({type: 'SET_ERROR', error});
	};

	const resetForm = () => {
		dispatch({type: 'RESET_FORM'});
	};

	return {
		formData: state.formData,
		error: state.error,
		setField,
		setError,
		resetForm
	};
};

export default useAuthForm;
