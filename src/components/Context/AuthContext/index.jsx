import {useState} from 'react';
import AuthContext from './constant';

const AuthProvider = ({children}) => {
	const [isAuth, setAuth] = useState(false);
	const [userEmail, setUserEmail] = useState(''); 

	const toggleAuth = () => {
		setAuth(prev => !prev);
		if (isAuth) {
			setUserEmail(''); 
		}
	};

	const setUser = email => {
		setUserEmail(email); 
		setAuth(true); 
	};

	return (
		<AuthContext.Provider value={{isAuth, toggleAuth, userEmail, setUser}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
