import {use, useState} from 'react';
import AuthContext from '../../../Context/AuthContext/constant.js';
import authData from '../../../Auth/authData.js';

export const initialData = {
	email: '',
	password: ''
};

export default function useLoginForm() {
	const {toggleAuth, setUser} = use(AuthContext);
	const [formData, setFormData] = useState(initialData);

	const [error, setError] = useState('');

	const handleInputChange = e => {
		const {name, value} = e.target;
		setFormData(prevState => ({
			...prevState,
			[name]: value
		}));
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
			setUser(formData.email);
			toggleAuth();
		} else {
			setError('Email not found.');
		}

		setFormData(initialData);
	};

	return {formData, error, onFormSubmit, handleInputChange};
}
