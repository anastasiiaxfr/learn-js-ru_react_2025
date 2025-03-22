import {use, useState} from 'react';
import AuthContext from '../../Context/AuthContext/constant';
import Button from '../../UI/Button';
import Modal from '../../UI/Modal';
import Auth from '../';

export default function AuthToggle() {
	const {isAuth, toggleAuth} = use(AuthContext);
	const [showModal, setShowModal] = useState(false);

	const handleButtonClick = () => {
		toggleAuth();
		setShowModal(prev => !prev);
	};

	return (
		<>
			<Button style="bg" onClick={handleButtonClick}>
				{isAuth ? 'Sign Out' : 'Sign In'}
			</Button>
			{showModal && (
				<Modal setShowModal={setShowModal}>
					<Auth setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
}
