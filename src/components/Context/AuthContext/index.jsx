import {useState} from 'react';
import AuthContext from './constant';

const AuthProvider = ({children}) => {
	const [isAuth, setAuth] = useState(false);

	const toggleAuth = () => {
		setAuth(prev => !prev);
	};

	return (
		<AuthContext.Provider value={{isAuth, toggleAuth}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
