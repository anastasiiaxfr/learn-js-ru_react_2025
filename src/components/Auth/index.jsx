import {useState} from 'react';
import s from './styles.module.sass';
import Button from '../UI/Button';
import LoginForm from '../UI/Forms/LoginForm';
import RegisterForm from '../UI/Forms/RegisterForm';

export default function AuthForms() {
	const [isTabActive, setIsTabActive] = useState(true);

	return (
		<div className={s.auth}>
			<div className={s.auth_header}>
				<Button
					onClick={() => setIsTabActive(true)}
					isActive={isTabActive}
				>
					Register
				</Button>

				<Button
					onClick={() => setIsTabActive(false)}
					isActive={!isTabActive}
				>
					Login
				</Button>
			</div>

			<div className={s.auth_body}>
				{isTabActive && (
					<>
						<h2>Register</h2>
						<RegisterForm />
					</>
				)}

				{!isTabActive && (
					<>
						<h2>Log In</h2>
						<LoginForm />
					</>
				)}
			</div>
		</div>
	);
}
