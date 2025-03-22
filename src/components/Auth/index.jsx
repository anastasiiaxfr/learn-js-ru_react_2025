import {useState} from 'react';
import s from './styles.module.sass';
import Button from '../UI/Button';
import LoginForm from '../UI/Forms/LoginForm';
import RegisterForm from '../UI/Forms/RegisterForm';

export default function AuthForms({setShowModal}) {
	const [isActive, setIsActive] = useState(true);

	return (
		<div className={s.auth}>
			<div className={s.auth_header}>
				<Button onClick={() => setIsActive(true)} isActive={isActive}>
					Register
				</Button>

				<Button onClick={() => setIsActive(false)} isActive={!isActive}>
					Login
				</Button>
			</div>

			<div className={s.auth_body}>
				{isActive && (
					<>
						<h1>Register</h1>
						<RegisterForm onClick={() => setShowModal(false)} />
					</>
				)}

				{!isActive && (
					<>
						<h1>Log In</h1>
						<LoginForm onClick={() => setShowModal(false)} />
					</>
				)}
			</div>
		</div>
	);
}
