import {useContext} from 'react';
import AuthContext from '../../../Context/AuthContext/constant.js';
import authData from '../../../Auth/authData.js';
import useAuthForm from '../useAuthForm';

export const initialData = {
	email: '',
	password: ''
};

export default function useLoginForm() {
	const {login} = useContext(AuthContext);
	const {formData, error, setField, setError, resetForm} = useAuthForm();

	const handleInputChange = e => {
		const {name, value} = e.target;
		setField(name, value);
	};

	const onFormSubmit = e => {
		e.preventDefault();

		if (!formData.email || !formData.password) {
			setError('Please fill in all fields.');
			return;
		}

		setError('');

		const user = authData.find(user => user.email === formData.email);

		if (user) {
			login(formData.email);
			resetForm();
		} else {
			setError('Email not found.');
		}
	};

	return {formData, error, onFormSubmit, handleInputChange};
}
