import {useContext, useState} from 'react';
import AuthContext from '../../Context/AuthContext/constant';
import Button from '../../UI/Button';
import Modal from '../../UI/Modal';
import Auth from '../';

export default function AuthToggle() {
	const {isAuth, logout} = useContext(AuthContext);
	const [showModal, setShowModal] = useState(false);

	const handleButtonClick = () => {
		if (isAuth) {
			logout();
		} else {
			setShowModal(prev => !prev);
		}
	};

	return (
		<>
			<Button style="bg" onClick={handleButtonClick}>
				{isAuth ? 'Sign Out' : 'Sign In'}{' '}
			</Button>

			{!isAuth && showModal && (
				<Modal setShowModal={setShowModal}>
					<Auth />
				</Modal>
			)}
		</>
	);
}
