import {useState} from 'react';
import s from './styles.module.sass';
import Button from '../UI/Button';
import LoginForm from '../UI/Forms/LoginForm';
import RegisterForm from '../UI/Forms/RegisterForm';

export default function AuthForms() {
	const [isRegisterSelected, setIsRegisterSelected] = useState(true);

	return (
		<div className={s.auth}>
			<div className={s.auth_header}>
				<Button
					onClick={() => setIsRegisterSelected(true)}
					isActive={isRegisterSelected}
				>
					Register
				</Button>

				<Button
					onClick={() => setIsRegisterSelected(false)}
					isActive={!isRegisterSelected}
				>
					Login
				</Button>
			</div>

			<div className={s.auth_body}>
				{isRegisterSelected ? (
					<>
						<h2>Register</h2>
						<RegisterForm />
					</>
				) : (
					<>
						<h2>Log In</h2>
						<LoginForm />
					</>
				)}
			</div>
		</div>
	);
}
