import {useState} from 'react';
import ThemeContext from './constant';

const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
