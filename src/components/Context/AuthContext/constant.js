import {createContext} from 'react';

const AuthContext = createContext({
	isAuth: false,
	userEmail: ''
});

export default AuthContext;
