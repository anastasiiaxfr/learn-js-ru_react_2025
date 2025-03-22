import s from '../styles.module.sass';
import Button from '../../Button/index.jsx';
import useRegForm from './useRegForm.js';

export default function RegisterForm() {
	const {onFormSubmit, error, handleInputChange, formData} = useRegForm();

	const handleSubmit = e => {
		onFormSubmit(e);
	};

	return (
		<form
			action="/"
			method="POST"
			noValidate
			className={s.form}
			onSubmit={handleSubmit}
		>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
					required
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					value={formData.password}
					onChange={handleInputChange}
					required
				/>
			</div>
			{error && <div className={s.error}>{error}</div>}
			<div className={s.btns}>
				<Button type="submit">Send</Button>
			</div>
		</form>
	);
}
