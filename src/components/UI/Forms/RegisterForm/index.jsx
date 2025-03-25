import s from '../styles.module.sass';
import Button from '../../Button/index.jsx';
import useRegistrationForm from './useRegistrationForm.js';

export default function RegisterForm() {
	const {onFormSubmit, error, handleInputChange, formData} =
		useRegistrationForm();

	return (
		<form
			action="/"
			method="POST"
			noValidate
			className={s.form}
			onSubmit={(e) => onFormSubmit(e)}
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
