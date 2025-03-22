import {use} from 'react';
import AuthContext from '../../Context/AuthContext/constant';
import Button from '../../UI/Button';

export default function AuthToggle() {
	const {isAuth, toggleAuth} = use(AuthContext);

	return (
		<Button style="bg" onClick={toggleAuth}>
			{isAuth ? 'Sign Out' : 'Sign In'}
		</Button>
	);
}
