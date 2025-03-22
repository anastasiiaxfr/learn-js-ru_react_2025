import {useReducer} from 'react';
import AuthContext from './constant';

const initialState = {
	isAuth: false,
	userEmail: ''
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const REGISTER = 'REGISTER';

const authReducer = (state, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				isAuth: true,
				userEmail: action.email
			};
		case LOGOUT:
			return {
				...state,
				isAuth: false,
				userEmail: ''
			};
		case REGISTER:
			return {
				...state,
				isAuth: true,
				userEmail: action.email
			};
		default:
			return state;
	}
};

const AuthProvider = ({children}) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const login = email => {
		dispatch({type: LOGIN, email});
	};

	const logout = () => {
		dispatch({type: LOGOUT});
	};

	const register = email => {
		dispatch({type: REGISTER, email});
	};

	return (
		<AuthContext value={{...state, login, logout, register}}>
			{children}
		</AuthContext>
	);
};

export default AuthProvider;
