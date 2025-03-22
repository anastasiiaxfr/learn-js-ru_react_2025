import s from '../styles.module.sass';

import Button from '../../Button/index.jsx';

export default function RegisterForm({onClick}) {
	const onFormSubmit = () => {
		onClick();
	};

	return (
		<form
			action="/"
			method="POST"
			noValidate
			className={s.form}
			onSubmit={e => e.preventDefault()}
		>
			<div>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					name="name"
					value=""
					onChange={() => {}}
					required
				/>
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input
					type="email"
					id="email"
					name="email"
					value=""
					onChange={() => {}}
					required
				/>
			</div>
			<div>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					value=""
					onChange={() => {}}
					required
				/>
			</div>

			{/* {error && <div className={s.error}>{error}</div>} */}

			<div className={s.btns}>
				<Button onClick={onFormSubmit}>Send</Button>
			</div>
		</form>
	);
}
