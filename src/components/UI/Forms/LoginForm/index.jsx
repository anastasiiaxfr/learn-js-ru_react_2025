import s from '../styles.module.sass';
import Button from '../../Button/index.jsx';
import useLoginForm from './useLoginForm.js';

export default function LoginForm() {
	const {error, onFormSubmit, handleInputChange, formData} = useLoginForm();

	return (
		<form
			action="/"
			method="POST"
			noValidate
			className={s.form}
			onSubmit={onFormSubmit}
		>
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
