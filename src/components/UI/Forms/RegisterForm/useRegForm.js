import {use, useState} from 'react';
import AuthContext from '../../../Context/AuthContext/constant.js';
import authData from '../../../Auth/authData.js';

export const initialData = {
	name: '',
	email: '',
	password: ''
};

export default function useRegForm() {
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

		if (!formData.name || !formData.email || !formData.password) {
			setError('Please fill in all fields.');
			return;
		}

		setError('');

		const userExists = authData.some(
			user => user.name === formData.name && user.email === formData.email
		);

		if (userExists) {
			setError('This user is already registered.');
			setFormData(initialData);
			return;
		}

		authData.push({
			name: formData.name,
			email: formData.email
		});

		toggleAuth();
		setUser(formData.email);
		setFormData(initialData);
	};

	return {onFormSubmit, error, handleInputChange, formData};
}
