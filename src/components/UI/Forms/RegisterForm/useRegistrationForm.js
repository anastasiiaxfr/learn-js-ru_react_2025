import {useContext} from 'react';
import AuthContext from '../../../Context/AuthContext/constant.js';
import authData from '../../../Auth/authData.js';
import useAuthForm from '../useAuthForm.js';

export const initialData = {
	name: '',
	email: '',
	password: ''
};

export default function useRegistrationForm() {
	const {register} = useContext(AuthContext);
	const {formData, error, setField, setError, resetForm} = useAuthForm();

	const handleInputChange = e => {
		const {name, value} = e.target;
		setField(name, value);
	};

	const onFormSubmit = e => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.password) {
			setError('Please fill in all fields.');
			return;
		}

		setError('');

		const userExists = authData.some(user => user.email === formData.email);

		if (userExists) {
			setError('This user is already registered.');
			return;
		}

		authData.push({
			name: formData.name,
			email: formData.email
		});

		register(formData.email);
		resetForm();
	};

	return {formData, error, onFormSubmit, handleInputChange};
}
