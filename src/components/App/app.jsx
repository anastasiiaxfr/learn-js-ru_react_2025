import {ReduxProvider} from '@/redux/provider';
import ThemeProvider from '../Context/ThemeContext';
import AuthProvider from '../Context/AuthContext';

export const App = ({children}) => {
	return (
		<ReduxProvider>
			<ThemeProvider>
				<AuthProvider>{children}</AuthProvider>
			</ThemeProvider>
		</ReduxProvider>
	);
};
